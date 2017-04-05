(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../utils/EventUtils/isValidClick', '../utils/EventUtils/captureNextEvent', '../utils/NumberUtils/calcTimeFromPoint', '../utils/calcPageOffset', './ClockTime', './ClockHand'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../utils/EventUtils/isValidClick'), require('../utils/EventUtils/captureNextEvent'), require('../utils/NumberUtils/calcTimeFromPoint'), require('../utils/calcPageOffset'), require('./ClockTime'), require('./ClockHand'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.isValidClick, global.captureNextEvent, global.calcTimeFromPoint, global.calcPageOffset, global.ClockTime, global.ClockHand);
    global.ClockFace = mod.exports;
  }
})(this, function (exports, _react, _isValidClick, _captureNextEvent, _calcTimeFromPoint, _calcPageOffset, _ClockTime, _ClockHand) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _isValidClick2 = _interopRequireDefault(_isValidClick);

  var _captureNextEvent2 = _interopRequireDefault(_captureNextEvent);

  var _calcTimeFromPoint2 = _interopRequireDefault(_calcTimeFromPoint);

  var _calcPageOffset2 = _interopRequireDefault(_calcPageOffset);

  var _ClockTime2 = _interopRequireDefault(_ClockTime);

  var _ClockHand2 = _interopRequireDefault(_ClockHand);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  var ClockFace = function (_PureComponent) {
    _inherits(ClockFace, _PureComponent);

    function ClockFace(props) {
      _classCallCheck(this, ClockFace);

      var _this = _possibleConstructorReturn(this, (ClockFace.__proto__ || Object.getPrototypeOf(ClockFace)).call(this, props));

      _this.state = { radius: 136, moving: false };
      _this._center = {};
      _this._setFace = _this._setFace.bind(_this);
      _this._calcNewTime = _this._calcNewTime.bind(_this);
      _this._handleMouseUp = _this._handleMouseUp.bind(_this);
      _this._handleMouseDown = _this._handleMouseDown.bind(_this);
      _this._handleMouseMove = _this._handleMouseMove.bind(_this);
      _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
      _this._handleTouchMove = _this._handleTouchMove.bind(_this);
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      return _this;
    }

    _createClass(ClockFace, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('mousemove', this._handleMouseMove);
        window.removeEventListener('mouseup', this._handleMouseMove);
        window.removeEventListener('touchmove', this._handleTouchMove);
        window.removeEventListener('touchend', this._handleTouchEnd);
      }
    }, {
      key: '_setFace',
      value: function _setFace(face) {
        this._face = face;

        if (face !== null) {
          var radius = face.offsetWidth / 2;
          var offset = (0, _calcPageOffset2.default)(face);
          this._center = { x: offset.left + radius, y: offset.top + radius };
          this._left = offset.left;
          this._top = offset.top;
          this.setState({ radius: radius });
        }
      }
    }, {
      key: '_handleMouseDown',
      value: function _handleMouseDown(e) {
        if (!(0, _isValidClick2.default)(e)) {
          return;
        }

        window.addEventListener('mousemove', this._handleMouseMove);
        window.addEventListener('mouseup', this._handleMouseUp);
        this.setState({ moving: true });
      }
    }, {
      key: '_handleMouseMove',
      value: function _handleMouseMove(e) {
        if (!this.state.moving) {
          return;
        }

        e.preventDefault();
        this._calcNewTime(e);
      }
    }, {
      key: '_handleMouseUp',
      value: function _handleMouseUp(e) {
        if (!(0, _isValidClick2.default)(e)) {
          return;
        }

        if (this._face && !this._face.contains(e.target)) {
          (0, _captureNextEvent2.default)('click');
        }

        window.removeEventListener('mousemove', this._handleMouseMove);
        window.removeEventListener('mouseup', this._handleMouseUp);

        this._calcNewTime(e);
        this.setState({ moving: false });
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart() {
        (0, _captureNextEvent2.default)('mousedown');

        window.addEventListener('touchmove', this._handleTouchMove);
        window.addEventListener('touchend', this._handleTouchEnd);
        this.setState({ moving: true });
      }
    }, {
      key: '_handleTouchMove',
      value: function _handleTouchMove(e) {
        if (!this.state.moving) {
          return;
        }
        e.preventDefault();

        this._calcNewTime(e);
      }
    }, {
      key: '_handleTouchEnd',
      value: function _handleTouchEnd(e) {
        this._calcNewTime(e);
        if (this._face && !this._face.contains(e.target)) {
          (0, _captureNextEvent2.default)('click');
        }

        window.removeEventListener('touchmove', this._handleTouchMove);
        window.removeEventListener('touchend', this._handleTouchEnd);

        this.setState({ moving: false });
      }
    }, {
      key: '_calcNewTime',
      value: function _calcNewTime(e) {
        var _ref = e.changedTouches ? e.changedTouches[0] : e,
            x = _ref.pageX,
            y = _ref.pageY;

        var innerRadius = this.state.radius - 48;
        var _props = this.props,
            onChange = _props.onChange,
            minutes = _props.minutes,
            timePeriod = _props.timePeriod;

        onChange((0, _calcTimeFromPoint2.default)({ x: x, y: y }, this._center, innerRadius, minutes, timePeriod));
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            time = _props2.time,
            minutes = _props2.minutes,
            timePeriod = _props2.timePeriod,
            onChange = _props2.onChange;
        var radius = this.state.radius;

        var size = !minutes && !timePeriod ? 24 : 12;
        var times = Array.apply(null, new Array(size)).map(function (_, i) {
          var clockTime = i + 1;
          if (minutes) {
            clockTime = clockTime * 5 % 60;
          } else {
            clockTime %= 24;
          }

          return _react2.default.createElement(_ClockTime2.default, {
            key: 'time-' + i,
            index: i + 1,
            time: clockTime,
            active: clockTime === time,
            radius: radius,
            onKeyboardFocus: onChange
          });
        });

        return _react2.default.createElement(
          'div',
          {
            ref: this._setFace,
            className: 'md-clock-face md-block-centered md-pointer--hover',
            onMouseDown: this._handleMouseDown,
            onTouchStart: this._handleTouchStart
          },
          times,
          _react2.default.createElement(_ClockHand2.default, { time: time, coords: radius, minutes: minutes })
        );
      }
    }]);

    return ClockFace;
  }(_react.PureComponent);

  ClockFace.propTypes = {
    /**
     * The current time for the clock.
     */
    time: _react.PropTypes.number.isRequired,

    /**
     * Boolean if the clock is on the minutes view.
     */
    minutes: _react.PropTypes.bool.isRequired,

    /**
     * A function to call when a new time is selected. It gives the
     * new time value. If it is 12 o'clock, 0 will be given.
     */
    onChange: _react.PropTypes.func.isRequired,

    /**
     * An optional time period string. This should be either AM or PM
     * if the locale uses them.
     */
    timePeriod: _react.PropTypes.string
  };
  exports.default = ClockFace;
});