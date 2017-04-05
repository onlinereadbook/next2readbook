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
    global.CalendarDate = mod.exports;
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

  var CalendarDate = function (_PureComponent) {
    _inherits(CalendarDate, _PureComponent);

    function CalendarDate(props) {
      _classCallCheck(this, CalendarDate);

      var _this = _possibleConstructorReturn(this, (CalendarDate.__proto__ || Object.getPrototypeOf(CalendarDate)).call(this, props));

      _this.state = _this._getFormattedDate(props);
      _this.state.desktopActive = false;
      _this._handleClick = _this._handleClick.bind(_this);
      _this._setActive = _this._setActive.bind(_this);
      _this._setInactive = _this._setInactive.bind(_this);
      _this._setFocus = _this._setFocus.bind(_this);
      return _this;
    }

    _createClass(CalendarDate, [{
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps) {
        var _props = this.props,
            DateTimeFormat = _props.DateTimeFormat,
            locales = _props.locales,
            date = _props.date;

        if (DateTimeFormat !== nextProps.DateTimeFormat || locales !== nextProps.locales || date !== nextProps.date) {
          this.setState(this._getFormattedDate(nextProps));
        }
      }
    }, {
      key: '_setFocus',
      value: function _setFocus(btn) {
        if (btn && this.props.active) {
          btn.focus();
        }
      }
    }, {
      key: '_getFormattedDate',
      value: function _getFormattedDate(_ref) {
        var DateTimeFormat = _ref.DateTimeFormat,
            locales = _ref.locales,
            date = _ref.date;

        return {
          date: new DateTimeFormat(locales, { day: 'numeric' }).format(date)
        };
      }
    }, {
      key: '_handleClick',
      value: function _handleClick(e) {
        this.props.onClick(new Date(this.props.date), e);
      }
    }, {
      key: '_setActive',
      value: function _setActive() {
        if (!this.props.disabled) {
          this.setState({ desktopActive: true });
        }
      }
    }, {
      key: '_setInactive',
      value: function _setInactive() {
        if (!this.props.disabled) {
          this.setState({ desktopActive: false });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            date = _state.date,
            desktopActive = _state.desktopActive;
        var _props2 = this.props,
            disabled = _props2.disabled,
            active = _props2.active,
            today = _props2.today,
            className = _props2.className;


        var fullyActive = today && !active && !desktopActive;
        return _react2.default.createElement(
          'button',
          {
            type: 'button',
            ref: this._setFocus,
            onFocus: this._setActive,
            onBlur: this._setInactive,
            onMouseOver: this._setActive,
            onMouseLeave: this._setInactive,
            className: (0, _classnames2.default)('md-btn md-calendar-date md-calendar-date--btn', {
              'md-text--disabled': disabled,
              'md-pointer--hover': !disabled,
              'md-text--theme-primary': fullyActive,
              'md-calendar-date--btn-active': active || desktopActive
            }, className),
            onClick: this._handleClick,
            disabled: disabled
          },
          _react2.default.createElement(
            'span',
            {
              className: (0, _classnames2.default)('md-calendar-date--date', {
                'md-picker-text--active': active || desktopActive,
                'md-font-bold': fullyActive
              })
            },
            date
          )
        );
      }
    }]);

    return CalendarDate;
  }(_react.PureComponent);

  CalendarDate.propTypes = {
    className: _react.PropTypes.string,
    date: _react.PropTypes.instanceOf(Date).isRequired,
    DateTimeFormat: _react.PropTypes.func.isRequired,
    locales: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]).isRequired,
    disabled: _react.PropTypes.bool,
    onClick: _react.PropTypes.func.isRequired,
    active: _react.PropTypes.bool,
    today: _react.PropTypes.bool
  };
  exports.default = CalendarDate;
});