(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', 'react-prop-types/lib/deprecated', '../utils/getField', '../utils/PropTypes/controlled', '../Helpers/Portal', '../Papers/Paper', './BottomNav'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('react-prop-types/lib/deprecated'), require('../utils/getField'), require('../utils/PropTypes/controlled'), require('../Helpers/Portal'), require('../Papers/Paper'), require('./BottomNav'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.deprecated, global.getField, global.controlled, global.Portal, global.Paper, global.BottomNav);
    global.BottomNavigation = mod.exports;
  }
})(this, function (exports, _react, _classnames, _deprecated, _getField, _controlled, _Portal, _Paper, _BottomNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _getField2 = _interopRequireDefault(_getField);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _Portal2 = _interopRequireDefault(_Portal);

  var _Paper2 = _interopRequireDefault(_Paper);

  var _BottomNav2 = _interopRequireDefault(_BottomNav);

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

  var BottomNavigation = function (_PureComponent) {
    _inherits(BottomNavigation, _PureComponent);

    function BottomNavigation(props) {
      _classCallCheck(this, BottomNavigation);

      var _this = _possibleConstructorReturn(this, (BottomNavigation.__proto__ || Object.getPrototypeOf(BottomNavigation)).call(this, props));

      var visible = typeof props.initiallyVisible === 'boolean' ? props.initiallyVisible : props.defaultVisible;
      _this.state = {
        visible: visible,
        portalVisible: visible
      };
      if (typeof props.activeIndex === 'undefined') {
        _this.state.activeIndex = props.defaultActiveIndex;
      }

      _this._handleNavChange = _this._handleNavChange.bind(_this);
      _this._addTouchEvents = _this._addTouchEvents.bind(_this);
      _this._removeTouchEvents = _this._removeTouchEvents.bind(_this);
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      _this._handleTouchMove = _this._handleTouchMove.bind(_this);
      _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
      return _this;
    }

    _createClass(BottomNavigation, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.dynamic) {
          this._addTouchEvents();
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var dynamic = nextProps.dynamic;

        if (this.props.dynamic === dynamic) {
          return;
        }

        if (dynamic) {
          this._addTouchEvents();
        } else {
          this._removeTouchEvents();
        }
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        if (this.state.visible !== nextState.visible && nextProps.onVisibilityChange) {
          nextProps.onVisibilityChange(nextState.visible);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.dynamic) {
          this._removeTouchEvents();
        }

        if (this._timeout) {
          clearTimeout(this._timeout);
        }
      }
    }, {
      key: '_addTouchEvents',
      value: function _addTouchEvents() {
        window.addEventListener('touchstart', this._handleTouchStart);
        window.addEventListener('touchmove', this._handleTouchMove);
        window.addEventListener('touchend', this._handleTouchEnd);
      }
    }, {
      key: '_removeTouchEvents',
      value: function _removeTouchEvents() {
        window.removeEventListener('touchstart', this._handleTouchStart);
        window.removeEventListener('touchmove', this._handleTouchMove);
        window.removeEventListener('touchend', this._handleTouchEnd);
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart(e) {
        var pageY = e.changedTouches[0].pageY;


        this._pageY = pageY;
        this._scrolling = true;
      }
    }, {
      key: '_handleTouchMove',
      value: function _handleTouchMove(e) {
        var _this2 = this;

        var visible = this.state.visible;

        if (!this._scrolling) {
          return;
        }

        var touchY = e.changedTouches[0].pageY;
        var _props = this.props,
            transitionDuration = _props.transitionDuration,
            dynamicThreshold = _props.dynamicThreshold;

        var passedThreshold = Math.abs(this._pageY - touchY) >= dynamicThreshold;
        if (this._pageY > touchY && visible && passedThreshold) {
          if (this._timeout) {
            clearTimeout(this._timeout);
          }

          this._timeout = setTimeout(function () {
            _this2._timeout = null;
            _this2.setState({ portalVisible: false });
          }, transitionDuration);

          this._pageY = touchY;
          this.setState({ visible: false });
        } else if (this._pageY < touchY && !visible && passedThreshold) {
          if (this._timeout) {
            clearTimeout(this._timeout);
          }

          this._timeout = setTimeout(function () {
            _this2._timeout = null;
            _this2.setState({ visible: true });
          }, 17);

          this._pageY = touchY;
          this.setState({ portalVisible: true });
        }
      }
    }, {
      key: '_handleTouchEnd',
      value: function _handleTouchEnd() {
        this._scrolling = false;
      }
    }, {
      key: '_handleNavChange',
      value: function _handleNavChange(index, e) {
        if (this.props.onNavChange || this.props.onChange) {
          (this.props.onNavChange || this.props.onChange)(index, e);
        }

        if (typeof this.props.activeIndex === 'undefined') {
          this.setState({ activeIndex: index });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _state = this.state,
            visible = _state.visible,
            portalVisible = _state.portalVisible;

        var _props2 = this.props,
            className = _props2.className,
            actions = _props2.actions,
            colored = _props2.colored,
            dynamic = _props2.dynamic,
            lastChild = _props2.lastChild,
            props = _objectWithoutProperties(_props2, ['className', 'actions', 'colored', 'dynamic', 'lastChild']);

        delete props.links;
        delete props.activeIndex;
        delete props.onNavChange;
        delete props.onVisibilityChange;
        delete props.defaultVisible;
        delete props.defaultActiveIndex;
        delete props.dynamicThreshold;
        delete props.transitionDuration;
        delete props.renderNode;

        // Delete deprecated
        delete props.onChange;
        delete props.initiallyVisible;
        delete props.containerStyle;
        delete props.containerClassName;
        delete props.transitionName;
        delete props.transitionEnterTimeout;
        delete props.transitionLeaveTimeout;

        var links = this.props.links;

        if (actions) {
          links = actions;
        }

        var fixed = links.length === 3;
        var activeIndex = (0, _getField2.default)(this.props, this.state, 'activeIndex');
        var renderNode = (0, _getField2.default)(this.props, this.context, 'renderNode');

        return _react2.default.createElement(
          _Portal2.default,
          { renderNode: renderNode, visible: portalVisible, lastChild: lastChild },
          _react2.default.createElement(
            _Paper2.default,
            _extends({}, props, {
              className: (0, _classnames2.default)('md-bottom-navigation', {
                'md-background--card': !colored,
                'md-background--primary': colored,
                'md-bottom-navigation--dynamic': dynamic,
                'md-bottom-navigation--dynamic-inactive': dynamic && !visible
              }, className),
              role: 'navigation'
            }),
            links.map(function (action, index) {
              return _react2.default.createElement(_BottomNav2.default, _extends({}, action, {
                key: action.key || index,
                index: index,
                onNavChange: _this3._handleNavChange,
                active: activeIndex === index,
                colored: colored,
                fixed: fixed
              }));
            })
          )
        );
      }
    }]);

    return BottomNavigation;
  }(_react.PureComponent);

  BottomNavigation.propTypes = {
    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * A list of objects to generate a bottom navigation link. There must be at least 3 and no more
     * than 5 links. A link gets rendered as the `AccessibleFakeButton` component, so any additional
     * props in the link's shape will be passed along.
     *
     * ```docgen
     * PropTypes.arrayOf(PropTypes.shape({
     *   label: PropTypes.node.isRequired,
     *   iconChildren: PropTypes.node,
     *   iconClassName: PropTypes.string,
     *   component: PropTypes.oneOfType([
     *      PropTypes.func,
     *      PropTypes.string,
     *   ]),
     * }).isRequired
     * ```
     */
    links: function links(props, propName, component) {
      for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
      }

      var _PropTypes$arrayOf;

      var links = props[propName] || props.actions;
      var len = links.length;

      if (len < 3) {
        return new Error('Only ' + len + ' `' + propName + '` were given to the ' + component + '. At least 3 are required.');
      } else if (len > 5) {
        return new Error(len + ' `' + propName + '` were given to the ' + component + '. No more than 5 may be given.');
      }

      return (_PropTypes$arrayOf = _react.PropTypes.arrayOf(_react.PropTypes.shape({
        label: _react.PropTypes.node.isRequired,
        iconChildren: _react.PropTypes.node,
        iconClassName: _react.PropTypes.string,
        component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string])
      }))).isRequired.apply(_PropTypes$arrayOf, [props, propName, component].concat(args));
    },

    /**
     * Boolean if the bottom navigation should be colored with the primary color or whatever color
     * was a result of the `react-md-theme-bottom-navigations-colored` mixin.
     */
    colored: _react.PropTypes.bool,

    /**
     * Boolean if the bottom navigation should dynamically appear based on scrolling. When the user
     * scrolls the `dynamicThreshold` amount, this component will either disappear (scrolling down)
     * or appera (scrolling up).
     */
    dynamic: _react.PropTypes.bool,

    /**
     * The distance a user must scroll before the bottom navigation appears or disappears when it is `dyanamic`.
     */
    dynamicThreshold: _react.PropTypes.number.isRequired,

    /**
     * An optional function to call when a link has been clicked. The callback will
     * include the new active index and the click event.
     *
     * ```js
     * onNavChange(newActiveIndex, event);
     * ```
     */
    onNavChange: _react.PropTypes.func,

    /**
     * An optional active index to use. This will make the component controlled and require the
     * `onNavChange` prop to be defined.
     */
    activeIndex: (0, _controlled2.default)(_react.PropTypes.number, 'onNavChange', 'defaultActiveIndex'),

    /**
     * The index for the link that is active by default.
     */
    defaultActiveIndex: _react.PropTypes.number.isRequired,

    /**
     * Boolean if the bottom navigation is visible by default. This *should* probably always
     * be true.
     */
    defaultVisible: _react.PropTypes.bool.isRequired,

    /**
     * The component to render the bottom navigation as.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,

    /**
     * Since the `BottomNavigation` component uses the `Portal` component, you can pass an optional
     * HTML Node to render in.
     */
    renderNode: _react.PropTypes.object,

    /**
     * Boolean if the bottom navigation should render as the last child in the `renderNode` or `body`
     * instead of as the first.
     */
    lastChild: _react.PropTypes.bool,

    /**
     * The transition duration for the dynamic bottom navigation to appear or disappear. This should
     * match the `$md-bottom-navigation-transition-time` variable.
     */
    transitionDuration: _react.PropTypes.number.isRequired,

    /**
     * An optional function to call when the visibility of the bottom navigation changes. The callback
     * will include the new visibility.
     *
     * ```js
     * onVisibilityChange(!visible);
     * ```
     */
    onVisibilityChange: _react.PropTypes.func,

    onChange: (0, _deprecated2.default)(_react.PropTypes.func, 'Use `onNavChange` instead'),
    initiallyVisible: (0, _deprecated2.default)(_react.PropTypes.bool, 'Use `defaultVisible` instead'),
    initialActiveIndex: (0, _deprecated2.default)(_react.PropTypes.number, 'Use `defaultActiveIndex` instead'),
    containerStyle: (0, _deprecated2.default)(_react.PropTypes.object, 'Use `style` instead'),
    containerClassName: (0, _deprecated2.default)(_react.PropTypes.string, 'Use `className` instead'),
    transitionName: (0, _deprecated2.default)(_react.PropTypes.string, 'There is no CSSTransitionGroup used anymore'),
    transitionEnterTimeout: (0, _deprecated2.default)(_react.PropTypes.number, 'Use `transitionDuration` instead'),
    transitionLeaveTimeout: (0, _deprecated2.default)(_react.PropTypes.number, 'Use `transitionDuration` instead'),
    actions: (0, _deprecated2.default)(_react.PropTypes.array, 'Use `links` instead')
  };
  BottomNavigation.defaultProps = {
    defaultActiveIndex: 0,
    component: 'footer',
    defaultVisible: true,
    transitionDuration: 300,
    dynamicThreshold: 20
  };
  BottomNavigation.contextTypes = {
    renderNode: _react.PropTypes.object
  };
  exports.default = BottomNavigation;
});