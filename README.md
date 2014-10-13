# good-bunyan

A [Good reporter](https://github.com/hapijs/good-reporter) for [bunyan](https://github.com/trentm/node-bunyan)

## Usage

```js
var GoodBunyan = require('good-bunyan');
var bunyan = require('bunyan');

var log = bunyan.createLogger({
  name: 'test'
});

var options = {
  reporters: [
    {
      reporter: GoodBunyan,
      args: [log, {
        events: {
          ops: '*',
          request: '*',
          log: '*',
          error: '*'
        }
      }]
    }
  ]
}
```
