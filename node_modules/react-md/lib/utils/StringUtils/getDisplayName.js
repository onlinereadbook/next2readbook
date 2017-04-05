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
    global.getDisplayName = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getDisplayName;

  /**
   * Gets the display name for a composed component.
   *
   * @param {function} ComposedComponent - The composed component to use
   * @return {String} the name of the composed component or 'Component'.
   */
  function getDisplayName(ComposedComponent, suffix) {
    var name = '' + (ComposedComponent.displayName || ComposedComponent.name || 'Component');

    return name.indexOf(suffix) === -1 ? '' + name + suffix : name;
  }
});