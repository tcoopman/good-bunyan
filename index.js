var GoodReporter = require('good-reporter');
var Hoek = require('hoek');

var defaults = {};

var log;

var GoodBunyan = function(bunyanLogger, options) {
  Hoek.assert(this.constructor === GoodBunyan, 'GoodBunyan must be created with new');
  Hoek.assert(typeof bunyanLogger === 'object', 'GoodBunyan must be called with a bunyan object');

  var settings = options || {};
  settings = Hoek.applyToDefaults(defaults, settings);
  // FIXME https://github.com/hapijs/good-reporter/issues/12
  // settings.bunyanLogger = console;
  log = bunyanLogger;

  GoodReporter.call(this, settings);
};


Hoek.inherits(GoodBunyan, GoodReporter);

GoodBunyan.prototype._report = function(event, eventData) {
  // FIXME (see constructor)
  // var log = this._settings.bunyanLogger;
  if (eventData.tag === 'error') {
    log.error(eventData);
  } else if (eventData.tag === 'medium') {
    log.warn(eventData);
  } else {
    log.info(eventData);
  }
};


module.exports = GoodBunyan;
