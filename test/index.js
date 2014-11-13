var EventEmitter = require('events').EventEmitter;
var bunyan = require('bunyan');

var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var GoodBunyan = require('..');


var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('GoodBunyan', function() {
  it('throws an error without using new', function(done) {

    expect(function () {
      var goodBunyan = GoodBunyan();
    }).to.throw('GoodBunyan must be created with new');

    done();
  });


  it('throws an error without providing a bunyan object', function(done) {
    expect(function() {
      var goodBunyan = new GoodBunyan();
    }).to.throw('GoodBunyan must be called with a bunyan object');

    done();
  });


  describe('_report()', function() {
    it('logs', function(done) {
      var log = bunyan.createLogger({
        name: 'test'
      });

      var reporter = new GoodBunyan(log);

      var ee = new EventEmitter();

      reporter.start(ee, function(error) {
        expect(error).to.not.exist;

        ee.emit('report', 'request', {statusCode: 200, id: 0, tag: 'test'});

        done();
      });
    });
  });
});
