(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', './SwitchThumb'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('./SwitchThumb'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.SwitchThumb);
    global.SwitchTrack = mod.exports;
  }
})(this, function (exports, _react, _classnames, _SwitchThumb) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _SwitchThumb2 = _interopRequireDefault(_SwitchThumb);

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

  var SwitchTrack = function (_PureComponent) {
    _inherits(SwitchTrack, _PureComponent);

    function SwitchTrack() {
      _classCallCheck(this, SwitchTrack);

      return _possibleConstructorReturn(this, (SwitchTrack.__proto__ || Object.getPrototypeOf(SwitchTrack)).apply(this, arguments));
    }

    _createClass(SwitchTrack, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            disabled = _props.disabled,
            checked = _props.checked,
            className = _props.className,
            props = _objectWithoutProperties(_props, ['disabled', 'checked', 'className']);

        return _react2.default.createElement(
          'div',
          _extends({}, props, {
            className: (0, _classnames2.default)('md-switch-track', {
              'md-pointer--hover': !disabled,
              'md-switch-track--disabled': disabled,
              'md-switch-track--on': checked,
              'md-switch-track--off': !checked
            }, className)
          }),
          _react2.default.createElement(_SwitchThumb2.default, { disabled: disabled, checked: checked, onClick: props.onClick })
        );
      }
    }]);

    return SwitchTrack;
  }(_react.PureComponent);

  SwitchTrack.propTypes = {
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    checked: _react.PropTypes.bool
  };
  exports.default = SwitchTrack;
});