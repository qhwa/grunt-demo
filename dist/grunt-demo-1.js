/*! Grunt Demo 1 - v0.1.0 - 2012-11-23
* https://github.com/qhwa/grunt-demo-1
* Copyright (c) 2012 qhwa; Licensed MIT */

(function($) {

  var ALI_LINK_REG = /^http:\/\/(.+\.)?alibaba\.com/;

  // Collection method.
  $.fn.alilink = function() {
    return this.each(function() {
      var self = $(this);
      if( isAliLink(this) ){
        self.addClass('ali-link');
      } else {
        self.removeClass('ali-link');
      }
    });
  };

  // Custom selector.
  $.expr[':'].alilink = function(elem) {
    return isAliLink(elem);
  };

  function isAliLink(el) {
    return (/a/i).test(el.tagName) && ALI_LINK_REG.test(el.href);
  }


}(jQuery));
