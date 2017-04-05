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
    global.Positions = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    TOP_RIGHT: 'tr',
    TOP_LEFT: 'tl',
    BOTTOM_RIGHT: 'br',
    BOTTOM_LEFT: 'bl',
    CONTEXT: 'context',
    BELOW: 'below'
  };
});