(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../constants/keyCodes'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../constants/keyCodes'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.keyCodes);
    global.ClockTime = mod.exports;
  }
})(this, function (exports, _react, _classnames, _keyCodes) {
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

  var CLOCK_PADDING = 4;

  /**
   * The `ClockTime` component is used for positioning hours or minutes
   * in a clock. The time will be positioned based on it's given index
   * and the radius of the clock.
   */

  var ClockTime = function (_PureComponent) {
    _inherits(ClockTime, _PureComponent);

    function ClockTime(props) {
      _classCallCheck(this, ClockTime);

      var _this = _possibleConstructorReturn(this, (ClockTime.__proto__ || Object.getPrototypeOf(ClockTime)).call(this, props));

      _this.state = {
        // default size in scss
        size: 18
      };

      _this._setTime = _this._setTime.bind(_this);
      _this._setPosition = _this._setPosition.bind(_this);
      _this._handleKeyUp = _this._handleKeyUp.bind(_this);
      return _this;
    }

    _createClass(ClockTime, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.radius !== nextProps.radius || this.props.index !== nextProps.index) {
          this._setPosition(nextProps, this._time);
        }
      }
    }, {
      key: '_handleKeyUp',
      value: function _handleKeyUp(e) {
        if ((e.which || e.keyCode) === _keyCodes.TAB) {
          this.props.onKeyboardFocus(this.props.time);
        }
      }
    }, {
      key: '_setTime',
      value: function _setTime(time) {
        this._time = time;
        if (time !== null) {
          this._setPosition(this.props, time);

          if (this.props.active) {
            time.focus();
          }
        }
      }
    }, {
      key: '_setPosition',
      value: function _setPosition(_ref, time) {
        var radius = _ref.radius,
            index = _ref.index;

        // 36 is default size for the time
        var size = (time.offsetWidth || 36) / 2;
        var timeRadians = Math.PI / 2 - index * (Math.PI / 6);
        var innerCircle = index > 12;

        var outerRadius = radius - size;
        var innerRadius = outerRadius - CLOCK_PADDING - (innerCircle ? size * 2 : 0);

        this.setState({
          style: {
            top: outerRadius - innerRadius * Math.sin(timeRadians),
            left: outerRadius + innerRadius * Math.cos(timeRadians)
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            time = _props.time,
            active = _props.active;

        return _react2.default.createElement(
          'div',
          {
            ref: this._setTime,
            tabIndex: 0,
            className: (0, _classnames2.default)('md-clock-time md-text-no-select md-pointer--none', {
              'md-text': !active,
              'md-picker-text--active': active
            }),
            style: this.state.style,
            onKeyUp: this._handleKeyUp
          },
          _react2.default.createElement(
            'span',
            { className: 'md-clock-time-value' },
            time
          )
        );
      }
    }]);

    return ClockTime;
  }(_react.PureComponent);

  ClockTime.propTypes = {
    /**
     * The index of the current time to be displayed. This
     * should be a number between 1 and 24.
     */
    index: _react.PropTypes.number.isRequired,

    /**
     * The time number to display.
     */
    time: _react.PropTypes.number.isRequired,

    /**
     * Boolean if this time is currently selected.
     */
    active: _react.PropTypes.bool.isRequired,

    /**
     * The radius of the clock.
     */
    radius: _react.PropTypes.number.isRequired,

    onKeyboardFocus: _react.PropTypes.func.isRequired
  };
  exports.default = ClockTime;
});