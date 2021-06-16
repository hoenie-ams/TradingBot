class Position {
    constructor({ trade }) {
      this.state = 'open'
      this.enter = trade
    }

    close({ trade }) {
        this.state = 'closed'
        this.exit = trade
      }
}
module.exports = Position
