'use strict';

var _evalScript = require('../lib/eval-script');

var _evalScript2 = _interopRequireDefault(_evalScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window = window,
    errorComponent = _window.__NEXT_DATA__.errorComponent;

var ErrorComponent = (0, _evalScript2.default)(errorComponent).default;

require('react-hot-loader/patch');

var next = window.next = require('./');

var emitter = next.default(onError);

function onError(err) {
  // just show the debug screen but don't render ErrorComponent
  // so that the current component doesn't lose props
  next.render({ err: err, emitter: emitter });
}

var lastScroll = void 0;

emitter.on('before-reactdom-render', function (_ref) {
  var Component = _ref.Component;

  // Remember scroll when ErrorComponent is being rendered to later restore it
  if (!lastScroll && Component === ErrorComponent) {
    var _window2 = window,
        pageXOffset = _window2.pageXOffset,
        pageYOffset = _window2.pageYOffset;

    lastScroll = {
      x: pageXOffset,
      y: pageYOffset
    };
  }
});

emitter.on('after-reactdom-render', function (_ref2) {
  var Component = _ref2.Component;

  if (lastScroll && Component !== ErrorComponent) {
    // Restore scroll after ErrorComponent was replaced with a page component by HMR
    var _lastScroll = lastScroll,
        x = _lastScroll.x,
        y = _lastScroll.y;

    window.scroll(x, y);
    lastScroll = null;
  }
});