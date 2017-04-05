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
    global.componentDeprecated = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = componentDeprecated;
  function componentDeprecated(reason) {
    return function validate(props, propName, componentName) {
      var componentNameSafe = componentName || '<<anonymous>>';

      return new Error('The `' + componentNameSafe + '` has been deprecated and will be removed in the next release. ' + reason);
    };
  }
});