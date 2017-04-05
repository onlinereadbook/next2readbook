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
    global.Year = mod.exports;
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

  var Year = function (_PureComponent) {
    _inherits(Year, _PureComponent);

    function Year(props) {
      _classCallCheck(this, Year);

      var _this = _possibleConstructorReturn(this, (Year.__proto__ || Object.getPrototypeOf(Year)).call(this, props));

      _this.state = { desktopActive: false };
      _this._handleClick = _this._handleClick.bind(_this);
      _this._setActive = _this._setActive.bind(_this);
      _this._setInactive = _this._setInactive.bind(_this);
      _this._setActiveFocus = _this._setActiveFocus.bind(_this);
      return _this;
    }

    _createClass(Year, [{
      key: '_setActiveFocus',
      value: function _setActiveFocus(btn) {
        if (btn && this.props.active) {
          btn.focus();
        }
      }
    }, {
      key: '_setActive',
      value: function _setActive() {
        this.setState({ desktopActive: true });
      }
    }, {
      key: '_setInactive',
      value: function _setInactive() {
        this.setState({ desktopActive: false });
      }
    }, {
      key: '_handleClick',
      value: function _handleClick(e) {
        this.props.onClick(this.props.year, e);
      }
    }, {
      key: 'render',
      value: function render() {
        var desktopActive = this.state.desktopActive;
        var _props = this.props,
            active = _props.active,
            className = _props.className,
            year = _props.year;

        return _react2.default.createElement(
          'button',
          {
            type: 'button',
            ref: this._setActiveFocus,
            className: (0, _classnames2.default)('md-btn md-pointer--hover md-full-width md-year', {
              'md-text': !active && !desktopActive,
              'md-text--theme-primary': active || desktopActive,
              'md-year--active': active
            }, className),
            onClick: this._handleClick
          },
          year
        );
      }
    }]);

    return Year;
  }(_react.PureComponent);

  Year.propTypes = {
    className: _react.PropTypes.string,
    active: _react.PropTypes.bool.isRequired,
    onClick: _react.PropTypes.func.isRequired,
    year: _react.PropTypes.number.isRequired
  };
  exports.default = Year;
});