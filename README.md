#### What's This?

Adonis Sophos is an NPM package for Adonisjs that returns daily tidbits of wisdom for your day.

### Getting Started

Simply run the below command and follow the instructions below.

    npm install --save adonis-sophos

If using Yarn

    yarn add --save adonis-sophos

## Register provider
Register provider inside `start/app.js` file.

```js
const providers = [
  'adonis-sophos/providers/SophosProvider'
]
```

And then you can access it as follows

```js
const Sophos = use('Sophos')
```
