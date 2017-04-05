(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../Helpers/AccessibleFakeInkedButton', '../Helpers/Collapse', '../FontIcons'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../Helpers/AccessibleFakeInkedButton'), require('../Helpers/Collapse'), require('../FontIcons'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.AccessibleFakeInkedButton, global.Collapse, global.FontIcons);
    global.BottomNav = mod.exports;
  }
})(this, function (exports, _react, _classnames, _AccessibleFakeInkedButton, _Collapse, _FontIcons) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

  var _Collapse2 = _interopRequireDefault(_Collapse);

  var _FontIcons2 = _interopRequireDefault(_FontIcons);

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

  var BottomNav = function (_PureComponent) {
    _inherits(BottomNav, _PureComponent);

    function BottomNav(props) {
      _classCallCheck(this, BottomNav);

      var _this = _possibleConstructorReturn(this, (BottomNav.__proto__ || Object.getPrototypeOf(BottomNav)).call(this, props));

      _this.state = {};
      _this._handleClick = _this._handleClick.bind(_this);
      return _this;
    }

    _createClass(BottomNav, [{
      key: '_handleClick',
      value: function _handleClick(e) {
        var _props = this.props,
            onClick = _props.onClick,
            onNavChange = _props.onNavChange,
            index = _props.index;

        if (onClick) {
          onClick(index, e);
        }

        if (onNavChange) {
          onNavChange(index, e);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            active = _props2.active,
            fixed = _props2.fixed,
            className = _props2.className,
            iconClassName = _props2.iconClassName,
            iconChildren = _props2.iconChildren,
            colored = _props2.colored,
            props = _objectWithoutProperties(_props2, ['active', 'fixed', 'className', 'iconClassName', 'iconChildren', 'colored']);

        delete props.index;
        delete props.label;
        delete props.onClick;
        delete props.onNavChange;

        var label = this.props.label;

        var labelClassName = (0, _classnames2.default)('md-bottom-nav-label', { 'md-bottom-nav-label--shifting-inactive': !active && !fixed });
        if (_react.Children.count(label) === 1 && (0, _react.isValidElement)(label)) {
          var labelEl = _react.Children.only(label);
          label = (0, _react.cloneElement)(label, {
            className: (0, _classnames2.default)(labelClassName, labelEl.props.className)
          });
        } else {
          label = _react2.default.createElement(
            'div',
            { className: labelClassName },
            label
          );
        }

        return _react2.default.createElement(
          _AccessibleFakeInkedButton2.default,
          _extends({}, props, {
            onClick: this._handleClick,
            className: (0, _classnames2.default)('md-bottom-nav', {
              'md-bottom-nav--active': active,
              'md-bottom-nav--fixed': fixed,
              'md-bottom-nav--shifting': !fixed,
              'md-bottom-nav--shifting-active': !fixed && active,
              'md-bottom-nav--shifting-inactive': !fixed && !active,
              'md-text': !active && !colored,
              'md-text--theme-primary': active && !colored
            }, className)
          }),
          _react2.default.createElement(
            _FontIcons2.default,
            { iconClassName: iconClassName, className: 'md-icon--inherit' },
            iconChildren
          ),
          _react2.default.createElement(
            _Collapse2.default,
            { collapsed: !fixed && !active },
            label
          )
        );
      }
    }]);

    return BottomNav;
  }(_react.PureComponent);

  BottomNav.propTypes = {
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
    active: _react.PropTypes.bool,
    fixed: _react.PropTypes.bool,
    children: _react.PropTypes.node,
    index: _react.PropTypes.number.isRequired,
    label: _react.PropTypes.node.isRequired,
    colored: _react.PropTypes.bool,
    iconChildren: _react.PropTypes.node,
    iconClassName: _react.PropTypes.string,
    onClick: _react.PropTypes.func,
    onNavChange: _react.PropTypes.func,
    role: _react.PropTypes.string
  };
  BottomNav.defaultProps = {
    component: 'a',
    role: null
  };
  exports.default = BottomNav;
});