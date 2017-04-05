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
    global.getScrollbarWidth = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getScrollbarWidth;
  function getScrollbarWidth() {
    var container = document.createElement('div');
    container.style = 'visibility:hidden;width:100px;';
    container.style.msOverflowStyle = 'scrollbar';

    document.body.appendChild(container);

    var noScrollWidth = container.offsetWidth;

    container.style.overflow = 'scroll';

    var inner = document.createElement('div');
    inner.style.width = '100%';
    container.appendChild(inner);

    var withScrollWidth = inner.offsetWidth;


    document.body.removeChild(container);
    return noScrollWidth - withScrollWidth;
  }
});