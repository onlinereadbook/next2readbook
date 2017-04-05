(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../utils/DateUtils/addHours', './PickerControl'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../utils/DateUtils/addHours'), require('./PickerControl'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.addHours, global.PickerControl);
    global.TimePeriods = mod.exports;
  }
})(this, function (exports, _react, _addHours, _PickerControl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _addHours2 = _interopRequireDefault(_addHours);

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

  var TimePeriods = function (_PureComponent) {
    _inherits(TimePeriods, _PureComponent);

    function TimePeriods(props) {
      _classCallCheck(this, TimePeriods);

      var _this = _possibleConstructorReturn(this, (TimePeriods.__proto__ || Object.getPrototypeOf(TimePeriods)).call(this, props));

      _this._setAM = _this._setAM.bind(_this);
      _this._setPM = _this._setPM.bind(_this);
      return _this;
    }

    _createClass(TimePeriods, [{
      key: '_setAM',
      value: function _setAM() {
        if (this.props.timePeriod !== 'AM') {
          this.props.setTempTime((0, _addHours2.default)(this.props.tempTime, 12));
        }
      }
    }, {
      key: '_setPM',
      value: function _setPM() {
        if (this.props.timePeriod !== 'PM') {
          this.props.setTempTime((0, _addHours2.default)(this.props.tempTime, -12));
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var timePeriod = this.props.timePeriod;

        return _react2.default.createElement(
          'div',
          { className: 'md-time-periods' },
          _react2.default.createElement(
            _PickerControl2.default,
            { onClick: this._setAM, active: timePeriod === 'AM' },
            _react2.default.createElement(
              'h6',
              { className: 'md-time-period' },
              'AM'
            )
          ),
          _react2.default.createElement(
            _PickerControl2.default,
            { onClick: this._setPM, active: timePeriod === 'PM' },
            _react2.default.createElement(
              'h6',
              { className: 'md-time-period' },
              'PM'
            )
          )
        );
      }
    }]);

    return TimePeriods;
  }(_react.PureComponent);

  TimePeriods.propTypes = {
    /**
     * The current time for the time picker.
     */
    tempTime: _react.PropTypes.instanceOf(Date).isRequired,

    /**
     * A function to update the time for the time picker.
     */
    setTempTime: _react.PropTypes.func.isRequired,

    /**
     * The current time period.
     */
    timePeriod: _react.PropTypes.string.isRequired
  };
  exports.default = TimePeriods;
});