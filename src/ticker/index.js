const coinbase = require('coinbase-pro')
const config = require('../../configuration')

class Ticker {
  constructor({ product, onTick, onError }) {
    this.product = product
    this.onTick = onTick
    this.onError = onError
    this.running = false
  }

  start() {
    this.running = true
    this.client = new coinbase.WebsocketClient(
      [this.product],
      config.get('Coinbase_WS_URL'),
      null,
      { channels: ['ticker', 'heartbeat'] }
    )

    this.client.on('message', async data => {
      if (data.type === 'ticker') {
        await this.onTick(data)
      }
    })

    this.client.on('error', err => {
      onError(err)
      this.client.connect()
    })

    this.client.on('close', () => {
      if (this.running) {
        socket.connect()
      }
    })
  }

  stop() {
    this.running = false
    this.client.close()
  }
}

module.exports = exports = Ticker
