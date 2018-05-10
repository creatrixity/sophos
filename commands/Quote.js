'use strict'

const { Command } = use('@adonisjs/ace')
const Sophos = use('Sophos')

class Quote extends Command {
  static get signature () {
    return 'quote'
  }

  static get description () {
    return 'Startup juice and motivation.'
  }

  async handle (args, options) {
      Sophos.getQuotes(quote => {
          console.log(`${this.chalk.gray(quote.author.name)} - ${this.chalk.cyan(quote.author.company)}`)
          console.log(`${quote.content}`)
      })
  }
}

module.exports = Quote
