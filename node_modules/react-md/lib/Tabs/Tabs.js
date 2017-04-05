(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'classnames', 'react-prop-types/lib/isRequiredForA11y', '../constants/media', '../utils/getField', '../utils/PropTypes/controlled', './TabIndicator', '../Helpers/IconSeparator', '../FontIcons/FontIcon', './MenuTab', './TabOverflowButton'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('classnames'), require('react-prop-types/lib/isRequiredForA11y'), require('../constants/media'), require('../utils/getField'), require('../utils/PropTypes/controlled'), require('./TabIndicator'), require('../Helpers/IconSeparator'), require('../FontIcons/FontIcon'), require('./MenuTab'), require('./TabOverflowButton'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.classnames, global.isRequiredForA11y, global.media, global.getField, global.controlled, global.TabIndicator, global.IconSeparator, global.FontIcon, global.MenuTab, global.TabOverflowButton);
    global.Tabs = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _classnames, _isRequiredForA11y, _media, _getField, _controlled, _TabIndicator, _IconSeparator, _FontIcon, _MenuTab, _TabOverflowButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _getField2 = _interopRequireDefault(_getField);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _TabIndicator2 = _interopRequireDefault(_TabIndicator);

  var _IconSeparator2 = _interopRequireDefault(_IconSeparator);

  var _FontIcon2 = _interopRequireDefault(_FontIcon);

  var _MenuTab2 = _interopRequireDefault(_MenuTab);

  var _TabOverflowButton2 = _interopRequireDefault(_TabOverflowButton);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
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

  var MOBILE_PADDING = 72;
  var DESKTOP_PADDING = 80;
  var MOBILE_TAB_MIN_WIDTH = 72;
  var DESKTOP_TAB_MIN_WIDTH = 160;

  /**
   * The `Tabs` component is used to manage the state of which tab is currently active.
   */

  var Tabs = function (_PureComponent) {
    _inherits(Tabs, _PureComponent);

    function Tabs(props) {
      _classCallCheck(this, Tabs);

      var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

      var defaultTabIndex = typeof props.activeTabIndex === 'undefined' ? props.defaultTabIndex : props.activeTabIndex;
      var mobile = typeof window !== 'undefined' ? _this._isMobile(props) : props.defaultMedia !== 'desktop';
      var indicatorWidth = mobile ? MOBILE_TAB_MIN_WIDTH : DESKTOP_TAB_MIN_WIDTH;
      _this.state = {
        indicatorWidth: indicatorWidth,
        indicatorOffset: indicatorWidth * defaultTabIndex,
        indicatorVisible: true,
        overflowIndex: 0
      };

      if (typeof props.activeTabIndex === 'undefined') {
        _this.state.activeTabIndex = defaultTabIndex;
      }

      _this._setContainer = _this._setContainer.bind(_this);
      _this._positionElements = _this._positionElements.bind(_this);
      _this._scrollActiveIntoView = _this._scrollActiveIntoView.bind(_this);
      _this._handleTabChange = _this._handleTabChange.bind(_this);
      _this._nextIndexes = _this._nextIndexes.bind(_this);
      _this._showNextTabs = _this._showNextTabs.bind(_this);
      _this._showPreviousTabs = _this._showPreviousTabs.bind(_this);
      _this._mapToOverflowTabProps = _this._mapToOverflowTabProps.bind(_this);
      return _this;
    }

    _createClass(Tabs, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('resize', this._positionElements);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.activeTabIndex !== nextProps.activeTabIndex) {
          this.setState(_extends({}, this._calcIndicatorPosition(this._container, 0, nextProps.activeTabIndex, this.state.overflowAtIndex)), this._scrollActiveIntoView);
        } else if (!this._shouldAlign(nextProps) && this._shouldAlign(this.props)) {
          this.setState({ paddingLeft: null });
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var _this2 = this;

        if (this._shouldAlign(this.props) && this.state.overflowAtIndex !== prevState.overflowAtIndex) {
          var paddingLeft = this._calcPaddingLeft(this._container, this.state.mobile);
          // Have to wait for the overflow menus to appear, then wop
          /* eslint-disable react/no-did-update-set-state */
          this.setState({ paddingLeft: paddingLeft });
        } else {
          (function () {
            var labels = _react.Children.map(_react.Children.toArray(_this2.props.children), function (_ref) {
              var label = _ref.props.label;
              return label;
            });
            var prevLabels = _react.Children.map(_react.Children.toArray(prevProps.children), function (_ref2) {
              var label = _ref2.props.label;
              return label;
            });
            if (labels.length !== prevLabels.length || labels.filter(function (_, i) {
              return labels[i] !== prevLabels[i];
            }).length) {
              _this2.setState(_extends({}, _this2._calcIndicatorPosition(_this2._container, 0, _this2.props.activeTabIndex, _this2.state.overflowAtIndex)), _this2._scrollActiveIntoView);
            }
          })();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this._positionElements);
      }
    }, {
      key: '_shouldAlign',
      value: function _shouldAlign(props) {
        return typeof props.alignToKeyline === 'boolean' ? props.alignToKeyline : _react.Children.toArray(props.children).filter(function (child) {
          return !!child;
        }).length > 3;
      }
    }, {
      key: '_isMobile',
      value: function _isMobile(props) {
        var min = props.desktopMinWidth;

        return typeof window !== 'undefined' && !window.matchMedia('screen and (min-width: ' + min + 'px)').matches;
      }
    }, {
      key: '_calcPaddingLeft',
      value: function _calcPaddingLeft(container, mobile) {
        var mediaPadding = mobile ? MOBILE_PADDING : DESKTOP_PADDING;
        var tab = container.querySelector('.md-tab');

        var _tab$querySelector = tab.querySelector('.md-tab-label'),
            labelOffset = _tab$querySelector.offsetLeft;

        return mediaPadding - labelOffset;
      }
    }, {
      key: '_calcOverflowIndex',
      value: function _calcOverflowIndex(container) {
        var paddingLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var menu = arguments[2];

        var containerWidth = container.offsetWidth;
        var overflowIndex = 0;
        if (containerWidth < container.scrollWidth) {
          (function () {
            var tabs = Array.prototype.slice.call(container.querySelectorAll('.md-tab'));
            var totalWidth = 0;
            tabs.some(function (tab, i) {
              overflowIndex = i;
              totalWidth += tab.offsetWidth;

              return totalWidth > containerWidth;
            });
          })();
        }

        return Math.max(0, overflowIndex - (menu ? 1 : 0));
      }
    }, {
      key: '_calcIndicatorPosition',
      value: function _calcIndicatorPosition(container) {
        var paddingLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var activeTabIndex = arguments[2];
        var overflowAtIndex = arguments[3];

        var activeItem = void 0;
        if (typeof activeTabIndex === 'number') {
          if (overflowAtIndex > 0 && activeTabIndex >= overflowAtIndex) {
            activeItem = container.querySelector('.md-menu--tab');
          } else {
            activeItem = container.querySelectorAll('.md-tab')[activeTabIndex];
          }
        } else {
          activeItem = container.querySelector('.md-tab--active');
        }

        if (!activeItem) {
          return { indicatorVisible: false };
        }

        var _activeItem = activeItem,
            indicatorWidth = _activeItem.offsetWidth,
            indicatorOffset = _activeItem.offsetLeft;

        return {
          indicatorWidth: indicatorWidth,
          indicatorOffset: indicatorOffset + paddingLeft,
          indicatorVisible: !overflowAtIndex || overflowAtIndex > activeTabIndex
        };
      }
    }, {
      key: '_setContainer',
      value: function _setContainer(container) {
        this._container = (0, _reactDom.findDOMNode)(container);
        this._positionElements(this._container !== null);
      }
    }, {
      key: '_positionElements',
      value: function _positionElements(initialRender) {
        initialRender = typeof initialRender === 'boolean' && initialRender;
        if (!this._container) {
          return;
        }

        var _props = this.props,
            centered = _props.centered,
            overflowMenu = _props.overflowMenu;

        var mobile = this._isMobile(this.props);

        var paddingLeft = void 0;
        if (!centered && this._shouldAlign(this.props)) {
          paddingLeft = this._calcPaddingLeft(this._container, mobile);
        }

        var overflowAtIndex = void 0;
        if (!mobile) {
          overflowAtIndex = this._calcOverflowIndex(this._container, paddingLeft, overflowMenu);
        }

        var indicatorPosition = this._calcIndicatorPosition(this._container, initialRender ? paddingLeft : 0);

        this.setState(_extends({ mobile: mobile, paddingLeft: paddingLeft, overflowAtIndex: overflowAtIndex }, indicatorPosition), this._scrollActiveIntoView);
      }
    }, {
      key: '_scrollActiveIntoView',
      value: function _scrollActiveIntoView() {
        var _this3 = this;

        if (!this._container || !this.state.mobile) {
          return;
        }

        var active = this._container.querySelector('.md-tab--active');
        if (!active) {
          return;
        }

        var allTabs = Array.prototype.slice.call(this._container.querySelectorAll('.md-tab'));
        if (allTabs[0] === active) {
          this._container.scrollLeft = 0;
          return;
        }

        var _container = this._container,
            containerWidth = _container.offsetWidth,
            scrollLeft = _container.scrollLeft;
        var activeWidth = active.offsetWidth,
            activeOffset = active.offsetLeft;

        var inFullViewLeft = activeOffset - scrollLeft >= 0;
        var inFullViewRight = activeOffset + activeWidth - (containerWidth + scrollLeft) <= 0;
        if (inFullViewLeft && inFullViewRight) {
          return;
        }

        var offset = 0;
        allTabs.some(function (tab, i) {
          if (i < _this3.props.activeTabIndex) {
            offset += tab.offsetWidth;
          }

          return i < _this3.state.activeTabIndex;
        });

        this._container.scrollLeft = offset;
      }
    }, {
      key: '_handleTabChange',
      value: function _handleTabChange(index, tabId, tabControlsId, tabChildren, event) {
        if (this.props.onTabChange) {
          this.props.onTabChange(index, tabId, tabControlsId, tabChildren, event);
        }

        if (typeof this.props.activeTabIndex === 'undefined') {
          this.setState(_extends({
            activeTabIndex: index
          }, this._calcIndicatorPosition(this._container, 0, index, this.state.overflowAtIndex)));
        }
      }
    }, {
      key: '_mapToOverflowTabProps',
      value: function _mapToOverflowTabProps(tab, i) {
        var index = i + this.state.overflowAtIndex;
        var active = (0, _getField2.default)(this.props, this.state, 'activeTabIndex') === index;
        var tabEl = _react.Children.only(tab);
        var handleTabChange = this._handleTabChange;

        return {
          active: active,
          primaryText: tabEl.props.label,
          onClick: function handleClick(event) {
            var _tabEl$props = tabEl.props,
                onClick = _tabEl$props.onClick,
                id = _tabEl$props.id,
                controlsId = _tabEl$props.controlsId,
                children = _tabEl$props.children;

            if (onClick) {
              onClick(index, event);
            }

            handleTabChange(index, id, controlsId, children, event);
          }
        };
      }
    }, {
      key: '_nextIndexes',
      value: function _nextIndexes(increment) {
        var _state = this.state,
            overflowIndex = _state.overflowIndex,
            overflowAtIndex = _state.overflowAtIndex;

        var visibleAmt = (overflowAtIndex - overflowIndex) * (increment ? 1 : -1);

        this.setState({
          overflowIndex: overflowIndex + visibleAmt,
          overflowAtIndex: overflowAtIndex + visibleAmt
        });
      }
    }, {
      key: '_showNextTabs',
      value: function _showNextTabs() {
        this._nextIndexes(true);
      }
    }, {
      key: '_showPreviousTabs',
      value: function _showPreviousTabs() {
        this._nextIndexes(false);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var _state2 = this.state,
            indicatorOffset = _state2.indicatorOffset,
            indicatorWidth = _state2.indicatorWidth,
            indicatorVisible = _state2.indicatorVisible,
            overflowIndex = _state2.overflowIndex,
            overflowAtIndex = _state2.overflowAtIndex,
            paddingLeft = _state2.paddingLeft;

        var _props2 = this.props,
            Component = _props2.component,
            style = _props2.style,
            className = _props2.className,
            colored = _props2.colored,
            centered = _props2.centered,
            tabId = _props2.tabId,
            overflowMenu = _props2.overflowMenu,
            overflowMenuLabel = _props2.overflowMenuLabel,
            overflowMenuIconChildren = _props2.overflowMenuIconChildren,
            overflowMenuIconClassName = _props2.overflowMenuIconClassName,
            nextIconChildren = _props2.nextIconChildren,
            nextIconClassName = _props2.nextIconClassName,
            previousIconChildren = _props2.previousIconChildren,
            previousIconClassName = _props2.previousIconClassName,
            props = _objectWithoutProperties(_props2, ['component', 'style', 'className', 'colored', 'centered', 'tabId', 'overflowMenu', 'overflowMenuLabel', 'overflowMenuIconChildren', 'overflowMenuIconClassName', 'nextIconChildren', 'nextIconClassName', 'previousIconChildren', 'previousIconClassName']);

        delete props.activeTabIndex;
        delete props.defaultTabIndex;
        delete props.defaultMedia;
        delete props.desktopMinWidth;
        delete props.onTabChange;

        var activeTabIndex = (0, _getField2.default)(this.props, this.state, 'activeTabIndex');

        var icon = false;
        var children = _react.Children.map(_react.Children.toArray(this.props.children), function (tab, index) {
          var handleOnClick = function handleOnClick(tabIndex, id, tabControlsId, tabChildren, event) {
            if (tab.props.onClick) {
              tab.props.onClick(tabId, id, tabControlsId, tabChildren, event);
            }

            _this4._handleTabChange(tabIndex, id, tabControlsId, tabChildren, event);
          };

          if (tab.props.icon) {
            icon = true;
          }

          return (0, _react.cloneElement)(tab, {
            index: index,
            id: tab.props.id || tabId + '-' + index,
            controlsId: tab.props.controlsId || tabId + '-panel-' + index,
            active: index === activeTabIndex,
            onClick: handleOnClick
          });
        });

        var overflow = void 0;
        var nextControl = void 0;
        var previousControl = void 0;
        if (overflowAtIndex) {
          var length = children.length;
          if (overflowMenu) {
            overflow = _react2.default.createElement(_MenuTab2.default, {
              id: tabId + '-overflow-menu',
              activeTabIndex: activeTabIndex,
              overflowAtIndex: overflowAtIndex,
              label: _react2.default.createElement(
                _IconSeparator2.default,
                { label: overflowMenuLabel },
                _react2.default.createElement(
                  _FontIcon2.default,
                  { iconClassName: overflowMenuIconClassName },
                  overflowMenuIconChildren
                )
              ),
              tabs: children.slice(overflowAtIndex, children.length).map(this._mapToOverflowTabProps)
            });
          }

          children = children.slice(overflowIndex, overflowAtIndex);

          if (!overflowMenu && overflowIndex > 0) {
            previousControl = _react2.default.createElement(
              _TabOverflowButton2.default,
              { iconClassName: previousIconClassName, onClick: this._showPreviousTabs, left: true, icon: icon },
              previousIconChildren
            );
          }

          if (!overflowMenu && length > 3 && overflowAtIndex + overflowIndex <= length) {
            nextControl = _react2.default.createElement(
              _TabOverflowButton2.default,
              { iconClassName: nextIconClassName, onClick: this._showNextTabs, icon: icon },
              nextIconChildren
            );
          }
        }

        return _react2.default.createElement(
          Component,
          _extends({}, props, {
            ref: this._setContainer,
            style: _extends({}, style, { paddingLeft: paddingLeft }),
            className: (0, _classnames2.default)('md-tabs', {
              'md-tabs--pagination': overflowAtIndex && !overflowMenu,
              'md-tabs--centered': centered,
              'md-background--primary': colored
            }, className),
            role: 'tablist'
          }),
          previousControl,
          children,
          nextControl,
          overflow,
          _react2.default.createElement(_TabIndicator2.default, { offset: indicatorOffset, width: indicatorWidth, visible: indicatorVisible })
        );
      }
    }]);

    return Tabs;
  }(_react.PureComponent);

  Tabs.propTypes = {
    /**
     * A base id to use for each `Tab`. When the child tabs are created, they are cloned
     * with some additional accessibility props. Each tab will get a prop with this and the
     * current index of the tab.
     */
    tabId: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])),

    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * The component to render the tabs in.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,

    /**
     * This should either be a single `Tab` component or a list of `Tab` components. Unfortunately,
     * the child *must* be exactly a `Tab` component because this is unable to extract the correct
     * `label` and `children` from a custom `Tab` component.
     */
    children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.arrayOf(_react.PropTypes.element)]).isRequired,

    /**
     * Boolean if the tabs should be centered instead of aligned to the keyline. The tabs will
     * only be aligned to the keyline when there are more than 3 tabs and the `alignToKeyline`
     * prop is `false`.
     */
    centered: _react.PropTypes.bool,

    /**
     * Boolean if the tabs should align to a toolbar's title keyline. If this is undefined,
     * the tabs will try to align to the keyline when there are more than 3 tabs.
     */
    alignToKeyline: _react.PropTypes.bool,

    /**
     * Boolean if the tabs should be colored with the primary color. If this is false or undefined,
     * the tabs will be colored for the light or dark theme.
     */
    colored: _react.PropTypes.bool,

    /**
     * A boolean if the overflow tabs on desktop displays should appear in a menu. If this is false,
     * the additional tabs will be available by using pagination buttons.
     */
    overflowMenu: _react.PropTypes.bool,

    /**
     * An optional function to call when the active tab is changed. The callback will include
     * the new active tab index and a click event.
     *
     * ```js
     * onTabChange(newTabIndex, event);
     * ```
     */
    onTabChange: _react.PropTypes.func,

    /**
     * An optional active tab index to use. If this is defined, it will make the component controlled
     * and require the `onTabChange` prop to be defined.
     */
    activeTabIndex: (0, _controlled2.default)(_react.PropTypes.number, 'onTabChange', 'defaultTabIndex'),

    /**
     * The default tab index to use when the component is uncontrolled.
     */
    defaultTabIndex: _react.PropTypes.number.isRequired,

    /**
     * The default media to render the tabs for. This is really just used for server side rendering.
     * Once the component has mounted, it will resize automatically.
     */
    defaultMedia: _react.PropTypes.oneOf(['mobile', 'tablet', 'desktop']).isRequired,

    /**
     * The min width to use for rendering the tabs for desktops. mobile and tablet is not used
     * because they share the same styles.
     */
    desktopMinWidth: _react.PropTypes.number.isRequired,

    /**
     * When the `overflowMenu` prop is false, this will be used to render the "next slice of tabs"
     * when there are too many tabs to display at once on desktop screens.
     */
    nextIconChildren: _react.PropTypes.node,

    /**
     * When the `overflowMenu` prop is false, this will be used to render the "next slice of tabs"
     * when there are too many tabs to display at once on desktop screens.
     */
    nextIconClassName: _react.PropTypes.string,

    /**
     * When the `overflowMenu` prop is false, this will be used to render the "previous slice of tabs"
     * when there are too many tabs to display at once on desktop screens.
     */
    previousIconChildren: _react.PropTypes.node,

    /**
     * When the `overflowMenu` prop is false, this will be used to render the "previous slice of tabs"
     * when there are too many tabs to display at once on desktop screens.
     */
    previousIconClassName: _react.PropTypes.string,

    /**
     * When the `overflowMenu` prop is true, this will be used to render the `MenuTab` overflow menu.
     * This will be the text that displays as a tab.
     */
    overflowMenuLabel: _react.PropTypes.node.isRequired,

    /**
     * When the `overflowMenu` prop is true, this will be used to render the `MenuTab` overflow menu.
     * This will be to render the icon to the right of the label.
     */
    overflowMenuIconChildren: _react.PropTypes.node,

    /**
     * When the `overflowMenu` prop is true, this will be used to render the `MenuTab` overflow menu.
     * This will be to render the icon to the right of the label.
     */
    overflowMenuIconClassName: _react.PropTypes.string
  };
  Tabs.defaultProps = {
    component: 'ul',
    defaultTabIndex: 0,
    defaultMedia: 'mobile',
    desktopMinWidth: _media.DESKTOP_MIN_WIDTH,
    nextIconChildren: 'keyboard_arrow_right',
    previousIconChildren: 'keyboard_arrow_left',
    overflowMenuLabel: 'More',
    overflowMenuIconChildren: 'arrow_drop_down'
  };
  exports.default = Tabs;
});