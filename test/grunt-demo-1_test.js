/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
     ======== A Handy Little QUnit Reference ========
     http://docs.jquery.com/QUnit

     Test methods:
     expect(numAssertions)
     stop(increment)
     start(decrement)
     Test assertions:
     ok(value, [message])
     equal(actual, expected, [message])
     notEqual(actual, expected, [message])
     deepEqual(actual, expected, [message])
     notDeepEqual(actual, expected, [message])
     strictEqual(actual, expected, [message])
     notStrictEqual(actual, expected, [message])
     raises(block, [expected], [message])
     */

  module('jQuery#ali-link', {
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', 1, function() {
    strictEqual(this.elems.alilink(), this.elems, 'should be chaninable');
  });

  test('can select', function() {
    equal( $('a:alilink', $('#qunit-fixture')).length, 3, 
      'should select links with alibaba domain' 
    );
  });

  test('add icon to alibaba links', function() {
    this.elems.alilink();

    this.elems.each(function(){
      var self = $(this);
      if( /^http:\/\/((.+)\.)?alibaba\.com/.test(this.href) ) {
        ok(self.hasClass('ali-link'));
      } else {
        ok(!self.hasClass('ali-link'));
      }
    });
  });

}(jQuery));
