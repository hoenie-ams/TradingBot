const Candlestick = require('../models/candlestick')
const Historical = require('../historical')
const { Simple  }  = require('../strategy')

class Backtester{
    constructor ({start,end,interval,product}){
        this.product = product
        this.start = start
        this.end = end
        this.interval = interval
        this.historical = new Historical({
            start,end,interval,product
        })
    }
    async start(){
        try {
            const history = this.historical.getData()
            this.strategy = simple({
                onBuySignal: (x) => { this.onBuySignal(x) },
                onSellSignal: (x) => { this.onSellSignal(x) }
            })

            Promise.all(history.map((stick, index) => {
                const sticks = history.slice(0, index + 1)
                return this.strategy.run({
                    sticks, time: stick.startTime
                })
            }))
            
        } catch (error) {
            console.log(error)
            
        }
    }
    async onBuySignal({price, time}){
        console.log('BUY SIGNAL')


    }
    async onSellSignal({price, size, time}){
        console.log('SELL SIGNAL')

    }
}

module.exports = Backtester
