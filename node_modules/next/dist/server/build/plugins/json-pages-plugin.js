'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JsonPagesPlugin = function () {
  function JsonPagesPlugin() {
    (0, _classCallCheck3.default)(this, JsonPagesPlugin);
  }

  (0, _createClass3.default)(JsonPagesPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      compiler.plugin('after-compile', function (compilation, callback) {
        var pages = (0, _keys2.default)(compilation.assets).filter(function (filename) {
          return (/^bundles[/\\]pages.*\.js$/.test(filename)
          );
        });

        pages.forEach(function (pageName) {
          var page = compilation.assets[pageName];
          delete compilation.assets[pageName];

          var content = page.source();
          var newContent = (0, _stringify2.default)({ component: content });

          compilation.assets[pageName + 'on'] = {
            source: function source() {
              return newContent;
            },
            size: function size() {
              return newContent.length;
            }
          };
        });

        callback();
      });
    }
  }]);
  return JsonPagesPlugin;
}();

exports.default = JsonPagesPlugin;