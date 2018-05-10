'use strict'

/*
|--------------------------------------------------------------------------
| Sophos
|--------------------------------------------------------------------------
|
| Sophos returns bits of inspiration for your next big design and startup ideas.
|
*/

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Source URLs
  |--------------------------------------------------------------------------
  |
  | The URLs of various resources queried for data.
  |
  */
  sourceURLs: {
      'startups': 'https://wisdomapi.herokuapp.com/v1/random',
      'design': 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
  },

  /*
  |--------------------------------------------------------------------------
  | Model
  |--------------------------------------------------------------------------
  |
  | The model to be used for Sophos' quotes
  |
  */
  model: 'App/Models/SophosQuote',

}
