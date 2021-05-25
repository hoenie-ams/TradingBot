const CoinbasePro = require('coinbase-pro')
const Candlestick = require('../models/candlestick')

//time error 
const now = new Date()
const yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1e3))
function toDate(val) {
    return new Date(val * 1e3)
  }



function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

class historicalService{
    constructor({start = yesterday, end = now, interval = 300, product = 'BTC-EUR'}){
        this.client = new CoinbasePro.PublicClient()
        this.product = product
        this.start = start
        this.end = end
        this.interval = interval
        
    }
    async getData(){   
      //console.log(results.length)
      
        const results = await this.client.getProductHistoricRates(this.product, {
          start: this.start,
          end: this.end,
          granularity: this.interval

        },);

        const timestamps = {}

    const filtered = results.filter((x, i) => {
      const timestamp = x[0]
      const str = `${timestamp}`
      if (timestamps[str] !== undefined) {
        return false
      }
      timestamps[str] = true
      return true
    })

    const candlesticks = filtered.map((x) => {
      return new Candlestick({
        startTime: new Date(x[0] * 1e3),
        low: x[1],
        high: x[2],
        open: x[3],
        close: x[4],
        interval: this.interval,
        volume: x[5]
      })
    })
        return candlesticks

        
    }

    async performInterval(intervals) {
      if (intervals.length == 0) { return [] }
      const interval = intervals[0]
      const result = await this.performRequest(interval).then(r => r.reverse())
      await timeout(400)
      const next = await this.performInterval(intervals.slice(1))
      return result.concat(next)
    }

    async performRequest({ start, end }) {
      const results = await this.client.getProductHistoricRates(this.product, {
        start, end, granularity: this.interval
      })
      return results
    }

    createRequests() {
        const max = 300
        const delta = (this.end.getTime() - (this.start.getTime()) * 1e-3)
        const numberIntervals = delta / this.interval
        const numberRequests = Math.ceil(numberIntervals / 300)
    
        const intervals = Array(numberRequests).fill().map((_, reqNum) => {
          const size = this.interval * 300 * 1e3
          const start = new Date(this.start.getTime() + (reqNum * size))
          const end = (reqNum + 1 === numberRequests) ? this.end :
            new Date(start.getTime() + size)
            
    
          return { start, end }
        })
    
        return intervals
      }
}
module.exports = historicalService