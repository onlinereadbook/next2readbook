(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './headerContextTypes'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./headerContextTypes'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.headerContextTypes);
    global.rowContextTypes = mod.exports;
  }
})(this, function (exports, _react, _headerContextTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _headerContextTypes2 = _interopRequireDefault(_headerContextTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var rowContextTypes = Object.assign({}, _headerContextTypes2.default, {
    rowId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
  });

  delete rowContextTypes.baseId;
  exports.default = rowContextTypes;
});