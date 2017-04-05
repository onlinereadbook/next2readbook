(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'react-addons-transition-group', 'classnames', '../constants/keyCodes', '../utils/EventUtils/isValidClick', '../utils/EventUtils/captureNextEvent', '../utils/calcPageOffset', '../utils/NumberUtils/calculateHypotenuse', './Ink'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('react-addons-transition-group'), require('classnames'), require('../constants/keyCodes'), require('../utils/EventUtils/isValidClick'), require('../utils/EventUtils/captureNextEvent'), require('../utils/calcPageOffset'), require('../utils/NumberUtils/calculateHypotenuse'), require('./Ink'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.reactAddonsTransitionGroup, global.classnames, global.keyCodes, global.isValidClick, global.captureNextEvent, global.calcPageOffset, global.calculateHypotenuse, global.Ink);
    global.InkContainer = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _reactAddonsTransitionGroup, _classnames, _keyCodes, _isValidClick, _captureNextEvent, _calcPageOffset, _calculateHypotenuse, _Ink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _isValidClick2 = _interopRequireDefault(_isValidClick);

  var _captureNextEvent2 = _interopRequireDefault(_captureNextEvent);

  var _calcPageOffset2 = _interopRequireDefault(_calcPageOffset);

  var _calculateHypotenuse2 = _interopRequireDefault(_calculateHypotenuse);

  var _Ink2 = _interopRequireDefault(_Ink);

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

  var InkContainer = function (_PureComponent) {
    _inherits(InkContainer, _PureComponent);

    function InkContainer(props) {
      _classCallCheck(this, InkContainer);

      var _this = _possibleConstructorReturn(this, (InkContainer.__proto__ || Object.getPrototypeOf(InkContainer)).call(this, props));

      _this.state = { inks: [] };
      _this.createInk = _this.createInk.bind(_this);
      _this.focus = _this.focus.bind(_this);
      _this._handleFocus = _this._handleFocus.bind(_this);
      _this._createInk = _this._createInk.bind(_this);
      _this._removeInk = _this._removeInk.bind(_this);
      _this._setContainers = _this._setContainers.bind(_this);
      _this._maybeDelayClick = _this._maybeDelayClick.bind(_this);
      _this._handleBlur = _this._handleBlur.bind(_this);
      _this._handleMouseDown = _this._handleMouseDown.bind(_this);
      _this._handleMouseUp = _this._handleMouseUp.bind(_this);
      _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      _this._handleTouchMove = _this._handleTouchMove.bind(_this);
      _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
      _this._handleRemove = _this._handleRemove.bind(_this);
      _this._handleSubmit = _this._handleSubmit.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      _this._getKeyboardContainer = _this._getKeyboardContainer.bind(_this);
      _this._stopPropagationToFocus = _this._stopPropagationToFocus.bind(_this);
      _this._initOrRemoveEvents = _this._initOrRemoveEvents.bind(_this);
      return _this;
    }

    _createClass(InkContainer, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var di = this.props.disabledInteractions;
        var ndi = nextProps.disabledInteractions;

        if (di === ndi || !this._container) {
          return;
        }

        var mouseDisabledDiff = this._isListenerDisabledDiff('mouse', di, ndi);
        var touchDisabledDiff = this._isListenerDisabledDiff('touch', di, ndi);
        var keyboardDisabledDiff = this._isListenerDisabledDiff('keyboard', di, ndi);
        this._initOrRemoveEvents(nextProps, keyboardDisabledDiff, mouseDisabledDiff, touchDisabledDiff);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this._removeTimeout) {
          clearTimeout(this._removeTimeout);
        }

        if (this._container) {
          this._initOrRemoveEvents({ disabledInteractions: ['keyboard', 'mouse', 'touch'] });
          this._getKeyboardContainer().removeEventListener('blur', this._handleBlur);
        }
      }
    }, {
      key: 'createInk',
      value: function createInk(pageX, pageY) {
        var _this2 = this;

        this._createInk(pageX, pageY);
        this._removeTimeout = setTimeout(function () {
          _this2._removeTimeout = null;
          _this2._removeInk();
        }, this.props.transitionOverlap);
      }
    }, {
      key: 'focus',
      value: function focus() {
        this._getKeyboardContainer().focus();
      }
    }, {
      key: '_createInk',
      value: function _createInk(pageX, pageY) {
        var _inkContainer = this._inkContainer,
            offsetWidth = _inkContainer.offsetWidth,
            offsetHeight = _inkContainer.offsetHeight;


        var x = void 0;
        var y = void 0;
        if (typeof pageX !== 'undefined' && typeof pageY !== 'undefined') {
          var pageOffset = (0, _calcPageOffset2.default)(this._inkContainer);

          x = pageX - pageOffset.left;
          y = pageY - pageOffset.top;
        } else {
          x = offsetWidth / 2;
          y = offsetHeight / 2;
        }

        var r = Math.max((0, _calculateHypotenuse2.default)(x, y), (0, _calculateHypotenuse2.default)(offsetWidth - x, y), (0, _calculateHypotenuse2.default)(offsetWidth - x, offsetHeight - y), (0, _calculateHypotenuse2.default)(x, offsetHeight - y));

        var ink = {
          left: x - r,
          top: y - r,
          size: r * 2,
          key: Date.now()
        };

        var inks = this.state.inks.slice();
        inks.push(ink);
        this.setState({ inks: inks });
      }
    }, {
      key: '_removeInk',
      value: function _removeInk() {
        var inks = this.state.inks.slice();
        inks.pop();

        this.setState({ inks: inks });
      }
    }, {
      key: '_getKeyboardContainer',
      value: function _getKeyboardContainer() {
        if (this._container.classList.contains('md-text-field-container')) {
          return this._container.querySelector('.md-text-field');
        }

        return this._container;
      }
    }, {
      key: '_setContainers',
      value: function _setContainers(inkContainer) {
        if (inkContainer !== null) {
          this._inkContainer = (0, _reactDom.findDOMNode)(inkContainer);
          this._container = this._inkContainer.parentNode;

          if (this._container) {
            this._initOrRemoveEvents(this.props);
          }
        }
      }
    }, {
      key: '_initOrRemoveEvents',
      value: function _initOrRemoveEvents(props) {
        var keyboardDiff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var mouseDiff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var touchDiff = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        var mouseDisabled = this._isListenerDisabled('mouse', props.disabledInteractions);
        var touchDisabled = this._isListenerDisabled('touch', props.disabledInteractions);
        var keyboardDisabled = this._isListenerDisabled('keyboard', props.disabledInteractions);

        if (keyboardDiff) {
          var fn = (keyboardDisabled ? 'remove' : 'add') + 'EventListener';
          this._getKeyboardContainer()[fn]('focus', this._handleFocus);
          this._getKeyboardContainer()[fn]('keydown', this._handleKeyDown);

          if (this._container.getAttribute('type') === 'submit') {
            window[fn]('submit', this._handleSubmit);
          }

          if (mouseDiff) {
            this._container[(mouseDisabled ? 'add' : 'remove') + 'EventListener']('mousedown', this._stopPropagationToFocus);
          }

          if (touchDiff) {
            this._container[(touchDisabled ? 'add' : 'remove') + 'EventListener']('touchstart', this._stopPropagationToFocus);
          }
        }

        if (mouseDiff) {
          var _fn = (mouseDisabled ? 'remove' : 'add') + 'EventListener';
          this._container[_fn]('mousedown', this._handleMouseDown);
          this._container[_fn]('mouseup', this._handleMouseUp);
        }

        if (touchDiff) {
          var _fn2 = (touchDisabled ? 'remove' : 'add') + 'EventListener';
          this._container[_fn2]('touchstart', this._handleTouchStart);
          this._container[_fn2]('touchend', this._handleTouchEnd);
        }
      }
    }, {
      key: '_isListenerDisabledDiff',
      value: function _isListenerDisabledDiff(interaction, disabledInteractions, nextDisabledInteractions) {
        var i = disabledInteractions.indexOf(interaction);
        var ni = nextDisabledInteractions.indexOf(interaction);

        return i < 0 && ni >= 0 || i >= 0 && ni < 0;
      }
    }, {
      key: '_isListenerDisabled',
      value: function _isListenerDisabled(interaction, disabledInteractions) {
        return disabledInteractions && disabledInteractions.indexOf(interaction) !== -1;
      }
    }, {
      key: '_maybeDelayClick',
      value: function _maybeDelayClick() {
        if (!this.props.waitForInkTransition) {
          return;
        }

        (0, _captureNextEvent2.default)('click', this._container);
      }
    }, {
      key: '_handleRemove',
      value: function _handleRemove() {
        var _this3 = this;

        if (this._clicked && this.props.waitForInkTransition) {
          // For some reason if the click event will make the ink unmount, it will no longer
          // have a debug id in the TransitionGroup and it displays a warning. Adding a 1ms timeout
          // fixes that issue... It only happens on an actual click instead of an enter click.
          setTimeout(function () {
            _this3._container.click();
          }, 1);
        }

        this._clicked = false;
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        var key = e.which || e.keyCode;
        if (key === _keyCodes.ENTER || key === _keyCodes.SPACE) {
          this._clicked = true;
          this.createInk();
          this._maybeDelayClick();
        }
      }
    }, {
      key: '_handleFocus',
      value: function _handleFocus() {
        if (this._clicked) {
          return;
        }

        this._createInk();
        this._getKeyboardContainer().addEventListener('blur', this._handleBlur);
      }
    }, {
      key: '_handleBlur',
      value: function _handleBlur() {
        this._getKeyboardContainer().removeEventListener('blur', this._handleBlur);
        this._removeInk();
      }
    }, {
      key: '_handleMouseDown',
      value: function _handleMouseDown(e) {
        this._clicked = true;
        if (!(0, _isValidClick2.default)(e) || this._skipNextMouse) {
          this._skipNextMouse = false;
          return;
        }

        this._mouseLeave = false;
        this._container.addEventListener('mouseleave', this._handleMouseLeave);
        this._createInk(e.pageX, e.pageY);
      }
    }, {
      key: '_handleMouseLeave',
      value: function _handleMouseLeave() {
        this._container.removeEventListener('mouseleave', this._handleMouseLeave);
        this._mouseLeave = true;
        this._removeInk();
      }
    }, {
      key: '_handleMouseUp',
      value: function _handleMouseUp() {
        if (this._mouseLeave) {
          return;
        }

        this._maybeDelayClick();
        this._container.removeEventListener('mouseleave', this._handleMouseLeave);
        this._removeInk();
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart(e) {
        this._aborted = false;
        this._clicked = true;
        this._skipNextMouse = true;
        window.addEventListener('touchmove', this._handleTouchMove);

        var _e$changedTouches$ = e.changedTouches[0],
            pageX = _e$changedTouches$.pageX,
            pageY = _e$changedTouches$.pageY;

        this._createInk(pageX, pageY);
      }
    }, {
      key: '_handleTouchMove',
      value: function _handleTouchMove() {
        window.removeEventListener('touchmove', this._handleTouchMove);
        var lastInk = this.state.inks[this.state.inks.length - 1];
        if (!lastInk || Date.now() > lastInk.key + 200) {
          this._aborted = false;
          return;
        }

        var inks = this.state.inks.slice();
        var index = inks.length - 1;

        var abortedInk = Object.assign({}, lastInk, { aborted: true });
        inks.splice(index, 1, abortedInk);

        this._aborted = true;
        this.setState({ inks: inks }, this._removeInk);
      }
    }, {
      key: '_handleTouchEnd',
      value: function _handleTouchEnd() {
        this._skipNextMouse = true;

        if (this._aborted) {
          return;
        } else {
          window.removeEventListener('touchmove', this._handleTouchMove);
        }

        this._removeInk();
      }
    }, {
      key: '_handleSubmit',
      value: function _handleSubmit(e) {
        if (document.activeElement === this._container || !e.target.contains(this._container)) {
          return;
        }

        this._maybeDelayClick();
        this.createInk();
      }
    }, {
      key: '_stopPropagationToFocus',
      value: function _stopPropagationToFocus(e) {
        var type = e.type;

        var mousedown = type === 'mousedown';
        this._clicked = mousedown || type === 'touchstart';

        if (this._clicked) {
          window.addEventListener(mousedown ? 'mouseup' : 'touchend', this._stopPropagationToFocus, true);
        } else {
          window.removeEventListener(e.type, this._stopPropagationToFocus, true);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var _props = this.props,
            style = _props.style,
            className = _props.className,
            inkStyle = _props.inkStyle,
            inkClassName = _props.inkClassName,
            transitionOverlap = _props.transitionOverlap,
            transitionEnterTimeout = _props.transitionEnterTimeout,
            transitionLeaveTimeout = _props.transitionLeaveTimeout;

        var inks = this.state.inks.map(function (props) {
          return _react2.default.createElement(_Ink2.default, _extends({}, props, {
            style: inkStyle,
            className: inkClassName,
            onRemove: _this4._handleRemove,
            transitionOverlap: transitionOverlap,
            transitionEnterTimeout: transitionEnterTimeout,
            transitionLeaveTimeout: transitionLeaveTimeout
          }));
        });

        return _react2.default.createElement(
          _reactAddonsTransitionGroup2.default,
          {
            ref: this._setContainers,
            component: 'div',
            style: style,
            className: (0, _classnames2.default)('md-ink-container', className)
          },
          inks
        );
      }
    }]);

    return InkContainer;
  }(_react.PureComponent);

  InkContainer.propTypes = {
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    inkStyle: _react.PropTypes.object,
    inkClassName: _react.PropTypes.string,
    waitForInkTransition: _react.PropTypes.bool,
    disabledInteractions: _react.PropTypes.arrayOf(_react.PropTypes.oneOf(['keyboard', 'mouse', 'touch'])),
    transitionOverlap: _react.PropTypes.number.isRequired,
    transitionEnterTimeout: _react.PropTypes.number.isRequired,
    transitionLeaveTimeout: _react.PropTypes.number.isRequired
  };
  InkContainer.defaultProps = {
    transitionOverlap: 150,
    transitionEnterTimeout: 450,
    transitionLeaveTimeout: 300
  };
  exports.default = InkContainer;
});