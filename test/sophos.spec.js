'use strict'

/*
 * sophos
 *
 * (c) Caleb Mathew <creatrixity@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const test = require('japa')
const { Config } = require('@adonisjs/sink')
const Sophos = require('../src/Sophos')

test.group('Sophos', () => {
    test('should save a quote to the database', async (assert) => {
      const data = {
          user_id: 1,
          quote_url: 'https://quotesondesign.com/apple-commercial/'
      };

      let result = null;

      const Sophos = new Sophos()

      Sophos.saveQuote(data).then(quote => {
          result = quote
      }).catch(err => {
          console.log(err)
      })

      assert.equal(result.user_id, data.user_id)
      assert.equal(result.quote_url, data.quote_url)
    })

    test('should retrieve quote #1', async (assert) => {
      const id = 1;

      let result = null;

      const Sophos = new Sophos()

      Sophos.getQuotes(data).then(quote => {
          result = quote
      }).catch(err => {
          console.log(err)
      })

      assert.equal(result.id, id)
    })
})
