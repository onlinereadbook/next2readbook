(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../Buttons/Button', './isInvalidAnimate'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../Buttons/Button'), require('./isInvalidAnimate'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.Button, global.isInvalidAnimate);
    global.Snackbar = mod.exports;
  }
})(this, function (exports, _react, _classnames, _Button, _isInvalidAnimate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _Button2 = _interopRequireDefault(_Button);

  var _isInvalidAnimate2 = _interopRequireDefault(_isInvalidAnimate);

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

  var Snackbar = function (_PureComponent) {
    _inherits(Snackbar, _PureComponent);

    function Snackbar(props) {
      _classCallCheck(this, Snackbar);

      var _this = _possibleConstructorReturn(this, (Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call(this, props));

      _this._clearTimeout = _this._clearTimeout.bind(_this);
      _this._handleClick = _this._handleClick.bind(_this);
      _this._handleAutohide = _this._handleAutohide.bind(_this);
      _this._handleWindowBlur = _this._handleWindowBlur.bind(_this);
      _this._handleWindowFocus = _this._handleWindowFocus.bind(_this);
      return _this;
    }

    _createClass(Snackbar, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _props = this.props,
            fab = _props.fab,
            multiline = _props.multiline,
            onAppear = _props.toast.onAppear;

        if (onAppear) {
          onAppear();
        }

        if (!fab || (0, _isInvalidAnimate2.default)(fab)) {
          return;
        }

        this._fab = fab.getComposedComponent().getComposedComponent();
        this._fab._animateForSnackbar(multiline);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._handleAutohide();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._clearTimeout();

        if (this._eventType === 'focus') {
          window.removeEventListener('focus', this._handleWindowFocus);
        } else if (this._eventType === 'blur') {
          window.removeEventListener('blur', this._handleWindowBlur);
        }
      }
    }, {
      key: '_handleClick',
      value: function _handleClick(e) {
        var _props2 = this.props,
            onDismiss = _props2.onDismiss,
            action = _props2.toast.action,
            leaveTimeout = _props2.leaveTimeout,
            multiline = _props2.multiline;

        if (typeof action.onClick === 'function') {
          action.onClick(e);
        }

        if (this._fab) {
          this._fab._animateForSnackbar(multiline, leaveTimeout);
        }

        onDismiss();
      }
    }, {
      key: '_clearTimeout',
      value: function _clearTimeout() {
        if (this._timeout) {
          clearTimeout(this._timeout);
          this._timeout = null;
        }
      }
    }, {
      key: '_handleAutohide',
      value: function _handleAutohide() {
        var _this2 = this;

        var _props3 = this.props,
            autohide = _props3.autohide,
            autohideTimeout = _props3.autohideTimeout,
            onDismiss = _props3.onDismiss,
            multiline = _props3.multiline,
            leaveTimeout = _props3.leaveTimeout;

        if (!autohide) {
          return;
        }

        window.addEventListener('blur', this._handleWindowBlur);
        this._eventType = 'blur';
        this._timeout = setTimeout(function () {
          _this2._timeout = null;
          _this2._eventType = null;

          window.removeEventListener('blur', _this2._handleWindowBlur);

          if (_this2._fab) {
            _this2._fab._animateForSnackbar(multiline, leaveTimeout);
          }

          onDismiss();
        }, autohideTimeout || this.state.toast);
      }
    }, {
      key: '_handleWindowBlur',
      value: function _handleWindowBlur() {
        this._clearTimeout();
        window.removeEventListener('blur', this._handleWindowBlur);
        window.addEventListener('focus', this._handleWindowFocus);
        this._eventType = 'focus';
      }
    }, {
      key: '_handleWindowFocus',
      value: function _handleWindowFocus() {
        window.removeEventListener('focus', this._handleWindowFocus);
        this._eventType = null;
        this._handleAutohide();
      }
    }, {
      key: 'render',
      value: function render() {
        var _props4 = this.props,
            className = _props4.className,
            toast = _props4.toast,
            multiline = _props4.multiline,
            props = _objectWithoutProperties(_props4, ['className', 'toast', 'multiline']);

        delete props.id;
        delete props.fab;
        delete props.onDismiss;
        delete props.autohide;
        delete props.autohideTimeout;
        delete props.leaveTimeout;
        var text = toast.text,
            action = toast.action;
        var id = this.props.id;


        var Component = 'p';
        if (action) {
          Component = 'section';
          text = _react2.default.createElement(
            'p',
            { className: 'md-snackbar--toast md-snackbar--action' },
            text
          );

          var btnProps = {
            flat: true,
            waitForInkTransition: true,
            onClick: this._handleClick,
            label: action,
            secondary: true,
            className: 'md-btn--snackbar'
          };

          if (typeof action !== 'string') {
            btnProps = Object.assign(btnProps, action, {
              className: (0, _classnames2.default)(btnProps.className, action.className)
            });
          }

          action = _react2.default.createElement(_Button2.default, btnProps);
        }

        if (!id) {
          id = 'snackbarAlert' + (action ? 'Dialog' : '');
        }

        var role = 'alert' + (action ? 'dialog' : '');
        return _react2.default.createElement(
          Component,
          _extends({}, props, {
            id: id,
            role: role,
            className: (0, _classnames2.default)('md-snackbar', {
              'md-snackbar--multiline': multiline,
              'md-snackbar--toast': !action
            }, className)
          }),
          text,
          action
        );
      }
    }]);

    return Snackbar;
  }(_react.PureComponent);

  Snackbar.propTypes = {
    id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    children: _react.PropTypes.node,
    onDismiss: _react.PropTypes.func.isRequired,
    toast: _react.PropTypes.shape({
      text: _react.PropTypes.string.isRequired,
      action: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.shape({
        label: _react.PropTypes.string.isRequired,
        onClick: _react.PropTypes.func
      })]),
      onAppear: _react.PropTypes.func
    }).isRequired,
    multiline: _react.PropTypes.bool,
    autohide: _react.PropTypes.bool,
    autohideTimeout: _react.PropTypes.number,
    fab: _react.PropTypes.object,
    leaveTimeout: _react.PropTypes.number.isRequired
  };
  exports.default = Snackbar;
});