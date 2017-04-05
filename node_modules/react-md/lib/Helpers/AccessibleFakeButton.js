(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'classnames', '../constants/keyCodes'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('classnames'), require('../constants/keyCodes'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.classnames, global.keyCodes);
    global.AccessibleFakeButton = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _classnames, _keyCodes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
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

  var AccessibleFakeButton = function (_PureComponent) {
    _inherits(AccessibleFakeButton, _PureComponent);

    function AccessibleFakeButton(props) {
      _classCallCheck(this, AccessibleFakeButton);

      var _this = _possibleConstructorReturn(this, (AccessibleFakeButton.__proto__ || Object.getPrototypeOf(AccessibleFakeButton)).call(this, props));

      _this.state = { pressed: false, tabFocused: false };
      _this._handleKeyUp = _this._handleKeyUp.bind(_this);
      _this._handleBlur = _this._handleBlur.bind(_this);
      _this._setNode = _this._setNode.bind(_this);
      _this._handleClick = _this._handleClick.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      return _this;
    }

    /**
     * Focuses the button.
     */


    _createClass(AccessibleFakeButton, [{
      key: 'focus',
      value: function focus() {
        if (this._node) {
          this._node.focus();
        }
      }
    }, {
      key: 'blur',
      value: function blur() {
        if (this._node) {
          this._node.blur();
        }
      }
    }, {
      key: '_setNode',
      value: function _setNode(node) {
        if (node) {
          this._node = (0, _reactDom.findDOMNode)(node);
        }
      }
    }, {
      key: '_handleClick',
      value: function _handleClick(e) {
        if (this.props.disabled) {
          return;
        }

        if (this.props.onClick) {
          this.props.onClick(e);
        }

        this._node.focus();
        this.setState({ pressed: !this.state.pressed });
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        if (this.props.disabled) {
          return;
        }

        if (this.props.onKeyDown) {
          this.props.onKeyDown(e);
        }

        if ((e.which || e.keyCode) === _keyCodes.ENTER) {
          this._handleClick(e);
        }
      }
    }, {
      key: '_handleKeyUp',
      value: function _handleKeyUp(e) {
        var _props = this.props,
            onKeyUp = _props.onKeyUp,
            onTabFocus = _props.onTabFocus;

        if (onKeyUp) {
          onKeyUp(e);
        }

        if ((e.which || e.keyCode) === _keyCodes.TAB) {
          if (onTabFocus) {
            onTabFocus(e);
          }

          this.setState({ tabFocused: true });
        }
      }
    }, {
      key: '_handleBlur',
      value: function _handleBlur(e) {
        if (this.props.onBlur) {
          this.props.onBlur(e);
        }

        if (this.state.tabFocused) {
          this.setState({ tabFocused: false });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            Component = _props2.component,
            children = _props2.children,
            className = _props2.className,
            tabbedClassName = _props2.tabbedClassName,
            disabled = _props2.disabled,
            tabIndex = _props2.tabIndex,
            ink = _props2.ink,
            props = _objectWithoutProperties(_props2, ['component', 'children', 'className', 'tabbedClassName', 'disabled', 'tabIndex', 'ink']);

        delete props.onBlur;
        delete props.onClick;
        delete props.onKeyUp;
        delete props.onKeyDown;
        delete props.onTabFocus;

        var childElements = children;
        if (ink) {
          childElements = _react.Children.toArray(children);
          childElements.unshift(ink);
        }

        return _react2.default.createElement(
          Component,
          _extends({}, props, {
            ref: this._setNode,
            className: (0, _classnames2.default)('md-fake-btn', _defineProperty({
              'md-pointer--hover': !disabled
            }, tabbedClassName, tabbedClassName && this.state.tabFocused), className),
            disabled: disabled,
            tabIndex: disabled ? null : tabIndex,
            onBlur: this._handleBlur,
            onClick: this._handleClick,
            onKeyUp: this._handleKeyUp,
            onKeyDown: this._handleKeyDown,
            'aria-pressed': this.state.pressed
          }),
          childElements
        );
      }
    }]);

    return AccessibleFakeButton;
  }(_react.PureComponent);

  AccessibleFakeButton.propTypes = {
    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * An optional function to call only when the button has been focused with the tab key.
     */
    tabbedClassName: _react.PropTypes.string,

    /**
     * Any children to display in the Accessible Fake Button.
     */
    children: _react.PropTypes.node,

    /**
     * An optional onClick function to call whent he user clicks the
     * button or presses space || enter.
     */
    onClick: _react.PropTypes.func,

    /**
     * An optional onKeyDown function to call.
     */
    onKeyDown: _react.PropTypes.func,

    /**
     * An optional onBlur function to call.
     */
    onBlur: _react.PropTypes.func,

    /**
     * An optional onKeyUp function to call.
     */
    onKeyUp: _react.PropTypes.func,

    /**
     * An optional function to call when the element is focused with the tab key.
     */
    onTabFocus: _react.PropTypes.func,

    /**
     * The component to render the Fake button as.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,

    /**
     * The tab index to use for the Fake button so it is keyboard focusable.
     */
    tabIndex: _react.PropTypes.number,

    /**
     * Boolean if the Button is disabled. This will prevent tab focus.
     */
    disabled: _react.PropTypes.bool,

    /**
     * The role for the accessible fake button. It is recommended to keep it
     * the default of `button` unless you are rendering it as an `a` tag.
     */
    role: _react.PropTypes.string,

    /**
     * The ink when coming from the AccessibleFakeInkedButton
     * @access private
     */
    ink: _react.PropTypes.node
  };
  AccessibleFakeButton.defaultProps = {
    component: 'div',
    tabIndex: 0,
    role: 'button'
  };
  exports.default = AccessibleFakeButton;
});