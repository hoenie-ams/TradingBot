
//const commander = require('commander')
//const program = new commander.Command()
const program = require('commander')
const Historical = require('./src/historical/index.js')
const config = require('./configuration')

const now = new Date()
const yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1e3))
function toDate(val) {
    return new Date(val * 1e3)
  }
program
    .version('1.0.0')
    .option('-i, --interval [interval]', 'interval in secondes for candlestick', 300)
    .option('-p, --product [product]', 'Product identifier', 'BTC-EUR')
    .option('-s, --start [start]', 'Start time in unix seconds',toDate, yesterday)
    .option('-e, --end [end]', 'End time in unix seconds',toDate, now)
    
    program.parse(process.argv);

    //configurations


const main = async function (){
   const {start, end, interval, product} = program
   //const options = program.opts();
   //console.log(options);
   const service = new Historical({ 
     product, 
     start, 
     end, 
     interval
    })
  const data = await service.getData()
     console.log(data)

 
}


main()
console.log('We are live');

