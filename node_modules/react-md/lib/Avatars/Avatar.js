(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../utils/PropTypes/oneRequiredForA11yIf'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../utils/PropTypes/oneRequiredForA11yIf'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.oneRequiredForA11yIf);
    global.Avatar = mod.exports;
  }
})(this, function (exports, _react, _classnames, _oneRequiredForA11yIf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _oneRequiredForA11yIf2 = _interopRequireDefault(_oneRequiredForA11yIf);

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

  var Avatar = function (_PureComponent) {
    _inherits(Avatar, _PureComponent);

    function Avatar(props) {
      _classCallCheck(this, Avatar);

      var _this = _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));

      _this.state = { color: null };

      _this._setRandomColor = _this._setRandomColor.bind(_this);
      return _this;
    }

    _createClass(Avatar, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (this.props.random) {
          this._setRandomColor();
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.random && (this.props.src !== nextProps.src || this.props.icon !== nextProps.icon)) {
          this._setRandomColor();
        } else if (this.props.random && !nextProps.random) {
          this.setState({ color: null });
        }
      }
    }, {
      key: '_setRandomColor',
      value: function _setRandomColor() {
        var suffixes = this.props.suffixes;


        var i = Math.floor(Math.random() * (suffixes.length - 1)) + 1;
        this.setState({ color: suffixes[i] });
      }
    }, {
      key: '_getColor',
      value: function _getColor(suffix, suffixes, color) {
        if (suffix) {
          return 'md-avatar--' + suffix;
        } else if (!!suffixes && !color) {
          return 'md-avatar--default';
        }

        return 'md-avatar--' + color;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            src = _props.src,
            alt = _props.alt,
            icon = _props.icon,
            children = _props.children,
            suffix = _props.suffix,
            suffixes = _props.suffixes,
            iconSized = _props.iconSized,
            role = _props.role,
            props = _objectWithoutProperties(_props, ['className', 'src', 'alt', 'icon', 'children', 'suffix', 'suffixes', 'iconSized', 'role']);

        delete props.random;

        return _react2.default.createElement(
          'div',
          _extends({}, props, {
            className: (0, _classnames2.default)('md-inline-block md-avatar', this._getColor(suffix, suffixes, this.state.color), {
              'md-avatar--icon-sized': iconSized
            }, className)
          }),
          src && _react2.default.createElement('img', { src: src, alt: alt, role: role, className: 'md-avatar-img' }),
          !src && _react2.default.createElement(
            'div',
            { className: 'md-avatar-content' },
            icon || children
          )
        );
      }
    }]);

    return Avatar;
  }(_react.PureComponent);

  Avatar.propTypes = {
    /**
     * An optional className to apply to the avatar.
     */
    className: _react.PropTypes.string,

    /**
     * An optional image source to use for the avatar.
     */
    src: _react.PropTypes.string,

    /**
     * An optional image alt to use for the avatar if it is
     * an image.
     */
    alt: _react.PropTypes.string,

    /**
     * An optional `FontIcon` to convert into an avatar.
     */
    icon: _react.PropTypes.node,

    /**
     * An optional letter to display in the avatar.
     */
    children: _react.PropTypes.node,

    /**
     * A boolean if a random color should be applied to the avatar.
     * This will be one of the `suffixes`.
     */
    random: _react.PropTypes.bool,

    /**
     * A list of available suffixes to use when generating a random
     * color for the avatar.
     */
    suffixes: _react.PropTypes.arrayOf(_react.PropTypes.string),

    /**
     * The suffix to use for a color. This can be any value but
     * *should* be one of the available `suffixes`.
     */
    suffix: _react.PropTypes.string,

    /**
     * Boolean if the `Avatar` should be sized to a `FontIcon` size. This
     * will just set the width and height to the `$md-font-icon-size`.
     */
    iconSized: _react.PropTypes.bool,

    /**
     * A role for the avatar's image. When the `src` prop is set, either a `role` of `presentation`
     * or the `alt` prop must be defined for a11y.
     */
    role: (0, _oneRequiredForA11yIf2.default)(_react.PropTypes.oneOf(['presentation']), 'src', 'alt')
  };
  Avatar.defaultProps = {
    suffixes: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']
  };
  exports.default = Avatar;
});