(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', 'react-prop-types/lib/deprecated', './CardTitleBlock', './CardExpander'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('react-prop-types/lib/deprecated'), require('./CardTitleBlock'), require('./CardExpander'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.deprecated, global.CardTitleBlock, global.CardExpander);
    global.CardTitle = mod.exports;
  }
})(this, function (exports, _react, _classnames, _deprecated, _CardTitleBlock, _CardExpander) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _CardTitleBlock2 = _interopRequireDefault(_CardTitleBlock);

  var _CardExpander2 = _interopRequireDefault(_CardExpander);

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

  var CardTitle = function (_Component) {
    _inherits(CardTitle, _Component);

    function CardTitle() {
      _classCallCheck(this, CardTitle);

      return _possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
    }

    _createClass(CardTitle, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            id = _props.id,
            style = _props.style,
            className = _props.className,
            title = _props.title,
            subtitle = _props.subtitle,
            expander = _props.expander,
            isExpander = _props.isExpander,
            children = _props.children,
            props = _objectWithoutProperties(_props, ['id', 'style', 'className', 'title', 'subtitle', 'expander', 'isExpander', 'children']);

        delete props.avatar;
        var avatar = this.props.avatar;

        if (avatar) {
          var avatarClassName = _react.Children.only(avatar).props.className;

          avatar = (0, _react.cloneElement)(avatar, {
            className: (0, _classnames2.default)('md-avatar--card', avatarClassName)
          });
        }
        return _react2.default.createElement(
          'div',
          _extends({}, props, {
            style: style,
            className: (0, _classnames2.default)('md-card-title', {
              'md-card-title--primary': !avatar
            }, className)
          }),
          avatar,
          _react2.default.createElement(_CardTitleBlock2.default, { id: id, title: title, subtitle: subtitle, avatar: !!avatar }),
          children,
          isExpander || expander && _react2.default.createElement(_CardExpander2.default, null)
        );
      }
    }]);

    return CardTitle;
  }(_react.Component);

  CardTitle.propTypes = {
    /**
     * An optional id to add to the `title`.
     */
    id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * The title to display.
     */
    title: _react.PropTypes.node.isRequired,

    /**
     * An optional subtitle to display.
     */
    subtitle: _react.PropTypes.node,

    /**
     * Any additional children to display in the title block
     * after the avatar, title, and subtitle.
     */
    children: _react.PropTypes.node,

    /**
     * An optional avatar to display before the title and subtitle.
     */
    avatar: _react.PropTypes.element,

    /**
     * Boolean if the `CardTitle` component should inject a button
     * for expanding all children below it.
     */
    expander: _react.PropTypes.bool,

    isExpander: (0, _deprecated2.default)(_react.PropTypes.bool, 'Use `expander` instead')
  };
  exports.default = CardTitle;
});