'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

exports.default = getConfig;

var _path = require('path');

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cache = new _map2.default();

var defaultConfig = {
  webpack: null,
  poweredByHeader: true
};

function getConfig(dir) {
  if (!cache.has(dir)) {
    cache.set(dir, loadConfig(dir));
  }
  return cache.get(dir);
}

function loadConfig(dir) {
  var path = (0, _path.join)(dir, 'next.config.js');

  var userConfig = {};

  var userHasConfig = (0, _fs.existsSync)(path);
  if (userHasConfig) {
    var userConfigModule = require(path);
    userConfig = userConfigModule.default || userConfigModule;
  }

  return (0, _assign2.default)({}, defaultConfig, userConfig);
}