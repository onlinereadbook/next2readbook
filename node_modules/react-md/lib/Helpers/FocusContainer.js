(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'invariant', '../utils/EventUtils/isValidFocusKeypress'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('invariant'), require('../utils/EventUtils/isValidFocusKeypress'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.invariant, global.isValidFocusKeypress);
    global.FocusContainer = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _invariant, _isValidFocusKeypress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _invariant2 = _interopRequireDefault(_invariant);

  var _isValidFocusKeypress2 = _interopRequireDefault(_isValidFocusKeypress);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var hrefables = ['a', 'area'].map(function (tag) {
    return tag + '[href],';
  }).join('');
  var disableables = ['button', 'input', 'textarea', 'select'].map(function (tag) {
    return tag + ':not([disabled]),';
  }).join('');
  var FOCUSABLE_QUERY = '' + hrefables + disableables + '*[tabIndex]';

  /**
   * This component is used for keeping the focus within some container. When the container
   * is mounted and the `focusOnMount` prop is `true`, it will attempt to focus either:
   * - an element that matches `document.getElementById(this.props.initialFocus)`
   * - an element that matches `this._container.querySelector(this.props.initialFocus)`
   * - the first focusable element in it's children (if `this.props.initialFocus` is omitted)
   */

  var FocusContainer = function (_PureComponent) {
    _inherits(FocusContainer, _PureComponent);

    function FocusContainer(props) {
      _classCallCheck(this, FocusContainer);

      var _this = _possibleConstructorReturn(this, (FocusContainer.__proto__ || Object.getPrototypeOf(FocusContainer)).call(this, props));

      _this.state = {};
      _this._containFocus = _this._containFocus.bind(_this);
      _this._handleFocus = _this._handleFocus.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      _this._enableFocusTrap = _this._enableFocusTrap.bind(_this);
      _this._disableFocusTrap = _this._disableFocusTrap.bind(_this);
      _this._attemptInitialFocus = _this._attemptInitialFocus.bind(_this);
      return _this;
    }

    _createClass(FocusContainer, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.containFocus === nextProps.containFocus) {
          return;
        }

        if (this.props.containFocus) {
          this._enableFocusTrap();
          this._attemptInitialFocus();
        } else {
          this._disableFocusTrap();
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this._container) {
          this._focusables = Array.prototype.slice.call(this._container.querySelectorAll(FOCUSABLE_QUERY)).filter(function (el) {
            return el.tabIndex !== -1;
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this._container) {
          this._disableFocusTrap();
        }
      }
    }, {
      key: '_enableFocusTrap',
      value: function _enableFocusTrap() {
        window.addEventListener('focus', this._handleFocus, true);
        window.addEventListener('keydown', this._handleKeyDown, true);
      }
    }, {
      key: '_disableFocusTrap',
      value: function _disableFocusTrap() {
        window.removeEventListener('focus', this._handleFocus, true);
        window.removeEventListener('keydown', this._handleKeyDown, true);
      }
    }, {
      key: '_attemptInitialFocus',
      value: function _attemptInitialFocus() {
        if (!this._container) {
          return;
        }

        var initialFocus = this.props.initialFocus;


        var toFocus = initialFocus ? document.getElementById(initialFocus) || this._container.querySelector(initialFocus) : this._focusables[0];

        var debugError = void 0;
        if (!toFocus && initialFocus) {
          debugError = ' The `initialFocus` did not match a document\'s `id` or was an invalid ';
          debugError += '`querySelector` for the container. `initialFocus`: `' + initialFocus + '`. ';
          debugError += 'If this was supposed to be an `id`, make sure to prefix with the `#` symbol.';
        }

        (0, _invariant2.default)(toFocus, 'You specified that the `FocusContainer` should focus an element on mount, ' + 'but a focusable element was not found in the children. This could be because ' + 'the `initialFocus` prop is an invalid id or query selector, or the children ' + ('do not contain a valid focusable element.' + debugError));

        if (toFocus) {
          toFocus.focus();
        }
      }
    }, {
      key: '_containFocus',
      value: function _containFocus(containerRef) {
        if (containerRef === null) {
          this._container = null;
          this._disableFocusTrap();
          return;
        }

        var focusOnMount = this.props.focusOnMount;

        this._container = (0, _reactDom.findDOMNode)(containerRef);
        this._focusables = Array.prototype.slice.call(this._container.querySelectorAll(FOCUSABLE_QUERY)).filter(function (el) {
          return el.tabIndex !== -1;
        });

        if (focusOnMount) {
          this._attemptInitialFocus();
        }

        this._enableFocusTrap();
      }
    }, {
      key: '_handleFocus',
      value: function _handleFocus(e) {
        if (e.target !== window && this._shifted && this._container && !this._container.contains(e.target)) {
          // Prevent the default focus action and focus the last focusable item
          e.stopPropagation();
          this._focusables[this._focusables.length - 1].focus();
        }
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        this._shifted = e.shiftKey;
        if (!(0, _isValidFocusKeypress2.default)(e, this.props.additionalFocusKeys)) {
          return;
        }

        var target = e.target,
            shiftKey = e.shiftKey;

        var _focusables = _toArray(this._focusables),
            first = _focusables[0],
            focusables = _focusables.slice(1);

        var last = focusables[focusables.length - 1];

        if (shiftKey && target === first) {
          e.preventDefault();
          last.focus();
        } else if (!shiftKey && target === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            Component = _props.component,
            props = _objectWithoutProperties(_props, ['component']);

        delete props.initialFocus;
        delete props.focusOnMount;
        delete props.containFocus;
        delete props.additionalFocusKeys;

        return _react2.default.createElement(Component, _extends({}, props, { ref: this._containFocus }));
      }
    }]);

    return FocusContainer;
  }(_react.PureComponent);

  FocusContainer.propTypes = {
    /**
     * The component to render as. This can be a React DOM element or
     * a react Component.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,

    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * The children to display.
     */
    children: _react.PropTypes.node,

    /**
     * An optional id string or a query selector string to use for the initial focus.
     * This will only be triggered if the `focusOnMount` prop is `true`. If this is
     * omitted and the `focusOnMount` prop is `true`, the first focusable element in the
     * container will be focused.
     *
     * Examples:
     *
     * ```js
     * initialFocus="#someAmazingId"
     * // or
     * initialFocus=".md-btn,.md-list-tile"
     * ```
     */
    initialFocus: _react.PropTypes.string,

    /**
     * Boolean if an element in the container should be focused when mounted.
     */
    focusOnMount: _react.PropTypes.bool,

    /**
     * An optional list of additional key codes to use for focus events.
     */
    additionalFocusKeys: _react.PropTypes.arrayOf(_react.PropTypes.number),

    /**
     * Boolean if the focus container should start or stop containing the focus within the container.
     * This is useful for changing the focus requirements after mount.
     */
    containFocus: _react.PropTypes.bool
  };
  FocusContainer.defaultProps = {
    component: 'div'
  };
  exports.default = FocusContainer;
});