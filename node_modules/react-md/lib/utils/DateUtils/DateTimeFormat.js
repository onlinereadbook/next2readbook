(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.DateTimeFormat = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DateTimeFormat = function () {
    if (typeof Intl !== 'undefined' && typeof Intl.DateTimeFormat !== 'undefined') {
      return Intl.DateTimeFormat;
    }

    // Very bad 'mock' of Intl.DateTimeFormat
    return function () {
      return (/* locales, formatOptions */{ format: function format(date) {
            return date.toLocaleString();
          } }
      );
    };
  }();

  exports.default = DateTimeFormat;
});