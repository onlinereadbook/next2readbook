'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flushToReact;
exports.flushToHTML = flushToHTML;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasOwnProperty = Object.prototype.hasOwnProperty;
function flushToReact() {
  var mem = (0, _style.flush)();
  var arr = [];
  for (var id in mem) {
    if (hasOwnProperty.call(mem, id)) {
      arr.push(_react2.default.createElement('style', {
        id: '__jsx-style-' + id,
        // avoid warnings upon render with a key
        key: '__jsx-style-' + id,
        dangerouslySetInnerHTML: {
          __html: mem[id]
        }
      }));
    }
  }
  return arr;
}

function flushToHTML() {
  var mem = (0, _style.flush)();
  var html = '';
  for (var id in mem) {
    if (hasOwnProperty.call(mem, id)) {
      html += '<style id="__jsx-style-' + id + '">' + mem[id] + '</style>';
    }
  }
  return html;
}