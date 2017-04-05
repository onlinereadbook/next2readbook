'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _clientOverlayFalseReloadTrue = require('webpack-hot-middleware/client?overlay=false&reload=true');

var _clientOverlayFalseReloadTrue2 = _interopRequireDefault(_clientOverlayFalseReloadTrue);

var _router = require('../lib/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  reload: function reload(route) {
    if (route === '/_error') {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(_router2.default.components)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var r = _step.value;
          var err = _router2.default.components[r].err;

          if (err) {
            // reload all error routes
            // which are expected to be errors of '/_error' routes
            _router2.default.reload(r);
          }
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

      return;
    }

    if (route === '/_document') {
      window.location.reload();
      return;
    }

    _router2.default.reload(route);
  },
  change: function change(route) {
    if (route === '/_document') {
      window.location.reload();
      return;
    }

    var _ref = _router2.default.components[route] || {},
        err = _ref.err;

    if (err) {
      // reload to recover from runtime errors
      _router2.default.reload(route);
    }
  }
};

_clientOverlayFalseReloadTrue2.default.subscribe(function (obj) {
  var fn = handlers[obj.action];
  if (fn) {
    var data = obj.data || [];
    fn.apply(undefined, (0, _toConsumableArray3.default)(data));
  } else {
    throw new Error('Unexpected action ' + obj.action);
  }
});