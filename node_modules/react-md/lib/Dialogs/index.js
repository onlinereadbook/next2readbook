(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './DialogContainer'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./DialogContainer'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.DialogContainer);
    global.index = mod.exports;
  }
})(this, function (exports, _DialogContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _DialogContainer2 = _interopRequireDefault(_DialogContainer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _DialogContainer2.default;
});