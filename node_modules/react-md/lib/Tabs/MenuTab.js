(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', 'react-prop-types/lib/isRequiredForA11y', '../Menus/Menu', '../Helpers/AccessibleFakeInkedButton', '../utils/mapToListParts'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('react-prop-types/lib/isRequiredForA11y'), require('../Menus/Menu'), require('../Helpers/AccessibleFakeInkedButton'), require('../utils/mapToListParts'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.isRequiredForA11y, global.Menu, global.AccessibleFakeInkedButton, global.mapToListParts);
    global.MenuTab = mod.exports;
  }
})(this, function (exports, _react, _classnames, _isRequiredForA11y, _Menu, _AccessibleFakeInkedButton, _mapToListParts) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _Menu2 = _interopRequireDefault(_Menu);

  var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

  var _mapToListParts2 = _interopRequireDefault(_mapToListParts);

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

  var MenuTab = function (_PureComponent) {
    _inherits(MenuTab, _PureComponent);

    function MenuTab(props) {
      _classCallCheck(this, MenuTab);

      var _this = _possibleConstructorReturn(this, (MenuTab.__proto__ || Object.getPrototypeOf(MenuTab)).call(this, props));

      _this.state = { isOpen: false };
      _this._toggleOpen = _this._toggleOpen.bind(_this);
      _this._handleClose = _this._handleClose.bind(_this);
      return _this;
    }

    _createClass(MenuTab, [{
      key: '_toggleOpen',
      value: function _toggleOpen(e) {
        if (this.props.onClick) {
          this.props.onClick(e);
        }

        this.setState({ isOpen: !this.state.isOpen });
      }
    }, {
      key: '_handleClose',
      value: function _handleClose() {
        this.setState({ isOpen: false });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            id = _props.id,
            style = _props.style,
            className = _props.className,
            tabStyle = _props.tabStyle,
            tabClassName = _props.tabClassName,
            tabs = _props.tabs,
            label = _props.label,
            activeTabIndex = _props.activeTabIndex,
            overflowAtIndex = _props.overflowAtIndex,
            props = _objectWithoutProperties(_props, ['id', 'style', 'className', 'tabStyle', 'tabClassName', 'tabs', 'label', 'activeTabIndex', 'overflowAtIndex']);

        var active = activeTabIndex >= overflowAtIndex;

        var tab = _react2.default.createElement(
          _AccessibleFakeInkedButton2.default,
          _extends({}, props, {
            onClick: this._toggleOpen,
            style: tabStyle,
            className: (0, _classnames2.default)('md-tab md-tab--menu', tabClassName)
          }),
          label
        );

        return _react2.default.createElement(
          _Menu2.default,
          {
            id: id,
            style: style,
            className: (0, _classnames2.default)('md-menu--tab', {
              'md-tab--active': active,
              'md-tab--inactive': !active
            }, className),
            toggle: tab,
            isOpen: this.state.isOpen,
            onClose: this._handleClose
          },
          tabs.map(_mapToListParts2.default)
        );
      }
    }]);

    return MenuTab;
  }(_react.PureComponent);

  MenuTab.propTypes = {
    /**
     * An id to give the tab's menu.
     */
    id: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])),

    /**
     * The current active tab index. This is used to determine which list item
     * is active in the menu, and if the styles for an active tab should be applied
     * to the menu.
     */
    activeTabIndex: _react.PropTypes.number.isRequired,

    /**
     * An tab index that caused the overflow to happen.
     */
    overflowAtIndex: _react.PropTypes.number.isRequired,

    /**
     * A list of tabs that should be rendered in the menu once opened. This can either
     * be:
     *
     * - a `ListItem`, `Divider`, or `Subheader` component
     * - a string to use as the `primaryText` for a list item
     * - an object that defines props to generate a `ListItem`, `Divider`, or `Subheader` component
     */
    tabs: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string, _react.PropTypes.shape({
      divider: _react.PropTypes.bool,
      subheader: _react.PropTypes.bool,
      primaryText: _react.PropTypes.string
    })])).isRequired,

    /**
     * An optional style to apply to the menu.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the menu.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to the tab in the menu.
     */
    tabStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the tab in the menu.
     */
    tabClassName: _react.PropTypes.string,

    /**
     * An optional function to call when the tab is clicked.
     */
    onClick: _react.PropTypes.func,

    /**
     * The label to display in the tab. This should normally be some text with
     * a drop down arrow next to it.
     */
    label: _react.PropTypes.node.isRequired
  };
  exports.default = MenuTab;
});