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
