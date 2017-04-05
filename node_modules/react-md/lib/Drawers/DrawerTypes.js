(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.DrawerTypes = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    // Permanent drawers
    FULL_HEIGHT: 'full-height',
    CLIPPED: 'clipped',
    FLOATING: 'floating',

    // Persistent drawers
    PERSISTENT: 'persistent',
    PERSISTENT_MINI: 'persistent-mini',

    // Temporary
    TEMPORARY: 'temporary',
    TEMPORARY_MINI: 'temporary-mini'
  };
});