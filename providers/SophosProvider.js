'use strict'

/**
 * adonis-sophos
 *
 * (c) Caleb Mathew <creatrixity@gmail.com>
 *
 */

const { ServiceProvider } = use('@adonisjs/fold')

class SophosProvider extends ServiceProvider {

  register () {
    this.app.singleton('Adonis/Addons/Sophos', (app) => {
      const Config = app.use('Adonis/Src/Config')
      const Sophos = require('../src/Sophos')

      return new Sophos(Config)
    })

    this.app.alias('Adonis/Addons/Sophos', 'Sophos')

    this.app.bind('Adonis/Commands/Quote', () => require('../commands/Quote'))
  }

  boot () {
      const ace = require('@adonisjs/ace')

      ace.addCommand('Adonis/Commands/Quote')
  }
}

module.exports = SophosProvider
