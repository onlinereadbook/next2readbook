(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './Positions'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./Positions'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Positions);
    global.contextTypes = mod.exports;
  }
})(this, function (exports, _react, _Positions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Positions2 = _interopRequireDefault(_Positions);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    menuCascading: _react.PropTypes.bool,
    menuPosition: _react.PropTypes.oneOf([_Positions2.default.TOP_LEFT, _Positions2.default.TOP_RIGHT, _Positions2.default.BOTTOM_LEFT, _Positions2.default.BOTTOM_RIGHT, _Positions2.default.CONTEXT, _Positions2.default.BELOW]),
    listLevel: _react.PropTypes.number
  };
});