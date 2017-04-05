(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../Helpers/AccessibleFakeInkedButton'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../Helpers/AccessibleFakeInkedButton'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.AccessibleFakeInkedButton);
    global.SwitchThumb = mod.exports;
  }
})(this, function (exports, _react, _classnames, _AccessibleFakeInkedButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

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

  var disabledInteractions = ['mouse'];

  /**
   * This is the `Thumb` for the switch. The `ink` in the Thumb is only active on touch and keyboard
   * interactions, so the `AccessibleFakeInkButton` does not work for this case.
   *
   * This component really just is used for custom inkage.
   */

  var SwitchThumb = function (_PureComponent) {
    _inherits(SwitchThumb, _PureComponent);

    function SwitchThumb() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SwitchThumb);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SwitchThumb.__proto__ || Object.getPrototypeOf(SwitchThumb)).call.apply(_ref, [this].concat(args))), _this), _this._handleClick = function (e) {
        // The switch's thumb needs to have an onClick handler to enable keyboard accessibility, however,
        // this actually triggers two click events since the slider's track needs to be clickable as well.
        // Stop propagation to prevent the thumb click AND track propagation click.
        e.stopPropagation();
        _this.props.onClick(e);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SwitchThumb, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            disabled = _props.disabled,
            checked = _props.checked,
            className = _props.className,
            props = _objectWithoutProperties(_props, ['disabled', 'checked', 'className']);

        return _react2.default.createElement(_AccessibleFakeInkedButton2.default, _extends({}, props, {
          onClick: this._handleClick,
          disabled: disabled,
          disabledInteractions: disabledInteractions,
          inkContainerClassName: 'md-ink-container--2x',
          className: (0, _classnames2.default)('md-switch-thumb', {
            'md-switch-thumb--disabled': disabled,
            'md-switch-thumb--on': checked,
            'md-switch-thumb--off': !checked
          }, className)
        }));
      }
    }]);

    return SwitchThumb;
  }(_react.PureComponent);

  SwitchThumb.propTypes = {
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    checked: _react.PropTypes.bool,
    onClick: _react.PropTypes.func.isRequired
  };
  exports.default = SwitchThumb;
});