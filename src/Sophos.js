'use strict'

/**
 * adonis-sophos
 *
 * (c) Caleb Mathew <creatrixity@gmail.com>
 *
 */

 const request = require('request');

 /**
  * The Sophos class makes a request to a url returning a promise
  * resolved with data or rejected with an error.
  *
  * @class Sophos
  *
  * @param {Object} Config
  */
 class Sophos {
    sourceURLs = {};

    constructor (Config) {
     this.config = Config.merge('sophos', {
       sourceURLs: this.sourceURLs,
       model: 'App/Models/SophosQuote'
     })
    }

    _getModel () {
        return use(this.config.model);
    }

    getQuotes (category) {
        return new Promise((resolve, reject) => {
            if (!this.config.sourceURLs.hasOwnProperty(category)) {
                reject({
                    error: "Sorry, Sophos does not support requests for "${category}"  at the moment."
                })
            }

            let endpoint = this.config.sourceURLs[category]

            request(endpoint, { json: true }, (err, res, body) => {
              if (err) return reject(err);
              return resolve(body)
            });
        });
    }

    /*
     * Returns all saved quotes.
     * If an id param is provided, returns a single quote.
     */
    async getSavedQuotes (id = nulll) {
        let self = this;
        return new Promise((resolve, reject) => {
            if (id) {
                return resolve(
                    await self._getModel()
                        .query()
                        .where('id', id)
                        .first()
                )
            }

            // return all saved quotes.
            return await self._getModel().query();
        });
    }

    /*
     * Saves a quote for referencing later.
     */
    async saveQuote (attributes = null) {
        if (!attributes) throw('Required argument "attributes" was not provided.');
        const quote = await this._getModel().create(await)
    }
}
