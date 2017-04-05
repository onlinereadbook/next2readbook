(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Menu', './MenuButton'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Menu'), require('./MenuButton'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Menu, global.MenuButton);
    global.index = mod.exports;
  }
})(this, function (exports, _Menu, _MenuButton2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MenuButton = exports.Menu = undefined;

  var _Menu2 = _interopRequireDefault(_Menu);

  var _MenuButton3 = _interopRequireDefault(_MenuButton2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Menu2.default;
  exports.Menu = _Menu2.default;
  exports.MenuButton = _MenuButton3.default;
});