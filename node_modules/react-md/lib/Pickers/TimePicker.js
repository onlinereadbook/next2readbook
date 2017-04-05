(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', './ClockFace', '../Dialogs/DialogFooter', './TimePickerHeader'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('./ClockFace'), require('../Dialogs/DialogFooter'), require('./TimePickerHeader'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.ClockFace, global.DialogFooter, global.TimePickerHeader);
    global.TimePicker = mod.exports;
  }
})(this, function (exports, _react, _classnames, _ClockFace, _DialogFooter, _TimePickerHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _ClockFace2 = _interopRequireDefault(_ClockFace);

  var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

  var _TimePickerHeader2 = _interopRequireDefault(_TimePickerHeader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var TimePicker = function (_PureComponent) {
    _inherits(TimePicker, _PureComponent);

    function TimePicker(props) {
      _classCallCheck(this, TimePicker);

      var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

      _this._updateTime = _this._updateTime.bind(_this);
      return _this;
    }

    /**
     * Takes in the new time (number o'clock or minutes), updates the temp time
     * with that new time, and then calls the setTempTime prop.
     */


    _createClass(TimePicker, [{
      key: '_updateTime',
      value: function _updateTime(newTime) {
        var timePart = newTime;
        var _props = this.props,
            tempTime = _props.tempTime,
            setTempTime = _props.setTempTime,
            timeMode = _props.timeMode,
            timePeriod = _props.timePeriod;

        var time = new Date(tempTime);
        if (timeMode === 'hour') {
          var isAM = timePeriod === 'AM';
          var is12 = timePart === 12;
          if (timePeriod && isAM && is12) {
            timePart = 0;
          } else if (timePeriod && !isAM && !is12) {
            timePart += 12;
          }

          time.setHours(timePart);
        } else {
          time.setMinutes(timePart);
        }

        setTempTime(time);
      }
    }, {
      key: 'render',
      value: function render() {
        var _cn;

        var _props2 = this.props,
            okLabel = _props2.okLabel,
            okPrimary = _props2.okPrimary,
            onOkClick = _props2.onOkClick,
            cancelLabel = _props2.cancelLabel,
            cancelPrimary = _props2.cancelPrimary,
            onCancelClick = _props2.onCancelClick,
            style = _props2.style,
            className = _props2.className,
            setTimeMode = _props2.setTimeMode,
            setTempTime = _props2.setTempTime,
            timeMode = _props2.timeMode,
            tempTime = _props2.tempTime,
            hours = _props2.hours,
            minutes = _props2.minutes,
            timePeriod = _props2.timePeriod,
            displayMode = _props2.displayMode,
            inline = _props2.inline,
            icon = _props2.icon;


        var hoursInt = parseInt(hours, 10);
        var minutesInt = parseInt(minutes.replace(/[^0-9]/g, ''), 10);
        var actions = [{
          key: cancelLabel,
          onClick: onCancelClick,
          primary: cancelPrimary,
          secondary: !cancelPrimary,
          label: cancelLabel
        }, {
          key: okLabel,
          onClick: onOkClick,
          primary: okPrimary,
          secondary: !okPrimary,
          label: okLabel
        }];

        return _react2.default.createElement(
          'div',
          {
            style: style,
            className: (0, _classnames2.default)('md-picker md-picker--time', (_cn = {}, _defineProperty(_cn, 'md-picker--' + displayMode, displayMode), _defineProperty(_cn, 'md-picker--inline', inline), _defineProperty(_cn, 'md-picker--inline-icon', inline && icon), _cn), className)
          },
          _react2.default.createElement(_TimePickerHeader2.default, {
            tempTime: tempTime,
            timeMode: timeMode,
            setTimeMode: setTimeMode,
            setTempTime: setTempTime,
            hours: hours,
            minutes: minutes,
            timePeriod: timePeriod
          }),
          _react2.default.createElement(
            'div',
            { className: 'md-picker-content-container' },
            _react2.default.createElement(
              'div',
              { className: 'md-picker-content md-picker-content--clock' },
              _react2.default.createElement(_ClockFace2.default, {
                time: timeMode === 'hour' ? hoursInt : minutesInt,
                minutes: timeMode === 'minute',
                onChange: this._updateTime,
                timePeriod: timePeriod
              })
            ),
            _react2.default.createElement(_DialogFooter2.default, { actions: actions })
          )
        );
      }
    }]);

    return TimePicker;
  }(_react.PureComponent);

  TimePicker.propTypes = {
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    okLabel: _react.PropTypes.string.isRequired,
    okPrimary: _react.PropTypes.bool.isRequired,
    onOkClick: _react.PropTypes.func.isRequired,
    cancelLabel: _react.PropTypes.string.isRequired,
    cancelPrimary: _react.PropTypes.bool.isRequired,
    onCancelClick: _react.PropTypes.func.isRequired,
    DateTimeFormat: _react.PropTypes.func.isRequired,
    locales: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]).isRequired,
    icon: _react.PropTypes.bool,
    inline: _react.PropTypes.bool,
    displayMode: _react.PropTypes.oneOf(['landscape', 'portrait']),

    /**
     * A function that will switch the state from hour to minute.
     */
    setTimeMode: _react.PropTypes.func.isRequired,

    /**
     * A function that will update the time for the TimePicker before
     * the user selects ok. This function will be given a new Date object
     * with a modified time.
     */
    setTempTime: _react.PropTypes.func.isRequired,

    /**
     * The current display mode of the time picker.
     */
    timeMode: _react.PropTypes.oneOf(['hour', 'minute']).isRequired,

    /**
     * The current time as a date object that is being displayed in the
     * time picker.
     */
    tempTime: _react.PropTypes.instanceOf(Date).isRequired,

    /**
     * A string that is a representation of the hours in the user's locale.
     */
    hours: _react.PropTypes.string.isRequired,

    /**
     * A string that is a representation of the minutes in the user's locale.
     * This will also include any separator the locale uses.
     *
     * Example: ':15' in '3:15 PM' for 'en-US'
     */
    minutes: _react.PropTypes.string.isRequired,

    /**
     * An optional time period if a user's locale uses it.
     */
    timePeriod: _react.PropTypes.string
  };
  exports.default = TimePicker;
});