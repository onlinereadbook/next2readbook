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
    global.isWithinStep = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isWithinStep;
  function isWithinStep(value, step) {
    var decimals = String(step).split('.')[1];
    var corrector = typeof decimals !== 'undefined' && decimals.length > 0 ? Math.pow(10, decimals.length) : 1;

    return value * corrector % (step * corrector) === 0;
  }
});