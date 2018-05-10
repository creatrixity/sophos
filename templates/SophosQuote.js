'use strict'

const Model = use('Model')

class SophosQuote extends Model {

  /**
   * A relationship on users is required as a means of identification.
   *
   * @method user
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = SophosQuote
