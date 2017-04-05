(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../utils/PropTypes/oneRequired', '../Helpers/AccessibleFakeInkedButton'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../utils/PropTypes/oneRequired'), require('../Helpers/AccessibleFakeInkedButton'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.oneRequired, global.AccessibleFakeInkedButton);
    global.Tab = mod.exports;
  }
})(this, function (exports, _react, _classnames, _oneRequired, _AccessibleFakeInkedButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _oneRequired2 = _interopRequireDefault(_oneRequired);

  var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

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

  var Tab = function (_PureComponent) {
    _inherits(Tab, _PureComponent);

    function Tab(props) {
      _classCallCheck(this, Tab);

      var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));

      _this._handleClick = _this._handleClick.bind(_this);
      return _this;
    }

    _createClass(Tab, [{
      key: '_handleClick',
      value: function _handleClick(e) {
        if (this.props.onClick) {
          this.props.onClick(this.props.index, this.props.id, this.props.controlsId, this.props.children, e);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            id = _props.id,
            controlsId = _props.controlsId,
            className = _props.className,
            active = _props.active,
            props = _objectWithoutProperties(_props, ['id', 'controlsId', 'className', 'active']);

        delete props.index;
        delete props.icon;
        delete props.label;

        var _props2 = this.props,
            icon = _props2.icon,
            label = _props2.label;

        if (icon) {
          var iconEl = _react.Children.only(icon);
          icon = (0, _react.cloneElement)(icon, {
            className: (0, _classnames2.default)('md-icon--tab', iconEl.props.className)
          });
        }

        if ((0, _react.isValidElement)(label)) {
          var labelEl = _react.Children.only(label);
          label = (0, _react.cloneElement)(label, {
            className: (0, _classnames2.default)('md-tab-label', labelEl.props.className)
          });
        } else {
          label = _react2.default.createElement(
            'div',
            { className: 'md-tab-label' },
            label
          );
        }
        return _react2.default.createElement(
          _AccessibleFakeInkedButton2.default,
          _extends({}, props, {
            id: id,
            role: 'tab',
            onClick: this._handleClick,
            className: (0, _classnames2.default)('md-tab', {
              'md-tab--active': active,
              'md-tab--inactive': !active,
              'md-tab--icon': label && icon
            }, className),
            'aria-controls': controlsId,
            'aria-selected': active
          }),
          icon,
          label
        );
      }
    }]);

    return Tab;
  }(_react.PureComponent);

  Tab.propTypes = {
    /**
     * An id for the tab. This is required for a11y. If you use the `Tabs` component, this
     * will automatically be generated for you and injected into this component.
     */
    id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * An id for a `TabPanel` that holds the children from this tab. This is required for a11y.
     * If you use the `Tabs` component, this will automatically be generated for you and injected
     * into this component.
     */
    controlsId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * The component to render as.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,

    /**
     * Any children to display once the tab has been selected.
     */
    children: _react.PropTypes.node,

    /**
     * An optional icon to display in the tab. This can either be used alone, or it
     * will be placed above the `label` if both are given.
     */
    icon: _react.PropTypes.element,

    /**
     * An optional label to display in the tab. This can either be used alone, or it
     * will be placed below the `icon` if both are given.
     */
    label: (0, _oneRequired2.default)(_react.PropTypes.node, 'icon'),

    /**
     * An optional function to call when the tab is clicked. The callback includes this tab's index,
     * id, controlsId, children, and finally click event. All the additional parameters are included
     * if you are not using the `TabsContainer` component. The `id` and `controlsId` are mainly passed
     * for accessibility.
     *
     * ```js
     * onClick(index, id, controlsId, children, event);
     * ```
     */
    onClick: _react.PropTypes.func,

    /**
     * Boolean if the tab is currently active. If you use the `Tabs` component, this is automatically
     * injected.
     */
    active: _react.PropTypes.bool,

    /**
     * Boolean if the tab is currently active. If you use the `Tabs` component, this is automatically
     * injected.
     */
    index: _react.PropTypes.number
  };
  Tab.defaultProps = {
    component: 'li'
  };
  exports.default = Tab;
});