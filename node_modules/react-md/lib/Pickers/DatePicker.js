(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../Dialogs/DialogFooter', './DatePickerHeader', './DatePickerCalendar', './YearPicker'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../Dialogs/DialogFooter'), require('./DatePickerHeader'), require('./DatePickerCalendar'), require('./YearPicker'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.DialogFooter, global.DatePickerHeader, global.DatePickerCalendar, global.YearPicker);
    global.DatePicker = mod.exports;
  }
})(this, function (exports, _react, _classnames, _DialogFooter, _DatePickerHeader, _DatePickerCalendar, _YearPicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

  var _DatePickerHeader2 = _interopRequireDefault(_DatePickerHeader);

  var _DatePickerCalendar2 = _interopRequireDefault(_DatePickerCalendar);

  var _YearPicker2 = _interopRequireDefault(_YearPicker);

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

  var DatePicker = function (_PureComponent) {
    _inherits(DatePicker, _PureComponent);

    function DatePicker() {
      _classCallCheck(this, DatePicker);

      return _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));
    }

    _createClass(DatePicker, [{
      key: 'render',
      value: function render() {
        var _cn;

        var _props = this.props,
            okLabel = _props.okLabel,
            okPrimary = _props.okPrimary,
            onOkClick = _props.onOkClick,
            cancelLabel = _props.cancelLabel,
            cancelPrimary = _props.cancelPrimary,
            onCancelClick = _props.onCancelClick,
            DateTimeFormat = _props.DateTimeFormat,
            locales = _props.locales,
            calendarTempDate = _props.calendarTempDate,
            calendarMode = _props.calendarMode,
            changeCalendarMode = _props.changeCalendarMode,
            style = _props.style,
            className = _props.className,
            inline = _props.inline,
            icon = _props.icon,
            displayMode = _props.displayMode,
            props = _objectWithoutProperties(_props, ['okLabel', 'okPrimary', 'onOkClick', 'cancelLabel', 'cancelPrimary', 'onCancelClick', 'DateTimeFormat', 'locales', 'calendarTempDate', 'calendarMode', 'changeCalendarMode', 'style', 'className', 'inline', 'icon', 'displayMode']);

        var picker = void 0;
        if (calendarMode === 'calendar') {
          picker = _react2.default.createElement(_DatePickerCalendar2.default, _extends({}, props, {
            key: 'calendar',
            calendarTempDate: calendarTempDate,
            DateTimeFormat: DateTimeFormat,
            locales: locales
          }));
        } else {
          picker = _react2.default.createElement(_YearPicker2.default, _extends({}, props, {
            key: 'year',
            calendarTempDate: calendarTempDate,
            DateTimeFormat: DateTimeFormat,
            locales: locales
          }));
        }

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
            className: (0, _classnames2.default)('md-picker md-picker--date', (_cn = {}, _defineProperty(_cn, 'md-picker--' + displayMode, displayMode), _defineProperty(_cn, 'md-picker--inline', inline), _defineProperty(_cn, 'md-picker--inline-icon', inline && icon), _cn), className)
          },
          _react2.default.createElement(_DatePickerHeader2.default, {
            DateTimeFormat: DateTimeFormat,
            locales: locales,
            calendarTempDate: calendarTempDate,
            calendarMode: calendarMode,
            changeCalendarMode: changeCalendarMode
          }),
          _react2.default.createElement(
            'div',
            { className: 'md-picker-content-container' },
            picker,
            _react2.default.createElement(_DialogFooter2.default, { actions: actions })
          )
        );
      }
    }]);

    return DatePicker;
  }(_react.PureComponent);

  DatePicker.propTypes = {
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
    calendarDate: _react.PropTypes.instanceOf(Date).isRequired,
    calendarTempDate: _react.PropTypes.instanceOf(Date).isRequired,
    calendarMode: _react.PropTypes.oneOf(['calendar', 'year']).isRequired,
    changeCalendarMode: _react.PropTypes.func.isRequired,
    icon: _react.PropTypes.bool,
    inline: _react.PropTypes.bool,
    displayMode: _react.PropTypes.oneOf(['landscape', 'portrait'])
  };
  exports.default = DatePicker;
});