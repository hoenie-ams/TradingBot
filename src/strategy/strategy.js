const Position = require("../models/position")
const Trade = require("../models/trade")

class Strategy {
    constructor({onBuySignal, onSellSignal}){
        this.onBuySignal = onBuySignal
        this.onSellSignal = onSellSignal
        this.position = {}
    }

    async run({ sticks, time}){

    }

    openPositions() {
        return this.getPositions().filter(p => p.state === 'open')
      }

    async positionOpened({ price, time, amount, id}) {
        const trade = new Trade({ price, time, amount, id})
        const position = new Position({ trade, id})
        this.position[id] = position

    }
    async positionClosed({ price, time, amount, id }){
        const trade = new Trade({ price, time, amount})
        const position = new Position({ trade, id})
        this.position[id] = position

        if (position){
            position.close({trade})
        }

    }

}
module.exports = Strategy

