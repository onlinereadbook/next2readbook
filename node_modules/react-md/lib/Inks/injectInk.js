(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './InkContainer', '../utils/StringUtils/getDisplayName'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./InkContainer'), require('../utils/StringUtils/getDisplayName'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.InkContainer, global.getDisplayName);
    global.injectInk = mod.exports;
  }
})(this, function (exports, _react, _InkContainer, _getDisplayName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _InkContainer2 = _interopRequireDefault(_InkContainer);

  var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

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

  exports.default = function (ComposedComponent) {
    var _class, _temp;

    return _temp = _class = function (_PureComponent) {
      _inherits(InkedComponent, _PureComponent);

      function InkedComponent(props, context) {
        _classCallCheck(this, InkedComponent);

        var _this = _possibleConstructorReturn(this, (InkedComponent.__proto__ || Object.getPrototypeOf(InkedComponent)).call(this, props, context));

        _this.focus = _this.focus.bind(_this);
        _this.createInk = _this.createInk.bind(_this);
        _this.getComposedComponent = _this.getComposedComponent.bind(_this);
        _this._setInkRef = _this._setInkRef.bind(_this);
        _this._setComposedComponent = _this._setComposedComponent.bind(_this);
        return _this;
      }

      _createClass(InkedComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var ref = this.props.__SUPER_SECRET_REF__;
          // Emulate the ref callback...

          if (ref) {
            ref(this);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var ref = this.props.__SUPER_SECRET_REF__;
          // Emulate the ref callback...

          if (ref) {
            ref(null);
          }
        }

        /**
         * A publically accessible way to manually create an ink. This can be used with the `refs`.
         * The ink can either be created by using the `pageX` and `pageY` from a click/touch event
         * or it will be created in the center of the `ComposedComponent`.
         *
         * ```js
         * <SomeInkedComponent ref={inkHOC => inkHOC.createInk()} />
         * ```
         *
         * @param {number=} pageX - An optional pageX of the click or touch event.
         * @param {number=} pageY - An optional pageY of the click or touch event.
         */

      }, {
        key: 'createInk',
        value: function createInk(pageX, pageY) {
          if (this._inkContainer && !this.props.disabled && !this.props.inkDisabled) {
            this._inkContainer.createInk(pageX, pageY);
          }
        }

        /**
         * This will attempt to focus the composed component. If the component is disabled, nothing
         * will happen. If the `disabled` and `inkDisabled` props are not set to `true`, an ink will
         * also be created.
         *
         * ```js
         * <SomeInkedComponent ref={inkHOC => inkHOC.focus()} />
         * ```
         */

      }, {
        key: 'focus',
        value: function focus() {
          if (this._inkContainer) {
            this._inkContainer.focus();
          }
        }

        /**
         * Gets the composed component as a ref. This is usefull if you need to access the ref of the
         * composed component instead of the `injectInk` HOC to use some publically accessible methods.
         *
         * ```js
         * <SomeInkedComponent
         *   ref={inkHOC => {
         *     inkHOC.getComposedComponent().focus();
         *   }}
         * />
         * ```
         */

      }, {
        key: 'getComposedComponent',
        value: function getComposedComponent() {
          return this._composed;
        }
      }, {
        key: '_setInkRef',
        value: function _setInkRef(inkContainer) {
          if (inkContainer) {
            this._inkContainer = inkContainer;
          }
        }
      }, {
        key: '_setComposedComponent',
        value: function _setComposedComponent(component) {
          this._composed = component;
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              inkDisabled = _props.inkDisabled,
              transitionOverlap = _props.inkTransitionOverlap,
              transitionEnterTimeout = _props.inkTransitionEnterTimeout,
              transitionLeaveTimeout = _props.inkTransitionLeaveTimeout,
              inkStyle = _props.inkStyle,
              inkClassName = _props.inkClassName,
              inkContainerStyle = _props.inkContainerStyle,
              inkContainerClassName = _props.inkContainerClassName,
              disabledInteractions = _props.disabledInteractions,
              waitForInkTransition = _props.waitForInkTransition,
              props = _objectWithoutProperties(_props, ['inkDisabled', 'inkTransitionOverlap', 'inkTransitionEnterTimeout', 'inkTransitionLeaveTimeout', 'inkStyle', 'inkClassName', 'inkContainerStyle', 'inkContainerClassName', 'disabledInteractions', 'waitForInkTransition']);

          delete props.__SUPER_SECRET_REF__;

          if (!(props.disabled || inkDisabled)) {
            props.ink = _react2.default.createElement(_InkContainer2.default, {
              ref: this._setInkRef,
              key: 'ink-container',
              style: inkContainerStyle,
              className: inkContainerClassName,
              inkStyle: inkStyle,
              inkClassName: inkClassName,
              disabledInteractions: disabledInteractions,
              transitionOverlap: transitionOverlap,
              transitionEnterTimeout: transitionEnterTimeout,
              transitionLeaveTimeout: transitionLeaveTimeout,
              waitForInkTransition: waitForInkTransition
            });
          }

          props.ref = this._setComposedComponent;

          return _react2.default.createElement(ComposedComponent, props);
        }
      }]);

      return InkedComponent;
    }(_react.PureComponent), _class.displayName = (0, _getDisplayName2.default)(ComposedComponent, 'Inked'), _class.propTypes = {
      /**
       * An optional style to apply to each ink that gets generated.
       */
      inkStyle: _react.PropTypes.object,

      /**
       * An optional className to apply to each ink that gets generated.
       */
      inkClassName: _react.PropTypes.string,

      /**
       * An optional style to apply to the ink's container.
       */
      inkContainerStyle: _react.PropTypes.object,

      /**
       * An optional className to apply to the ink's container.
       */
      inkContainerClassName: _react.PropTypes.string,

      /**
       * Boolean if the composed component or the ink is disabled.
       */
      disabled: _react.PropTypes.bool,

      /**
       * Boolean if only the ink is disabled for the composed component.
       */
      inkDisabled: _react.PropTypes.bool,

      /**
       * The time (in ms) that the enter and leave transitions for the ink should overlap.
       * This really just allows for a more _fluid_ looking ink when something is quickly
       * touched or clicked by having it fade out while growing.
       */
      inkTransitionOverlap: _react.PropTypes.number.isRequired,

      /**
       * The transition time for the ink to be considered fully entered. This should really
       * map up to whatever value you set for `$md-ink-enter-transition-time`.
       */
      inkTransitionEnterTimeout: _react.PropTypes.number.isRequired,

      /**
       * The transition time for the ink to be considered fully leaved (left?). This should really
       * map up to whatever value you set for `$md-ink-leave-transition-time`.
       */
      inkTransitionLeaveTimeout: _react.PropTypes.number.isRequired,

      /**
       * Boolean if the `ComposedComponent`'s click event only after the ink has finished transitioning
       * in and out. This is really only to get a more _fluid_ looking click event when clicking on
       * the `ComposedComponent` ends up taking it out of the view. (ex: Closing a Dialog).
       */
      waitForInkTransition: _react.PropTypes.bool,

      /**
       * An optional array of interactions that can be disabled for the ink. This is a *very* limited
       * use case where `Switches` needed the ink disabled only when using a mouse.
       */
      disabledInteractions: _react.PropTypes.arrayOf(_react.PropTypes.oneOf(['keyboard', 'mouse', 'touch'])),

      /**
       * When using inked components in a `TransitionGroup`, the ref callback is not actually invoked.
       * This is a little _hack_ to get it to work by not using `ref`, but this name.
       */
      __SUPER_SECRET_REF__: _react.PropTypes.func
    }, _class.defaultProps = {
      inkTransitionOverlap: 150,
      inkTransitionEnterTimeout: 450,
      inkTransitionLeaveTimeout: 300
    }, _temp;
  };
});