(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'classnames', 'react-swipeable-views', '../utils/getField', '../utils/PropTypes/controlled', '../utils/PropTypes/between', '../Papers/Paper', './TabPanel'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('classnames'), require('react-swipeable-views'), require('../utils/getField'), require('../utils/PropTypes/controlled'), require('../utils/PropTypes/between'), require('../Papers/Paper'), require('./TabPanel'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.classnames, global.reactSwipeableViews, global.getField, global.controlled, global.between, global.Paper, global.TabPanel);
    global.TabsContainer = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _classnames, _reactSwipeableViews, _getField, _controlled, _between, _Paper, _TabPanel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

  var _getField2 = _interopRequireDefault(_getField);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _between2 = _interopRequireDefault(_between);

  var _Paper2 = _interopRequireDefault(_Paper);

  var _TabPanel2 = _interopRequireDefault(_TabPanel);

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

  var TabsContainer = function (_PureComponent) {
    _inherits(TabsContainer, _PureComponent);

    function TabsContainer(props) {
      _classCallCheck(this, TabsContainer);

      var _this = _possibleConstructorReturn(this, (TabsContainer.__proto__ || Object.getPrototypeOf(TabsContainer)).call(this, props));

      _this.state = {};
      if (typeof props.activeTabIndex === 'undefined') {
        _this.state.activeTabIndex = props.defaultTabIndex;
      }

      _this._handleTabChange = _this._handleTabChange.bind(_this);
      _this._handleSwipeChange = _this._handleSwipeChange.bind(_this);
      return _this;
    }

    _createClass(TabsContainer, [{
      key: '_handleTabChange',
      value: function _handleTabChange(index, tabId, tabControlsId, tabChildren, event) {
        if (this.props.onTabChange) {
          this.props.onTabChange(index, tabId, tabControlsId, tabChildren, event);
        }

        if (typeof this.props.activeTabIndex === 'undefined') {
          this.setState({ activeTabIndex: index });
        }
      }
    }, {
      key: '_handleSwipeChange',
      value: function _handleSwipeChange(activeTabIndex) {
        this._handleTabChange(activeTabIndex);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var panelHeight = this.state.panelHeight;

        var _props = this.props,
            Component = _props.component,
            style = _props.style,
            className = _props.className,
            panelStyle = _props.panelStyle,
            panelClassName = _props.panelClassName,
            panelComponent = _props.panelComponent,
            headerStyle = _props.headerStyle,
            headerClassName = _props.headerClassName,
            slideStyle = _props.slideStyle,
            swipeableViewsStyle = _props.swipeableViewsStyle,
            swipeableViewsClassName = _props.swipeableViewsClassName,
            headerComponent = _props.headerComponent,
            headerZDepth = _props.headerZDepth,
            children = _props.children,
            colored = _props.colored,
            fixed = _props.fixed,
            labelAndIcon = _props.labelAndIcon,
            props = _objectWithoutProperties(_props, ['component', 'style', 'className', 'panelStyle', 'panelClassName', 'panelComponent', 'headerStyle', 'headerClassName', 'slideStyle', 'swipeableViewsStyle', 'swipeableViewsClassName', 'headerComponent', 'headerZDepth', 'children', 'colored', 'fixed', 'labelAndIcon']);

        delete props.toolbar;
        var toolbar = this.props.toolbar;


        var activeTabIndex = (0, _getField2.default)(this.props, this.state, 'activeTabIndex');

        var tabsEl = _react.Children.only(children);
        var tabId = tabsEl.props.tabId;
        var content = _react.Children.map(tabsEl.props.children, function (tab, index) {
          if (!tab) {
            return tab;
          }

          return _react2.default.createElement(
            _TabPanel2.default,
            {
              id: tab.props.controlsId || tabId + '-panel-' + index,
              active: activeTabIndex === index,
              style: panelStyle,
              className: panelClassName,
              component: panelComponent,
              controlledById: tab.props.id || tabId + '-' + index
            },
            tab.props.children
          );
        });

        var childrenProps = _react.Children.only(children).props;
        var tabs = (0, _react.cloneElement)(children, {
          colored: typeof childrenProps.colored !== 'undefined' ? childrenProps.colored : colored,
          onTabChange: this._handleTabChange,
          activeTabIndex: activeTabIndex
        });

        var prominentToolbar = false;
        if (toolbar) {
          var toolbarProps = _react.Children.only(toolbar).props;
          toolbar = (0, _react.cloneElement)(toolbar, {
            component: toolbarProps.component || 'div',
            colored: typeof toolbarProps.colored !== 'undefined' ? childrenProps.colored : colored
          });

          prominentToolbar = toolbarProps.prominent || toolbarProps.prominentTitle;
        }

        var header = void 0;
        if (fixed) {
          header = _react2.default.createElement(
            _Paper2.default,
            {
              style: headerStyle,
              className: (0, _classnames2.default)('md-tabs-fixed-container', headerClassName),
              zDepth: headerZDepth,
              component: headerComponent
            },
            toolbar,
            tabs
          );
        }

        return _react2.default.createElement(
          Component,
          {
            style: style,
            className: (0, _classnames2.default)('md-tabs-container', className),
            ref: function ref(container) {
              if (container) {
                var activePanel = (0, _reactDom.findDOMNode)(container).querySelector('.md-tab-panel[aria-hidden=false]');
                if (activePanel && _this2.state.panelHeight !== activePanel.offsetHeight) {
                  _this2.setState({ panelHeight: activePanel.offsetHeight });
                }
              }
            }
          },
          header,
          header ? null : toolbar,
          header ? null : tabs,
          _react2.default.createElement(
            _reactSwipeableViews2.default,
            {
              style: swipeableViewsStyle,
              className: (0, _classnames2.default)('md-tabs-content', {
                'md-tabs-content--offset': fixed,
                'md-tabs-content--offset-icon': fixed && labelAndIcon,
                'md-tabs-content--offset-toolbar': fixed && toolbar,
                'md-tabs-content--offset-toolbar-prominent': fixed && toolbar && prominentToolbar,
                'md-tabs-content--offset-toolbar-icon': fixed && toolbar && labelAndIcon,
                'md-tabs-content--offset-toolbar-prominent-icon': fixed && toolbar && labelAndIcon && prominentToolbar
              }, swipeableViewsClassName),
              slideStyle: _extends({ height: panelHeight }, slideStyle),
              index: activeTabIndex,
              onChangeIndex: this._handleSwipeChange
            },
            content
          )
        );
      }
    }]);

    return TabsContainer;
  }(_react.PureComponent);

  TabsContainer.propTypes = {
    /**
     * An optional style to apply to the container.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the container.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to each `TabPanel` that gets generated. Each tab's children
     * will get wrapped in a `TabPanel` component.
     */
    panelStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to each each `TabPanel` that gets generated. Each tab's
     * children will get wrapped in a `TabPanel` component.
     */
    panelClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the header component when the tabs are fixed to the top of the page.
     * The optional toolbar and tabs get wrapped in a `Paper` component.
     */
    headerStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the header component when the tabs are fixed to the top of the page.
     * The optional toolbar and tabs get wrapped in a `Paper` component.
     */
    headerClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the `SwipeableViews`.
     *
     * @see https://github.com/oliviertassinari/react-swipeable-views#user-content-swipeableviews-
     */
    swipeableViewsStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the `SwipeableViews` container.
     */
    swipeableViewsClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to each slide component.
     *
     * @see https://github.com/oliviertassinari/react-swipeable-views#user-content-swipeableviews-
     */
    slideStyle: _react.PropTypes.object,

    /**
     * This should be a `Tabs` component with children of `Tab`. This is used to figure out which
     * tab's content is currently visible.
     */
    children: _react.PropTypes.element.isRequired,

    /**
     * The component to render the container as.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,

    /**
     * The component to render each `TabPanel` as.
     */
    panelComponent: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),

    /**
     * An optional toolbar to render above the tabs.
     */
    toolbar: _react.PropTypes.element,

    /**
     * An optional active tab index to use. If this is defined, the component will be controlled
     * and require the `onTabChange` prop to be defined.
     */
    activeTabIndex: (0, _controlled2.default)(_react.PropTypes.number, 'onTabChange', 'defaultTabIndex'),

    /**
     * An optional function to call when a new tab is seleced by swiping or clicking a tab. When
     * a new tab has been clicked, the callback will include the active tab index, the tab's `id`,
     * the tab's `controlsId`, the tab's `children`, and the click event.
     *
     * If the tab was changed by swiping, it will only contain the new active tab index.
     *
     * ```js
     * onTabChange(newActiveTabIndex, tabId, tabControlsId, tabChildren, event);
     * ```
     */
    onTabChange: _react.PropTypes.func,

    /**
     * The default tab index to use when the component is uncontrolled.
     */
    defaultTabIndex: _react.PropTypes.number.isRequired,

    /**
     * Boolean if the `toolbar` and `Tabs` should be cloned with `colored: true`.
     */
    colored: _react.PropTypes.bool,

    /**
     * Boolean if the tabs and the optional toolbar should be fixed to the top of the page.
     */
    fixed: _react.PropTypes.bool,

    /**
     * A boolean if a `fixed` `TabsContainer` has tabs with a label and an icon.
     */
    labelAndIcon: _react.PropTypes.bool,

    /**
     * An optional component to render the fixed tabs header as.
     */
    headerComponent: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),

    /**
     * The zDepth for the fixed tabs header.
     */
    headerZDepth: (0, _between2.default)(_react.PropTypes.number, 0, 5)
  };
  TabsContainer.defaultProps = {
    component: 'section',
    defaultTabIndex: 0,
    headerZDepth: 1
  };
  exports.default = TabsContainer;
});