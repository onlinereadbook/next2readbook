(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../constants/keyCodes', '../constants/CSSTransitionGroupTick', '../utils/PropTypes/invalidIf', '../utils/EventUtils/captureNextEvent', '../FontIcons/FontIcon', '../Helpers/IconSeparator', '../Inks/injectInk', '../Tooltips/injectTooltip'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../constants/keyCodes'), require('../constants/CSSTransitionGroupTick'), require('../utils/PropTypes/invalidIf'), require('../utils/EventUtils/captureNextEvent'), require('../FontIcons/FontIcon'), require('../Helpers/IconSeparator'), require('../Inks/injectInk'), require('../Tooltips/injectTooltip'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.keyCodes, global.CSSTransitionGroupTick, global.invalidIf, global.captureNextEvent, global.FontIcon, global.IconSeparator, global.injectInk, global.injectTooltip);
    global.Button = mod.exports;
  }
})(this, function (exports, _react, _classnames, _keyCodes, _CSSTransitionGroupTick, _invalidIf, _captureNextEvent, _FontIcon, _IconSeparator, _injectInk, _injectTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

  var _invalidIf2 = _interopRequireDefault(_invalidIf);

  var _captureNextEvent2 = _interopRequireDefault(_captureNextEvent);

  var _FontIcon2 = _interopRequireDefault(_FontIcon);

  var _IconSeparator2 = _interopRequireDefault(_IconSeparator);

  var _injectInk2 = _interopRequireDefault(_injectInk);

  var _injectTooltip2 = _interopRequireDefault(_injectTooltip);

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

  var Button = function (_PureComponent) {
    _inherits(Button, _PureComponent);

    function Button(props) {
      _classCallCheck(this, Button);

      var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

      _this.state = {
        pressed: false,
        snackbar: false,
        snackbarType: null
      };

      _this._blur = _this._blur.bind(_this);
      _this._animateForSnackbar = _this._animateForSnackbar.bind(_this);
      _this._handleKeyUp = _this._handleKeyUp.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      _this._handleMouseUp = _this._handleMouseUp.bind(_this);
      _this._handleMouseDown = _this._handleMouseDown.bind(_this);
      _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      _this._handleMouseOver = _this._handleMouseOver.bind(_this);
      _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
      return _this;
    }

    _createClass(Button, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.disabled && !nextProps.disabled && this.state.hover) {
          this.setState({ hover: false });
        }
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        var _this2 = this;

        if (!this.state.pressed && nextState.pressed) {
          this._timeout = setTimeout(function () {
            _this2._timeout = null;
            if (_this2._attemptedBlur) {
              _this2._attemptedBlur = false;

              _this2.setState({ pressed: false });
            }
          }, 450);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }

        if (this._snackbarTimeout) {
          clearTimeout(this._snackbarTimeout);
        }

        window.removeEventListener('click', this._blur);
      }
    }, {
      key: '_getType',
      value: function _getType(props) {
        if (props.flat || props.disabled && props.raised) {
          return 'flat';
        } else if (props.icon || props.disabled && props.floating) {
          return 'icon';
        } else if (props.raised) {
          return 'raised';
        } else if (props.floating) {
          return 'icon md-btn--floating';
        }

        return 'flat';
      }
    }, {
      key: '_blur',
      value: function _blur() {
        if (this.props.disabled) {
          return;
        }

        if (this._timeout) {
          this._attemptedBlur = true;
        } else {
          this.setState({ pressed: false });
        }
      }
    }, {
      key: '_handleMouseUp',
      value: function _handleMouseUp(e) {
        if (this.props.onMouseUp) {
          this.props.onMouseUp(e);
        }

        this._blur();
      }
    }, {
      key: '_handleMouseDown',
      value: function _handleMouseDown(e) {
        if (this.props.onMouseDown) {
          this.props.onMouseDown(e);
        }

        if (!this.props.disabled) {
          this.setState({ pressed: true });
        }
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart(e) {
        if (this.props.onTouchStart) {
          this.props.onTouchStart(e);
        }

        if (!this.props.disabled) {
          this.setState({ pressed: true });
        }
      }
    }, {
      key: '_handleTouchEnd',
      value: function _handleTouchEnd(e) {
        if (this.props.onTouchEnd) {
          this.props.onTouchEnd(e);
        }

        this._blur();
        (0, _captureNextEvent2.default)('mouseover');
      }
    }, {
      key: '_handleKeyUp',
      value: function _handleKeyUp(e) {
        if (this.props.onKeyUp) {
          this.props.onKeyUp(e);
        }

        if ((e.which || e.keyCode) === _keyCodes.TAB) {
          window.addEventListener('click', this._blur);
          this.setState({ pressed: true });
        }
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        if (this.props.onKeyDown) {
          this.props.onKeyDown(e);
        }

        if ((e.which || e.keyCode) === _keyCodes.TAB) {
          window.removeEventListener('click', this._blur);
          this.setState({ pressed: false });
        }
      }
    }, {
      key: '_handleMouseOver',
      value: function _handleMouseOver(e) {
        if (this.props.onMouseOver) {
          this.props.onMouseOver(e);
        }

        if (!this.props.disabled) {
          this.setState({ hover: true });
        }
      }
    }, {
      key: '_handleMouseLeave',
      value: function _handleMouseLeave(e) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e);
        }

        if (!this.props.disabled) {
          this.setState({ hover: false });
        }
      }
    }, {
      key: '_animateForSnackbar',
      value: function _animateForSnackbar(multiline, leaveTimeout) {
        var _this3 = this;

        if (typeof leaveTimeout === 'number') {
          this._snackbarTimeout = setTimeout(function () {
            _this3._snackbarTimeout = setTimeout(function () {
              _this3._snackbarTimeout = null;

              _this3.setState({ snackbar: false });
            }, leaveTimeout + 150);

            _this3.setState({ snackbarType: null });
          }, _CSSTransitionGroupTick2.default);
        } else {
          this._snackbarTimeout = setTimeout(function () {
            _this3._snackbarTimeout = null;

            _this3.setState({ snackbar: true, snackbarType: multiline ? 'multiline-' : '' });
          }, _CSSTransitionGroupTick2.default);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _cn;

        var _props = this.props,
            className = _props.className,
            iconClassName = _props.iconClassName,
            label = _props.label,
            iconBefore = _props.iconBefore,
            href = _props.href,
            primary = _props.primary,
            secondary = _props.secondary,
            flat = _props.flat,
            raised = _props.raised,
            floating = _props.floating,
            mini = _props.mini,
            fixed = _props.fixed,
            fixedPosition = _props.fixedPosition,
            disabled = _props.disabled,
            component = _props.component,
            ink = _props.ink,
            tooltip = _props.tooltip,
            icon = _props.icon,
            forceIconSize = _props.forceIconSize,
            forceIconFontSize = _props.forceIconFontSize,
            props = _objectWithoutProperties(_props, ['className', 'iconClassName', 'label', 'iconBefore', 'href', 'primary', 'secondary', 'flat', 'raised', 'floating', 'mini', 'fixed', 'fixedPosition', 'disabled', 'component', 'ink', 'tooltip', 'icon', 'forceIconSize', 'forceIconFontSize']);

        delete props.children;
        delete props.tooltipLabel;
        delete props.tooltipPosition;

        if (href) {
          delete props.type;
        }

        var children = this.props.children;
        var _state = this.state,
            pressed = _state.pressed,
            hover = _state.hover,
            snackbar = _state.snackbar,
            snackbarType = _state.snackbarType;

        var mdBtnType = this._getType(this.props);

        var Component = component || (href ? 'a' : 'button');
        if (children || iconClassName) {
          children = _react2.default.createElement(
            _FontIcon2.default,
            { iconClassName: iconClassName, forceSize: forceIconSize, forceFontSize: forceIconFontSize },
            children
          );
        }

        if (children && label) {
          children = _react2.default.createElement(
            _IconSeparator2.default,
            { label: label, iconBefore: iconBefore },
            children
          );
        } else if (label) {
          children = label;
        }

        var raisedStyles = raised || floating;

        var themeClassNames = !disabled && (0, _classnames2.default)({
          'md-text--theme-primary md-ink--primary': !raisedStyles && primary,
          'md-text--theme-secondary md-ink--secondary': !raisedStyles && secondary,
          'md-background--primary md-background--primary-hover': raisedStyles && primary,
          'md-background--secondary md-background--secondary-hover': raisedStyles && secondary,
          'md-btn--color-primary-active': !raisedStyles && hover && primary,
          'md-btn--color-secondary-active': !raisedStyles && hover && secondary
        });
        return _react2.default.createElement(
          Component,
          _extends({}, props, {
            disabled: disabled,
            onTouchStart: this._handleTouchStart,
            onTouchEnd: this._handleTouchEnd,
            onMouseDown: this._handleMouseDown,
            onMouseUp: this._handleMouseUp,
            onKeyDown: this._handleKeyDown,
            onKeyUp: this._handleKeyUp,
            onMouseOver: this._handleMouseOver,
            onMouseLeave: this._handleMouseLeave,
            href: href,
            className: (0, _classnames2.default)('md-inline-block md-btn md-btn--' + mdBtnType, themeClassNames, (_cn = {
              'md-text': !disabled && !primary && !secondary && !icon && !floating,
              'md-text--disabled': disabled,
              'md-pointer--hover': !disabled,
              'md-btn--text': flat || raised,
              'md-btn--hover': hover && !disabled,
              'md-btn--raised-disabled': raised && disabled,
              'md-btn--raised-pressed': !disabled && raisedStyles && pressed,
              'md-btn--fixed': fixed
            }, _defineProperty(_cn, 'md-btn--fixed-' + fixedPosition, floating && fixed), _defineProperty(_cn, 'md-btn--floating-mini', floating && mini), _defineProperty(_cn, 'md-btn--floating-pressed', floating && pressed), _defineProperty(_cn, 'md-btn--snackbar-floating', snackbar), _defineProperty(_cn, 'md-btn--snackbar-floating-' + snackbarType + 'adjust', snackbar && snackbarType !== null), _cn), className)
          }),
          ink,
          tooltip,
          children
        );
      }
    }]);

    return Button;
  }(_react.PureComponent);

  Button.propTypes = {
    /**
     * An optional style to apply to the button.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the button.
     */
    className: _react.PropTypes.string,

    /**
     * A label to display on a `FlatButton` or a `RaisedButton`. This text can either
     * be placed before or after an optional `FontIcon` using the `iconBefore` prop.
     * This is required for `Flat` or `Raised` buttons. It is not allowed for `Icon`
     * or `Floating` buttons. Use the `tooltipLabel` prop for `Icon` or `Floating` buttons.
     */
    label: (0, _invalidIf2.default)(_react.PropTypes.string, 'icon', 'floating'),

    /**
     * A boolean if the icon should appear before or after the text for a `FlatButton` or
     * a `RaisedButton`.
     */
    iconBefore: _react.PropTypes.bool,

    /**
     * Any children used to display a `FontIcon` in any version of the button. This will
     * be used with the `iconClassName` prop. If the `iconClassName` and the `children` prop
     * are omitted, no icon will be added to the `RaisedButton` or `FlatButton`. An error
     * will be displayed for the `IconButton` or `FloatingButton`.
     */
    children: function children(props, propName, componentName) {
      for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
      }

      var componentNameSafe = componentName || '<<anonymous>>';
      var err = _react.PropTypes.node.apply(_react.PropTypes, [props, propName, componentName].concat(args));

      var icon = props.icon || props.floating;
      var missing = !props.children && !props.iconClassName;
      if (!err && icon && missing) {
        err = new Error('You created an `' + (props.icon ? 'Icon' : 'Floating') + '` ' + componentNameSafe + ' without ' + 'having the correct props to generate an icon. Expected either the `children` prop or the ' + ('`iconClassName` prop but received children: `' + props.children + '` and iconClassName: ') + ('`' + props.iconClassName + '`.'));
      }

      return err;
    },

    /**
     * An icon className to use in an optional `FontIcon` in any version of the button. This will
     * be used with the `children` prop. If the `floating` or `icon` props are set to true, this or
     * the children are required.
     */
    iconClassName: _react.PropTypes.string,

    /**
     * The type for the button. This is required when the `component` prop is not
     * the 'a' tag, a `function`, or when the `href` prop is defined.
     */
    type: function type(props, propName, component) {
      for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        args[_key2 - 3] = arguments[_key2];
      }

      var c = props.component;
      var validator = _react.PropTypes.oneOf(['button', 'submit', 'reset']);
      if (!props.href && c !== 'a' && typeof c !== 'function') {
        validator = validator.isRequired;
      }

      return validator.apply(undefined, [props, propName, component].concat(args));
    },

    /**
     * Boolean if the button should be styled with the primary color.
     */
    primary: _react.PropTypes.bool,

    /**
     * Boolean if the button should be styled with the secondary color.
     */
    secondary: _react.PropTypes.bool,

    /**
     * Boolean if the button is disabled.
     */
    disabled: _react.PropTypes.bool,

    /**
     * An optional href for the button. This will style the `a` tag as a button.
     */
    href: _react.PropTypes.string,

    /**
     * An optional component to render the button as. This allows you to get all the styles and functionality
     * of the Button, but as a custom React component.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),

    /**
     * An optional function to call when the `click` event is triggered.
     */
    onClick: _react.PropTypes.func,

    /**
     * An optional function to call when the `touchstart` event is triggered.
     */
    onTouchStart: _react.PropTypes.func,

    /**
     * An optional function to call when the `touchend` event is triggered.
     */
    onTouchEnd: _react.PropTypes.func,

    /**
     * An optional function to call when the `mousedown` event is triggered.
     */
    onMouseDown: _react.PropTypes.func,

    /**
     * An optional function to call when the `mouseup` event is triggered.
     */
    onMouseUp: _react.PropTypes.func,

    /**
     * An optional function to call when the `keyup` event is triggered.
     */
    onKeyUp: _react.PropTypes.func,

    /**
     * An optional function to call when the `keydown` event is triggered.
     */
    onKeyDown: _react.PropTypes.func,

    /**
     * An optional function to call when the `mouseover` event is triggered.
     */
    onMouseOver: _react.PropTypes.func,

    /**
     * An optional function to call when the `mouseleave` event is triggered.
     */
    onMouseLeave: _react.PropTypes.func,

    /**
     * Boolean if the `FloatingButton` should be fixed to the page. This prop can
     * only be enabled if the `floating` prop is true.
     */
    fixed: (0, _invalidIf2.default)(_react.PropTypes.bool, 'flat', 'raised', 'icon'),

    /**
     * The position that the `FloatingButton` should be fixed to the page. It will
     * either be fixed to the top right, top left, bottom right, or bottom left of
     * the page. This prop is ony used if the `floating` prop and `fixed` prop are
     * `true`.
     */
    fixedPosition: _react.PropTypes.oneOf(['tr', 'tl', 'br', 'bl']).isRequired,

    /**
     * Boolean if the `FloatingButton` should be `mini`. This prop can only be used
     * when the `floating` prop is true.
     */
    mini: (0, _invalidIf2.default)(_react.PropTypes.bool, 'flat', 'raised', 'icon'),

    /**
     * Boolean if the `Button` should be styled as a `FlatButton`.
     */
    flat: _react.PropTypes.bool,

    /**
     * Boolean if the `Button` should be styled as a `RaisedButton`.
     */
    raised: _react.PropTypes.bool,

    /**
     * Boolean if the `Button` should be styled as a `IconButton`.
     */
    icon: _react.PropTypes.bool,

    /**
     * Boolean if the `Button` should be styled as a `FloatingButton`.
     */
    floating: _react.PropTypes.bool,

    /**
     * An optional label to use for the tooltip. This is normally only used for
     * `IconButton`s or `FloatingButton`s, but can be used on `FlatButton`s and
     * `RaisedButton`s if you wish. Knock yourself out!
     *
     * If this prop is omitted, no tooltip will be included.
     */
    tooltipLabel: _react.PropTypes.string,

    /**
     * An optional delay before the tooltip appears on mouse over.
     */
    tooltipDelay: _react.PropTypes.number,

    /**
     * The position for the tooltip.
     */
    tooltipPosition: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * An ink from `injectInk`.
     * @access private
     */
    ink: _react.PropTypes.node,

    /**
     * A tooltip from `injectTooltip`
     * @access private
     */
    tooltip: _react.PropTypes.node,

    /**
     * Custom validator for verifying that only one type is defined and that
     * at one type is defined.
     */
    _typeValidator: function _typeValidator(props, propName, component) {
      var flat = props.flat,
          raised = props.raised,
          icon = props.icon,
          floating = props.floating;


      var defined = [raised, flat, icon, floating].filter(function (d) {
        return d;
      });
      var len = defined.length;
      if (len === 0) {
        return new Error('A material design button type must be specified in the `' + component + '` but none were ' + 'given. Valid types are `flat`, `raised`, `icon`, or `floating`.');
      } else if (len !== 1) {
        return new Error('Only one material design button type may be specified in the `' + component + '` but `' + len + '` ' + 'were given. Select only one of `flat`, `raised`, `icon`, or `floating`.');
      }

      return null;
    },

    /**
     * Either a boolean that will enforce the 24x24 size of the font icon or a number of the size
     * to enforce. This is useful when using other font icon libraries that do not have a consistent
     * size.
     */
    forceIconSize: _FontIcon2.default.propTypes.forceSize,

    /**
     * Boolean if the `forceIconSize` prop should also force the `font-size` instead of only `width` and `height`.
     */
    forceIconFontSize: _react.PropTypes.bool
  };
  Button.defaultProps = {
    type: 'button',
    iconBefore: true,
    fixedPosition: 'br'
  };
  exports.default = (0, _injectInk2.default)((0, _injectTooltip2.default)(Button));
});