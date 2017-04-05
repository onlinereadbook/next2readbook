(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../Helpers/AccessibleFakeInkedButton', '../Lists/TileAddon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../Helpers/AccessibleFakeInkedButton'), require('../Lists/TileAddon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.AccessibleFakeInkedButton, global.TileAddon);
    global.MiniListItem = mod.exports;
  }
})(this, function (exports, _react, _classnames, _AccessibleFakeInkedButton, _TileAddon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

  var _TileAddon2 = _interopRequireDefault(_TileAddon);

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

  var MiniListItem = function (_PureComponent) {
    _inherits(MiniListItem, _PureComponent);

    function MiniListItem(props) {
      _classCallCheck(this, MiniListItem);

      var _this = _possibleConstructorReturn(this, (MiniListItem.__proto__ || Object.getPrototypeOf(MiniListItem)).call(this, props));

      _this.state = { active: false };
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
      _this._handleMouseOver = _this._handleMouseOver.bind(_this);
      _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
      return _this;
    }

    _createClass(MiniListItem, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this._touchTimeout) {
          clearTimeout(this._touchTimeout);
        }
      }
    }, {
      key: '_handleMouseOver',
      value: function _handleMouseOver(e) {
        if (this.props.onMouseOver) {
          this.props.onMouseOver(e);
        }

        if (!this.props.disabled) {
          this.setState({ active: true });
        }
      }
    }, {
      key: '_handleMouseLeave',
      value: function _handleMouseLeave(e) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e);
        }

        if (!this.props.disabled) {
          this.setState({ active: false });
        }
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart(e) {
        if (this.props.onTouchStart) {
          this.props.onTouchStart(e);
        }

        this._touched = true;

        this.setState({ active: true, touchedAt: Date.now() });
      }
    }, {
      key: '_handleTouchEnd',
      value: function _handleTouchEnd(e) {
        var _this2 = this;

        if (this.props.onTouchEnd) {
          this.props.onTouchEnd(e);
        }

        var time = Date.now() - this.state.touchedAt;
        this._touchTimeout = setTimeout(function () {
          _this2._touchTimeout = null;

          _this2.setState({ active: false });
        }, time > 450 ? 0 : 450 - time);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            style = _props.style,
            className = _props.className,
            tileStyle = _props.tileStyle,
            tileClassName = _props.tileClassName,
            leftIcon = _props.leftIcon,
            leftAvatar = _props.leftAvatar,
            active = _props.active,
            activeClassName = _props.activeClassName,
            props = _objectWithoutProperties(_props, ['style', 'className', 'tileStyle', 'tileClassName', 'leftIcon', 'leftAvatar', 'active', 'activeClassName']);

        delete props.defaultOpen;
        return _react2.default.createElement(
          'li',
          { style: style, className: className },
          _react2.default.createElement(
            _AccessibleFakeInkedButton2.default,
            _extends({}, props, {
              style: tileStyle,
              className: (0, _classnames2.default)('md-list-tile md-list-tile--icon md-list-tile--mini', {
                'md-list-tile--active': this.state.active && !this._touched
              }, tileClassName),
              onMouseOver: this._handleMouseOver,
              onMouseLeave: this._handleMouseLeave,
              onTouchStart: this._handleTouchStart,
              onTouchEnd: this._handleTouchEnd
            }),
            _react2.default.createElement(_TileAddon2.default, {
              active: active,
              activeClassName: activeClassName,
              icon: leftIcon,
              avatar: leftAvatar
            })
          )
        );
      }
    }]);

    return MiniListItem;
  }(_react.PureComponent);

  MiniListItem.propTypes = {
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    tileStyle: _react.PropTypes.object,
    tileClassName: _react.PropTypes.string,
    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
    active: _react.PropTypes.bool,
    activeClassName: _react.PropTypes.string,
    leftIcon: _react.PropTypes.node,
    leftAvatar: _react.PropTypes.node,
    disabled: _react.PropTypes.bool,
    onTouchStart: _react.PropTypes.func,
    onTouchEnd: _react.PropTypes.func,
    onMouseOver: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func
  };
  MiniListItem.defaultProps = {
    activeClassName: 'md-text--theme-primary',
    component: 'div'
  };
  exports.default = MiniListItem;
});