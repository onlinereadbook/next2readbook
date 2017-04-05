'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _object = require('object.entries');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasOwnProperty = Object.prototype.hasOwnProperty;

var tags = {};
var prevStyles = {};

exports.default = typeof window === 'undefined' ? renderOnServer : renderOnClient;


function renderOnServer() {}

function renderOnClient(components) {
  var styles = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var c = _step.value;

      styles[c.props.styleId] = c;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  patch(diff(prevStyles, styles));

  prevStyles = styles;
}

function diff(a, b) {
  var added = (0, _object2.default)(b).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        k = _ref2[0];

    return !hasOwnProperty.call(a, k);
  });
  var removed = (0, _object2.default)(a).filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        k = _ref4[0];

    return !hasOwnProperty.call(b, k);
  });
  return [added, removed];
}

var fromServer = {};

function patch(_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
      added = _ref6[0],
      removed = _ref6[1];

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = added[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          id = _step2$value[0],
          c = _step2$value[1];

      // avoid duplicates from server-rendered markup
      if (undefined === fromServer[id]) {
        fromServer[id] = document.getElementById('__jsx-style-' + id);
      }

      tags[id] = fromServer[id] || makeStyleTag(c.props.css);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = removed[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _step3$value = _slicedToArray(_step3.value, 1),
          id = _step3$value[0];

      var t = tags[id];
      delete tags[id];
      t.parentNode.removeChild(t);
      // avoid checking the DOM later on
      fromServer[id] = null;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

function makeStyleTag(str) {
  // based on implementation by glamor
  var tag = document.createElement('style');
  tag.appendChild(document.createTextNode(str));

  var head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(tag);

  return tag;
}