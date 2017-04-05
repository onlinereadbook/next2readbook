(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.contextTypes = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    onExpandClick: _react.PropTypes.func,
    expanded: _react.PropTypes.bool,
    iconClassName: _react.PropTypes.string,
    iconChildren: _react.PropTypes.string,
    tooltipPosition: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    tooltipLabel: _react.PropTypes.string,
    tooltipDelay: _react.PropTypes.number
  };
});