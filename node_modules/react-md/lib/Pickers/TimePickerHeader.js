(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './TimePeriods', './PickerControl'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./TimePeriods'), require('./PickerControl'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.TimePeriods, global.PickerControl);
    global.TimePickerHeader = mod.exports;
  }
})(this, function (exports, _react, _TimePeriods, _PickerControl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _TimePeriods2 = _interopRequireDefault(_TimePeriods);

  var _PickerControl2 = _interopRequireDefault(_PickerControl);

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

  var TimePickerHeader = function (_PureComponent) {
    _inherits(TimePickerHeader, _PureComponent);

    function TimePickerHeader(props) {
      _classCallCheck(this, TimePickerHeader);

      var _this = _possibleConstructorReturn(this, (TimePickerHeader.__proto__ || Object.getPrototypeOf(TimePickerHeader)).call(this, props));

      _this._setHour = _this._setHour.bind(_this);
      _this._setMinute = _this._setMinute.bind(_this);
      return _this;
    }

    _createClass(TimePickerHeader, [{
      key: '_setHour',
      value: function _setHour() {
        this.props.setTimeMode('hour');
      }
    }, {
      key: '_setMinute',
      value: function _setMinute() {
        this.props.setTimeMode('minute');
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            timeMode = _props.timeMode,
            hours = _props.hours,
            minutes = _props.minutes,
            timePeriod = _props.timePeriod,
            setTempTime = _props.setTempTime,
            tempTime = _props.tempTime;

        var timePeriods = void 0;
        if (timePeriod) {
          timePeriods = _react2.default.createElement(_TimePeriods2.default, { tempTime: tempTime, setTempTime: setTempTime, timePeriod: timePeriod });
        }

        return _react2.default.createElement(
          'header',
          { className: 'md-picker-header md-text-right' },
          _react2.default.createElement(
            _PickerControl2.default,
            { onClick: this._setHour, active: timeMode === 'hour' },
            _react2.default.createElement(
              'h4',
              { className: 'md-display-3' },
              hours
            )
          ),
          _react2.default.createElement(
            _PickerControl2.default,
            { onClick: this._setMinute, active: timeMode === 'minute' },
            _react2.default.createElement(
              'h4',
              { className: 'md-display-3' },
              minutes
            )
          ),
          timePeriods
        );
      }
    }]);

    return TimePickerHeader;
  }(_react.PureComponent);

  TimePickerHeader.propTypes = {
    /**
     * The current time of the time picker.
     */
    tempTime: _react.PropTypes.instanceOf(Date).isRequired,

    /**
     * The current time type that is being changed.
     */
    timeMode: _react.PropTypes.oneOf(['hour', 'minute']).isRequired,

    /**
     * A function to update the time mode.
     */
    setTimeMode: _react.PropTypes.func.isRequired,

    /**
     * A function to update the time for the time picker.
     */
    setTempTime: _react.PropTypes.func.isRequired,

    /**
     * A formatted hours string for the user's locale. This
     * would be '3' for en-US if the time was '3:15'
     */
    hours: _react.PropTypes.string.isRequired,

    /**
     * A formatted minutes string for the user's locale.
     * This would be ':15' for en-US if the time was '3:15'.
     */
    minutes: _react.PropTypes.string.isRequired,

    /**
     * An optional time period to use for locales that use
     * 12 hour clocks and AM/PM.
     */
    timePeriod: _react.PropTypes.string
  };
  exports.default = TimePickerHeader;
});