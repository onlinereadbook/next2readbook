(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../constants/keyCodes', '../FontIcons/FontIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../constants/keyCodes'), require('../FontIcons/FontIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.keyCodes, global.FontIcon);
    global.PasswordButton = mod.exports;
  }
})(this, function (exports, _react, _classnames, _keyCodes, _FontIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _FontIcon2 = _interopRequireDefault(_FontIcon);

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

  var PasswordButton = function (_PureComponent) {
    _inherits(PasswordButton, _PureComponent);

    function PasswordButton(props) {
      _classCallCheck(this, PasswordButton);

      var _this = _possibleConstructorReturn(this, (PasswordButton.__proto__ || Object.getPrototypeOf(PasswordButton)).call(this, props));

      _this.state = { keyboardFocus: false };

      _this._handleKeyUp = _this._handleKeyUp.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      _this._handleOutsideClick = _this._handleOutsideClick.bind(_this);
      return _this;
    }

    _createClass(PasswordButton, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.state.keyboardFocus) {
          window.removeEventListener('click', this._handleOutsideClick);
        }
      }
    }, {
      key: '_handleOutsideClick',
      value: function _handleOutsideClick(e) {
        if (this._button && !this._button.contains(e.target)) {
          window.removeEventListener('click', this._handleOutsideClick);
          this.setState({ keyboardFocus: false });
        }
      }
    }, {
      key: '_handleKeyUp',
      value: function _handleKeyUp(e) {
        if (this.props.onKeyUp) {
          this.props.onKeyUp(e);
        }

        if ((e.which || e.keyCode) === _keyCodes.TAB) {
          window.addEventListener('click', this._handleOutsideClick);
          this.setState({ keyboardFocus: true });
        }
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        if (this.props.onKeyDown) {
          this.props.onKeyDown(e);
        }

        var key = e.which || e.keyCode;
        if (key === _keyCodes.TAB || key === _keyCodes.ENTER || key === _keyCodes.SPACE) {
          window.removeEventListener('click', this._handleOutsideClick);
          this.setState({ keyboardFocus: false });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var keyboardFocus = this.state.keyboardFocus;

        var _props = this.props,
            active = _props.active,
            passwordVisible = _props.passwordVisible,
            iconClassName = _props.iconClassName,
            iconChildren = _props.iconChildren,
            block = _props.block,
            floating = _props.floating,
            props = _objectWithoutProperties(_props, ['active', 'passwordVisible', 'iconClassName', 'iconChildren', 'block', 'floating']);

        return _react2.default.createElement(
          'button',
          _extends({}, props, {
            onKeyDown: this._handleKeyDown,
            onKeyUp: this._handleKeyUp,
            type: 'button',
            className: (0, _classnames2.default)('md-text-field-inline-indicator md-password-btn md-pointer--hover', {
              'md-password-btn--focus': keyboardFocus,
              'md-password-btn--active': active,
              'md-password-btn--invisible': active && !passwordVisible,
              'md-text-field-inline-indicator--floating': floating,
              'md-text-field-inline-indicator--block': block
            })
          }),
          _react2.default.createElement(
            _FontIcon2.default,
            { iconClassName: iconClassName },
            iconChildren
          )
        );
      }
    }]);

    return PasswordButton;
  }(_react.PureComponent);

  PasswordButton.propTypes = {
    active: _react.PropTypes.bool,
    passwordVisible: _react.PropTypes.bool,
    iconClassName: _react.PropTypes.string,
    iconChildren: _react.PropTypes.node,
    onKeyUp: _react.PropTypes.func,
    onKeyDown: _react.PropTypes.func,
    block: _react.PropTypes.bool,
    floating: _react.PropTypes.bool
  };
  exports.default = PasswordButton;
});