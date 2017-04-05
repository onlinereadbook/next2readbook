(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', 'react-prop-types/lib/deprecated', '../FontIcons/FontIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('react-prop-types/lib/deprecated'), require('../FontIcons/FontIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.deprecated, global.FontIcon);
    global.Chip = mod.exports;
  }
})(this, function (exports, _react, _classnames, _deprecated, _FontIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _FontIcon2 = _interopRequireDefault(_FontIcon);

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

  var Chip = function (_PureComponent) {
    _inherits(Chip, _PureComponent);

    function Chip(props) {
      _classCallCheck(this, Chip);

      var _this = _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).call(this, props));

      _this.state = { hover: false };
      _this._handleMouseOver = _this._handleMouseOver.bind(_this);
      _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
      return _this;
    }

    _createClass(Chip, [{
      key: '_handleMouseOver',
      value: function _handleMouseOver(e) {
        if (this.props.onMouseOver) {
          this.props.onMouseOver(e);
        }

        this.setState({ hover: true });
      }
    }, {
      key: '_handleMouseLeave',
      value: function _handleMouseLeave(e) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e);
        }

        this.setState({ hover: false });
      }
    }, {
      key: 'render',
      value: function render() {
        var hover = this.state.hover;

        var _props = this.props,
            label = _props.label,
            className = _props.className,
            iconClassName = _props.iconClassName,
            avatar = _props.avatar,
            children = _props.children,
            removable = _props.removable,
            remove = _props.remove,
            onClick = _props.onClick,
            rotateIcon = _props.rotateIcon,
            props = _objectWithoutProperties(_props, ['label', 'className', 'iconClassName', 'avatar', 'children', 'removable', 'remove', 'onClick', 'rotateIcon']);

        delete props.removeIconChildren;
        delete props.removeIconClassName;

        var icon = void 0;
        if (removable || remove) {
          icon = _react2.default.createElement(
            _FontIcon2.default,
            {
              className: (0, _classnames2.default)('md-chip-icon', {
                'md-chip-icon--rotate': rotateIcon,
                'md-chip-text--hover': hover
              }),
              iconClassName: iconClassName
            },
            children
          );
        }

        return _react2.default.createElement(
          'button',
          _extends({
            type: 'button'
          }, props, {
            className: (0, _classnames2.default)('md-chip', {
              'md-chip--avatar': avatar,
              'md-chip--remove': removable,
              'md-chip--hover': hover
            }, className),
            onClick: remove || onClick,
            onMouseOver: this._handleMouseOver,
            onMouseLeave: this._handleMouseLeave
          }),
          avatar,
          _react2.default.createElement(
            'span',
            {
              className: (0, _classnames2.default)('md-chip-text', {
                'md-chip-text--hover': hover
              })
            },
            label
          ),
          icon
        );
      }
    }]);

    return Chip;
  }(_react.PureComponent);

  Chip.propTypes = {
    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * An optional icon className to use for the remove icon when `removable`.
     */
    iconClassName: _react.PropTypes.string,

    /**
     * Boolean if the `.md-chip-icon--rotate` style should be applied to the remove icon.
     * The `.md-chip-icon--rotate` just rotates the icon 45 degrees.
     */
    rotateIcon: _react.PropTypes.bool,

    /**
     * Any children used to display the remove icon when `removable`.
     */
    children: _react.PropTypes.node,

    /**
     * The label to display on the chip.
     */
    label: _react.PropTypes.string.isRequired,

    /**
     * Boolean if the chip is removable.
     */
    removable: _react.PropTypes.bool,

    /**
     * An optional avatar to display on the chip.
     */
    avatar: _react.PropTypes.element,

    /**
     * An optional function to call when the `click` event is triggered.
     */
    onClick: _react.PropTypes.func,

    /**
     * An optional function to call when the `mouseover` event is triggered.
     */
    onMouseOver: _react.PropTypes.func,

    /**
     * An optional function to call when the `mouseleave` event is triggered.
     */
    onMouseLeave: _react.PropTypes.func,
    remove: (0, _deprecated2.default)(_react.PropTypes.func, 'Use `removable` and `onClick` instead'),
    removeIconChildren: (0, _deprecated2.default)(_react.PropTypes.node, 'Use `iconChildren` instead'),
    removeIconClassName: (0, _deprecated2.default)(_react.PropTypes.string, 'Use `iconClassName` instead')
  };
  Chip.defaultProps = {
    rotateIcon: true,
    children: 'add_circle'
  };
  exports.default = Chip;
});