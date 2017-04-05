'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _path = require('path');

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _onDemandEntryHandler = require('./on-demand-entry-handler');

var _onDemandEntryHandler2 = _interopRequireDefault(_onDemandEntryHandler);

var _isWindowsBash = require('is-windows-bash');

var _isWindowsBash2 = _interopRequireDefault(_isWindowsBash);

var _webpack = require('./build/webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _clean = require('./build/clean');

var _clean2 = _interopRequireDefault(_clean);

var _readPage = require('./read-page');

var _readPage2 = _interopRequireDefault(_readPage);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HotReloader = function () {
  function HotReloader(dir) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        quiet = _ref.quiet;

    (0, _classCallCheck3.default)(this, HotReloader);

    this.dir = dir;
    this.quiet = quiet;
    this.middlewares = [];
    this.webpackDevMiddleware = null;
    this.webpackHotMiddleware = null;
    this.initialized = false;
    this.stats = null;
    this.compilationErrors = null;
    this.prevAssets = null;
    this.prevChunkNames = null;
    this.prevFailedChunkNames = null;
    this.prevChunkHashes = null;

    this.config = (0, _config2.default)(dir);
  }

  (0, _createClass3.default)(HotReloader, [{
    key: 'run',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
        var _this = this;

        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

        return _regenerator2.default.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 3;
                _loop = _regenerator2.default.mark(function _loop() {
                  var fn;
                  return _regenerator2.default.wrap(function _loop$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          fn = _step.value;
                          _context.next = 3;
                          return new _promise2.default(function (resolve, reject) {
                            fn(req, res, function (err) {
                              if (err) return reject(err);
                              resolve();
                            });
                          });

                        case 3:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _loop, _this);
                });
                _iterator = (0, _getIterator3.default)(this.middlewares);

              case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context2.next = 11;
                  break;
                }

                return _context2.delegateYield(_loop(), 't0', 8);

              case 8:
                _iteratorNormalCompletion = true;
                _context2.next = 6;
                break;

              case 11:
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t1 = _context2['catch'](3);
                _didIteratorError = true;
                _iteratorError = _context2.t1;

              case 17:
                _context2.prev = 17;
                _context2.prev = 18;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 20:
                _context2.prev = 20;

                if (!_didIteratorError) {
                  _context2.next = 23;
                  break;
                }

                throw _iteratorError;

              case 23:
                return _context2.finish(20);

              case 24:
                return _context2.finish(17);

              case 25:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee, this, [[3, 13, 17, 25], [18,, 20, 24]]);
      }));

      function run(_x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: 'start',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var _ref4, _ref5, compiler;

        return _regenerator2.default.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _promise2.default.all([(0, _webpack2.default)(this.dir, { dev: true, quiet: this.quiet }), (0, _clean2.default)(this.dir)]);

              case 2:
                _ref4 = _context3.sent;
                _ref5 = (0, _slicedToArray3.default)(_ref4, 1);
                compiler = _ref5[0];


                this.prepareMiddlewares(compiler);
                _context3.next = 8;
                return this.waitUntilValid();

              case 8:
                this.stats = _context3.sent;

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee2, this);
      }));

      function start() {
        return _ref3.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: 'stop',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var _this2 = this;

        return _regenerator2.default.wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.webpackDevMiddleware) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt('return', new _promise2.default(function (resolve, reject) {
                  _this2.webpackDevMiddleware.close(function (err) {
                    if (err) return reject(err);
                    resolve();
                  });
                }));

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee3, this);
      }));

      function stop() {
        return _ref6.apply(this, arguments);
      }

      return stop;
    }()
  }, {
    key: 'prepareMiddlewares',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(compiler) {
        var _this3 = this;

        var ignored, windowsSettings;
        return _regenerator2.default.wrap(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                compiler.plugin('after-emit', function (compilation, callback) {
                  var assets = compilation.assets;


                  if (_this3.prevAssets) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                      for (var _iterator2 = (0, _getIterator3.default)((0, _keys2.default)(assets)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var f = _step2.value;

                        deleteCache(assets[f].existsAt);
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
                      for (var _iterator3 = (0, _getIterator3.default)((0, _keys2.default)(_this3.prevAssets)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _f = _step3.value;

                        if (!assets[_f]) {
                          deleteCache(_this3.prevAssets[_f].existsAt);
                        }
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
                  _this3.prevAssets = assets;

                  callback();
                });

                compiler.plugin('done', function (stats) {
                  var compilation = stats.compilation;

                  var chunkNames = new _set2.default(compilation.chunks.map(function (c) {
                    return c.name;
                  }));
                  var failedChunkNames = new _set2.default(compilation.errors.map(function (e) {
                    return e.module.reasons;
                  }).reduce(function (a, b) {
                    return a.concat(b);
                  }, []).map(function (r) {
                    return r.module.chunks;
                  }).reduce(function (a, b) {
                    return a.concat(b);
                  }, []).map(function (c) {
                    return c.name;
                  }));

                  var chunkHashes = new _map2.default(compilation.chunks.map(function (c) {
                    return [c.name, c.hash];
                  }));

                  if (_this3.initialized) {
                    // detect chunks which have to be replaced with a new template
                    // e.g, pages/index.js <-> pages/_error.js
                    var added = diff(chunkNames, _this3.prevChunkNames);
                    var removed = diff(_this3.prevChunkNames, chunkNames);
                    var succeeded = diff(_this3.prevFailedChunkNames, failedChunkNames);

                    // reload all failed chunks to replace the templace to the error ones,
                    // and to update error content
                    var failed = failedChunkNames;

                    var rootDir = (0, _path.join)('bundles', 'pages');

                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                      for (var _iterator4 = (0, _getIterator3.default)(new _set2.default([].concat((0, _toConsumableArray3.default)(added), (0, _toConsumableArray3.default)(removed), (0, _toConsumableArray3.default)(failed), (0, _toConsumableArray3.default)(succeeded)))), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var n = _step4.value;

                        var route = toRoute((0, _path.relative)(rootDir, n));
                        _this3.send('reload', route);
                      }
                    } catch (err) {
                      _didIteratorError4 = true;
                      _iteratorError4 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                        }
                      } finally {
                        if (_didIteratorError4) {
                          throw _iteratorError4;
                        }
                      }
                    }

                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                      for (var _iterator5 = (0, _getIterator3.default)(chunkHashes), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var _step5$value = (0, _slicedToArray3.default)(_step5.value, 2),
                            _n = _step5$value[0],
                            hash = _step5$value[1];

                        if (!_this3.prevChunkHashes.has(_n)) continue;
                        if (_this3.prevChunkHashes.get(_n) === hash) continue;

                        var _route = toRoute((0, _path.relative)(rootDir, _n));

                        // notify change to recover from runtime errors
                        _this3.send('change', _route);
                      }
                    } catch (err) {
                      _didIteratorError5 = true;
                      _iteratorError5 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                          _iterator5.return();
                        }
                      } finally {
                        if (_didIteratorError5) {
                          throw _iteratorError5;
                        }
                      }
                    }
                  }

                  _this3.initialized = true;
                  _this3.stats = stats;
                  _this3.compilationErrors = null;
                  _this3.prevChunkNames = chunkNames;
                  _this3.prevFailedChunkNames = failedChunkNames;
                  _this3.prevChunkHashes = chunkHashes;
                });

                ignored = [/(^|[/\\])\../, // .dotfiles
                /node_modules/];
                windowsSettings = (0, _isWindowsBash2.default)() ? {
                  lazy: false,
                  watchOptions: {
                    ignored: ignored,
                    aggregateTimeout: 300,
                    poll: true
                  }
                } : {};


                this.webpackDevMiddleware = (0, _webpackDevMiddleware2.default)(compiler, (0, _extends3.default)({
                  publicPath: '/_webpack/',
                  noInfo: true,
                  quiet: true,
                  clientLogLevel: 'warning',
                  watchOptions: { ignored: ignored }
                }, windowsSettings));

                this.webpackHotMiddleware = (0, _webpackHotMiddleware2.default)(compiler, { log: false });
                this.onDemandEntries = (0, _onDemandEntryHandler2.default)(this.webpackDevMiddleware, compiler, (0, _extends3.default)({
                  dir: this.dir,
                  dev: true
                }, this.config.onDemandEntries));

                this.middlewares = [this.webpackDevMiddleware, this.webpackHotMiddleware, this.onDemandEntries.middleware()];

              case 8:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee4, this);
      }));

      function prepareMiddlewares(_x4) {
        return _ref7.apply(this, arguments);
      }

      return prepareMiddlewares;
    }()
  }, {
    key: 'waitUntilValid',
    value: function waitUntilValid() {
      var _this4 = this;

      return new _promise2.default(function (resolve) {
        _this4.webpackDevMiddleware.waitUntilValid(resolve);
      });
    }
  }, {
    key: 'getCompilationErrors',
    value: function getCompilationErrors() {
      if (!this.compilationErrors) {
        this.compilationErrors = new _map2.default();

        if (this.stats.hasErrors()) {
          var _stats$compilation = this.stats.compilation,
              compiler = _stats$compilation.compiler,
              errors = _stats$compilation.errors;
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {

            for (var _iterator6 = (0, _getIterator3.default)(errors), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var err = _step6.value;
              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;

              try {
                for (var _iterator7 = (0, _getIterator3.default)(err.module.reasons), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                  var r = _step7.value;
                  var _iteratorNormalCompletion8 = true;
                  var _didIteratorError8 = false;
                  var _iteratorError8 = undefined;

                  try {
                    for (var _iterator8 = (0, _getIterator3.default)(r.module.chunks), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                      var c = _step8.value;

                      // get the path of the bundle file
                      var path = (0, _path.join)(compiler.outputPath, c.name);
                      var _errors = this.compilationErrors.get(path) || [];
                      this.compilationErrors.set(path, _errors.concat([err]));
                    }
                  } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                      }
                    } finally {
                      if (_didIteratorError8) {
                        throw _iteratorError8;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion7 && _iterator7.return) {
                    _iterator7.return();
                  }
                } finally {
                  if (_didIteratorError7) {
                    throw _iteratorError7;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
        }
      }

      return this.compilationErrors;
    }
  }, {
    key: 'send',
    value: function send(action) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.webpackHotMiddleware.publish({ action: action, data: args });
    }
  }, {
    key: 'ensurePage',
    value: function ensurePage(page) {
      return this.onDemandEntries.ensurePage(page);
    }
  }]);
  return HotReloader;
}();

exports.default = HotReloader;


function deleteCache(path) {
  delete require.cache[path];
  delete _readPage2.default.cache[path];
}

function diff(a, b) {
  return new _set2.default([].concat((0, _toConsumableArray3.default)(a)).filter(function (v) {
    return !b.has(v);
  }));
}

function toRoute(file) {
  var f = _path.sep === '\\' ? file.replace(/\\/g, '/') : file;
  return ('/' + f).replace(/(\/index)?\.js$/, '') || '/';
}