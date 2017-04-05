'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cache = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * resolve a JSON page like `require.resolve`,
 * and read and cache the file content
 */

var readPage = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path) {
    var f, source, _JSON$parse, component;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _resolve2.default)(path);

          case 2:
            f = _context.sent;

            if (!cache.hasOwnProperty(f)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return', cache[f]);

          case 5:
            _context.next = 7;
            return _fs2.default.readFile(f, 'utf8');

          case 7:
            source = _context.sent;
            _JSON$parse = JSON.parse(source), component = _JSON$parse.component;


            cache[f] = component;
            return _context.abrupt('return', component);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function readPage(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _fs = require('mz/fs');

var _fs2 = _interopRequireDefault(_fs);

var _resolve = require('./resolve');

var _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = readPage;
var cache = exports.cache = {};

readPage.cache = cache;