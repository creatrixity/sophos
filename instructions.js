'use strict'

const path = require('path')

async function copyQuoteMigration (cli) {
  try {
    const migrationsFile = cli.helpers.migrationsPath(`${new Date().getTime()}_sophos_quote.js`)
    await cli.copy(
      path.join(__dirname, 'templates', 'SophosQuoteSchema.js'),
      path.join(migrationsFile)
    )
    cli.command.completed('create', migrationsFile.replace(cli.helpers.appRoot(), '').replace(path.sep, ''))
  } catch (error) {
    // ignore error
  }
}

async function copyQuoteModel (cli) {
  try {
    await cli.copy(
      path.join(__dirname, 'templates', 'SophosQuote.js'),
      path.join(cli.appDir, 'Models/SophosQuote.js')
    )
    cli.command.completed('create', 'Models/SophosQuote.js')
  } catch (error) {
    // ignore error
  }
}

async function makeConfigFile (cli) {
    try {
      const inFile = path.join(__dirname, './config', 'index.js')
      const outFile = path.join(cli.helpers.configPath(), 'sophos.js')
      await cli.copy(inFile, outFile)
      cli.command.completed('create', 'config/sophos.js')
    } catch (error) {
      // ignore error
    }
}

module.exports = {
    await makeConfigFile(cli)
    await copyQuoteModel(cli)
    await copyQuoteMigration(cli)
}
