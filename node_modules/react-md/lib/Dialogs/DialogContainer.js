(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'react-addons-css-transition-group', 'classnames', 'react-prop-types/lib/deprecated', 'react-prop-types/lib/isRequiredForA11y', '../constants/keyCodes', '../constants/CSSTransitionGroupTick', '../utils/getField', '../utils/toggleScroll', '../utils/PropTypes/oneRequiredForA11y', './Dialog', '../Helpers/Portal'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('react-addons-css-transition-group'), require('classnames'), require('react-prop-types/lib/deprecated'), require('react-prop-types/lib/isRequiredForA11y'), require('../constants/keyCodes'), require('../constants/CSSTransitionGroupTick'), require('../utils/getField'), require('../utils/toggleScroll'), require('../utils/PropTypes/oneRequiredForA11y'), require('./Dialog'), require('../Helpers/Portal'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.reactAddonsCssTransitionGroup, global.classnames, global.deprecated, global.isRequiredForA11y, global.keyCodes, global.CSSTransitionGroupTick, global.getField, global.toggleScroll, global.oneRequiredForA11y, global.Dialog, global.Portal);
    global.DialogContainer = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _reactAddonsCssTransitionGroup, _classnames, _deprecated, _isRequiredForA11y, _keyCodes, _CSSTransitionGroupTick, _getField, _toggleScroll, _oneRequiredForA11y, _Dialog, _Portal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

  var _getField2 = _interopRequireDefault(_getField);

  var _toggleScroll2 = _interopRequireDefault(_toggleScroll);

  var _oneRequiredForA11y2 = _interopRequireDefault(_oneRequiredForA11y);

  var _Dialog2 = _interopRequireDefault(_Dialog);

  var _Portal2 = _interopRequireDefault(_Portal);

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

  var DialogContainer = function (_PureComponent) {
    _inherits(DialogContainer, _PureComponent);

    function DialogContainer(props) {
      _classCallCheck(this, DialogContainer);

      var _this = _possibleConstructorReturn(this, (DialogContainer.__proto__ || Object.getPrototypeOf(DialogContainer)).call(this, props));

      var visible = typeof props.isOpen !== 'undefined' ? props.isOpen : props.visible;

      _this.state = {
        active: visible && !props.fullPage,
        overlay: visible && !props.fullPage,
        portalVisible: visible,
        dialogVisible: false
      };
      _this._setContainer = _this._setContainer.bind(_this);
      _this._handleClick = _this._handleClick.bind(_this);
      _this._handleDialogMounting = _this._handleDialogMounting.bind(_this);
      _this._mountPortal = _this._mountPortal.bind(_this);
      _this._mountDialog = _this._mountDialog.bind(_this);
      _this._unmountPortal = _this._unmountPortal.bind(_this);
      _this._handleEscClose = _this._handleEscClose.bind(_this);
      return _this;
    }
    /* eslint-disable max-len */


    _createClass(DialogContainer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!this.props.isOpen && !this.props.visible) {
          return;
        }

        (0, _toggleScroll2.default)(true);
        this._mountDialog(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var visible = typeof nextProps.isOpen !== 'undefined' ? nextProps.isOpen : nextProps.visible;
        if (this.props.isOpen === visible || this.props.visible === visible) {
          return;
        }

        var el = (0, _getField2.default)(this.props, this.context, 'renderNode') || window;
        var pageX = el.scrollX,
            pageY = el.scrollY;

        if (typeof el.scrollTop !== 'undefined' && typeof el.scrollLeft !== 'undefined') {
          pageX = el.scrollLeft;
          pageY = el.scrollTop;
        } else if (typeof el.scrollY !== 'undefined' && typeof el.scrollX !== 'undefined') {
          pageX = el.scrollX;
          pageY = el.scrollY;
        }

        this._pageX = pageX;
        this._pageY = pageY;
        (0, _toggleScroll2.default)(visible);

        if (visible) {
          this._activeElement = document.activeElement;
          this._mountPortal(nextProps);
        } else {
          this.setState({ dialogVisible: false, active: false });
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _props = this.props,
            visible = _props.visible,
            closeOnEsc = _props.closeOnEsc,
            modal = _props.modal;

        var escapable = !modal && closeOnEsc;
        var prevEscapable = !prevProps.modal && prevProps.closeOnEsc;

        // Only going to support visible here since it was not implemented before.
        if (visible === prevProps.visible && escapable === prevEscapable) {
          return;
        }

        var add = false;
        var remove = false;

        if (escapable !== prevEscapable) {
          add = visible && escapable;
          remove = !visible || prevEscapable && !escapable;
        } else if (escapable) {
          add = visible;
          remove = !visible;
        }

        if (add) {
          window.addEventListener('keydown', this._handleEscClose);
        } else if (remove) {
          window.removeEventListener('keydown', this._handleEscClose);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.isOpen || this.props.visible) {
          (0, _toggleScroll2.default)(false);
        }

        if (this.props.visible && this.props.closeOnEsc && !this.props.modal) {
          window.removeEventListener('keydown', this._handleEscClose);
        }

        if (this._inTimeout) {
          clearTimeout(this._inTimeout);
        }
      }
    }, {
      key: '_setContainer',
      value: function _setContainer(container) {
        if (container !== null) {
          this._container = (0, _reactDom.findDOMNode)(container);
        }
      }
    }, {
      key: '_handleEscClose',
      value: function _handleEscClose(e) {
        if ((e.which || e.keyCode) === _keyCodes.ESC) {
          (this.props.onHide || this.props.close)(e);
        }
      }
    }, {
      key: '_mountPortal',
      value: function _mountPortal(props) {
        this._mountDialog(props);
        this.setState({ portalVisible: true });
      }
    }, {
      key: '_mountDialog',
      value: function _mountDialog(props) {
        var _this2 = this;

        var fullPage = props.fullPage,
            onShow = props.onShow;

        this._inTimeout = setTimeout(function () {
          _this2._inTimeout = fullPage ? null : setTimeout(function () {
            _this2._inTimeout = null;
            _this2.setState({ active: true });
          }, _CSSTransitionGroupTick2.default);
          _this2.setState({ dialogVisible: true, overlay: !fullPage }, onShow);
        }, _CSSTransitionGroupTick2.default);
      }
    }, {
      key: '_unmountPortal',
      value: function _unmountPortal() {
        this.setState({ portalVisible: false });
      }
    }, {
      key: '_handleClick',
      value: function _handleClick(e) {
        var visible = typeof this.props.isOpen !== 'undefined' ? this.props.isOpen : this.props.visible;
        if (this.props.modal || !visible || e.target !== this._container) {
          return;
        }

        (this.props.onHide || this.props.close)(e);
      }
    }, {
      key: '_handleDialogMounting',
      value: function _handleDialogMounting(dialog) {
        if (dialog === null) {
          if (this._activeElement) {
            this._activeElement.focus();
          }

          this._activeElement = null;
          this.setState({ overlay: false });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            overlay = _state.overlay,
            active = _state.active,
            dialogVisible = _state.dialogVisible,
            portalVisible = _state.portalVisible;

        var _props2 = this.props,
            style = _props2.style,
            className = _props2.className,
            dialogStyle = _props2.dialogStyle,
            dialogClassName = _props2.dialogClassName,
            modal = _props2.modal,
            fullPage = _props2.fullPage,
            component = _props2.component,
            transitionEnterTimeout = _props2.transitionEnterTimeout,
            transitionLeaveTimeout = _props2.transitionLeaveTimeout,
            lastChild = _props2.lastChild,
            props = _objectWithoutProperties(_props2, ['style', 'className', 'dialogStyle', 'dialogClassName', 'modal', 'fullPage', 'component', 'transitionEnterTimeout', 'transitionLeaveTimeout', 'lastChild']);

        delete props.renderNode;
        delete props.close;
        delete props.isOpen;
        delete props.visible;
        delete props.onShow;
        delete props.onHide;
        delete props.actionLeft;
        delete props.actionRight;
        delete props.transitionName;
        delete props.transitionEnter;
        delete props.transitionLeave;
        delete props.closeOnEsc;

        var renderNode = (0, _getField2.default)(this.props, this.context, 'renderNode');

        var dialog = _react2.default.createElement(_Dialog2.default, _extends({
          key: 'dialog',
          style: dialogStyle,
          className: dialogClassName,
          ref: this._handleDialogMounting,
          fullPage: fullPage
        }, props, {
          containerX: this._pageX,
          containerY: this._pageY,
          onLeave: this._unmountPortal
        }));

        return _react2.default.createElement(
          _Portal2.default,
          { visible: portalVisible, renderNode: renderNode, lastChild: lastChild },
          _react2.default.createElement(
            _reactAddonsCssTransitionGroup2.default,
            {
              component: component,
              ref: this._setContainer,
              style: style,
              className: (0, _classnames2.default)('md-dialog-container', {
                'md-overlay': !fullPage && overlay,
                'md-pointer--hover': !fullPage && overlay && !modal,
                'md-overlay--active': !fullPage && active && overlay
              }, className),
              transitionName: 'md-dialog--' + (fullPage ? 'full-page' : 'centered'),
              transitionEnterTimeout: transitionEnterTimeout,
              transitionLeaveTimeout: transitionLeaveTimeout,
              onClick: this._handleClick
            },
            dialogVisible ? dialog : null
          )
        );
      }
    }]);

    return DialogContainer;
  }(_react.PureComponent);

  DialogContainer.propTypes = {
    /**
     * An id to use for the `Dialog` once it has been opened. This is used for the
     * [dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role).
     * This is used to generate an `id` for the `title` prop when it has been defined.
     */
    id: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])),
    /* eslint-enable max-len */

    /**
     * An optional accessibility prop to use when the `Dialog` is opened. This should be an id
     * pointing to some text that describes the content of the dialog. For accessibility
     * reasons, one of the following props must be defined:
     * - `title`
     * - `aria-describedby`
     * - `aria-labelledby`
     * - `aria-label`
     *
     * An example usage:
     *
     * ```js
     * <Dialog id="accessibleExample" visible aria-describedby="accessibleContent">
     *   <p id="accessibleContent">This is some content that describes the dialog.</p>
     * </Dialog>
     * ```
     */
    'aria-describedby': (0, _oneRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]), 'title', 'aria-labelledby', 'aria-label'),

    /**
     * An optional accessibility prop to use when the `title` prop is not given. This should be
     * an id pointing to a `h` tag that labels the dialog.
     *
     * An example usage:
     *
     * ```js
     * <Dialog visible id="accessibleExample" aria-labelledby="accessibleDialogLabel">
     *   <h2 id="accessibleDialogLabel">Some Accessible Dialog</h2>
     * </Dialog>
     * ```
     */
    'aria-labelledby': _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * An optional accessibility prop to use when the `title` and `aria-labelledby` props are
     * not defined. This should be a string that describes what is in the `Dialog`.
     *
     * An example usage:
     *
     * ```js
     * <Dialog visible id="accessibleExample" aria-label="Some Accessible Dialog">
     *   <p>Lorem Ipsum</p>
     * </Dialog>
     * ```
     */
    'aria-label': _react.PropTypes.string,

    /**
     * An optional style to apply to the dialog's container.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the dialog's container.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to the dialog itself when the `visible` prop is `true`.
     */
    dialogStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the dialog itself when the `visible` prop is `true`.
     */
    dialogClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the dialog's content.
     */
    contentStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the dialog's content.
     */
    contentClassName: _react.PropTypes.string,

    /**
     * The component to render the dialog's container in.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,

    /**
     * The component to render the dialog's content in.
     */
    contentComponent: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,

    /**
     * The content to display in the dialog once open.
     */
    children: _react.PropTypes.node,

    /**
     * A single action or a list of actions to display in the dialog. This can either be a list
     * of `FlatButton` props or `<Button flat {...props} />` elements.
     */
    actions: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object]))]),

    /**
     * Bolean if the `Dialog` is current visible.
     */
    visible: _react.PropTypes.bool.isRequired,

    /**
     * An optional function to call when the `visible` prop is changed from `false` to `true`.
     */
    onShow: _react.PropTypes.func,

    /**
     * A function to call that will close the dialog. This is required when the `modal` and `fullPage`
     * props are not `true`.
     */
    onHide: function onHide(props, propName) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      var validator = _react.PropTypes.func;
      if (!props.modal && !props.fullPage) {
        validator = validator.isRequired;
      }

      return validator.apply(undefined, [props, propName].concat(args));
    },

    /**
     * Boolean if the dialog should behave like a modal. This means that the dialog can only
     * be closed by clicking on an action instead of also clicking on the overlay.
     */
    modal: _react.PropTypes.bool,

    /**
     * Boolean if the dialog should be displayed as a full page dialog.
     */
    fullPage: function fullPage(props, propName, componentName) {
      for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        args[_key2 - 3] = arguments[_key2];
      }

      if (typeof props[propName] === 'undefined') {
        return null;
      }
      var componentNameSafe = componentName || '<<anonymous>>';

      var err = _react.PropTypes.bool.apply(_react.PropTypes, [props, propName, componentName].concat(args));

      if (!err && typeof props.title !== 'undefined') {
        err = new Error('You provided a `title` ' + location + ' to the `' + componentNameSafe + '` when `fullPage` ' + 'has been set to true. A title for a full page dialog should be rendered as a child instead.');
      }

      return err;
    },

    /**
     * An optional pageX location to use when rendering a full page dialog. This is used to set the location
     * the dialog should appear from.
     */
    pageX: _react.PropTypes.number,

    /**
     * An optional pageY location to use when rendering a full page dialog. This is used to set the location
     * the dialog should appear from.
     */
    pageY: _react.PropTypes.number,

    /**
     * Boolean if the dialog should focus one of children once it has mounted.
     */
    focusOnMount: _react.PropTypes.bool.isRequired,

    /**
     * The transition enter timeout for the dialog.
     */
    transitionEnterTimeout: _react.PropTypes.number.isRequired,

    /**
     * The transition leave timeout for the dialog.
     */
    transitionLeaveTimeout: _react.PropTypes.number.isRequired,

    /**
     * Boolean if the dialog should be closeable by pressing the escape key.
     * This will always be considered `false` of the `modal` props is `true`.
     */
    closeOnEsc: _react.PropTypes.bool,

    /**
     * Since the `Dialog` uses the `Portal` component, you can pass an optional HTML Node to render
     * the dialog in instead of the `document.body`.
     */
    renderNode: _react.PropTypes.object,

    /**
     * Boolean if the dialog should be rendered as the last child in the `renderNode` or `body` instead
     * of as the first.
     */
    lastChild: _react.PropTypes.bool,

    isOpen: (0, _deprecated2.default)(_react.PropTypes.bool, 'Use `visible` instead'),
    transitionName: (0, _deprecated2.default)(_react.PropTypes.string, 'The transition name will be managed by the component'),
    transitionEnter: (0, _deprecated2.default)(_react.PropTypes.bool, 'The transition will always be enforced'),
    transitionLeave: (0, _deprecated2.default)(_react.PropTypes.bool, 'The transition will always be enforced'),
    actionLeft: (0, _deprecated2.default)(_react.PropTypes.node, 'Use the `fullPage` prop instead'),
    actionRight: (0, _deprecated2.default)(_react.PropTypes.node, 'Use the `fullPage` prop instead'),
    close: (0, _deprecated2.default)(_react.PropTypes.func, 'Use `onHide` instead.')
  };
  DialogContainer.defaultProps = {
    component: 'span',
    closeOnEsc: true,
    contentComponent: 'section',
    focusOnMount: true,
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300
  };
  DialogContainer.contextTypes = {
    renderNode: _react.PropTypes.object
  };
  exports.default = DialogContainer;
});