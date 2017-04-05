(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames);
    global.ThumbMask = mod.exports;
  }
})(this, function (exports, _react, _classnames) {
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

  var ThumbMask = function (_PureComponent) {
    _inherits(ThumbMask, _PureComponent);

    function ThumbMask() {
      _classCallCheck(this, ThumbMask);

      return _possibleConstructorReturn(this, (ThumbMask.__proto__ || Object.getPrototypeOf(ThumbMask)).apply(this, arguments));
    }

    _createClass(ThumbMask, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            style = _props.style,
            className = _props.className,
            thumbLeft = _props.thumbLeft,
            disabled = _props.disabled,
            dragging = _props.dragging,
            maskInked = _props.maskInked,
            discrete = _props.discrete,
            leaving = _props.leaving,
            props = _objectWithoutProperties(_props, ['style', 'className', 'thumbLeft', 'disabled', 'dragging', 'maskInked', 'discrete', 'leaving']);

        return _react2.default.createElement('span', _extends({}, props, {
          style: Object.assign({}, style, { left: thumbLeft }),
          className: (0, _classnames2.default)('md-slider-thumb md-slider-thumb--mask', className, {
            'md-slider-thumb--dragging': dragging,
            'md-slider-thumb--mask-inked': maskInked,
            'md-slider-thumb--mask-disabled': disabled,
            'md-slider-thumb--discrete-mask-inked': maskInked && discrete,
            'md-slider-thumb--discrete-mask-leaving': discrete && leaving
          })
        }));
      }
    }]);

    return ThumbMask;
  }(_react.PureComponent);

  ThumbMask.propTypes = {
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    thumbLeft: _react.PropTypes.string.isRequired,
    maskInked: _react.PropTypes.bool,
    dragging: _react.PropTypes.bool,
    discrete: _react.PropTypes.bool,
    leaving: _react.PropTypes.bool
  };
  exports.default = ThumbMask;
});