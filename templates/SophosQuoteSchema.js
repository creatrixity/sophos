'use strict'

const Schema = use('Schema')

class SophosQuoteSchema extends Schema {
  up () {
    this.create('sophos_quotes', table => {
      table.increments()
      table.integer('user_id').notNullable();
      table.string('quote_url', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sophos_quotes')
  }
}

module.exports = SophosQuoteSchema
