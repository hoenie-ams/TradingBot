const program = require('commander')
const Backtester = require('./src/backtester')
//const Historical = require('./src/historical/index.js')
const config = require('./configuration')
const SimpleStrategy = require('./src/strategy/simple')
const Strategy = require('./src/strategy/strategy')

const now = new Date()
const yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1e3))
function toDate(val) {
    return new Date(val * 1e3)
  }
program
    .version('1.0.0')
    .option('-i, --interval [interval]', 'interval in secondes for candlestick', 3600)
    .option('-p, --product [product]', 'Product identifier', 'BTC-EUR')
    .option('-s, --start [start]', 'Start time in unix seconds',toDate, yesterday)
    .option('-e, --end [end]', 'End time in unix seconds',toDate, now)
    
    program.parse(process.argv);

    //configurations


const main = async function (){
  const start = program.opts().start
  const end = program.opts().end
  const product = program.opts().product
  const interval = program.opts().interval


  const tester = new Backtester({
    start, end, product, interval, strategyType: strategy
  })

  await tester.start()

}

main()
//console.log('We are live');

