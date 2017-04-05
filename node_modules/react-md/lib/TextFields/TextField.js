(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'classnames', 'react-prop-types/lib/deprecated', 'react-prop-types/lib/isRequiredForA11y', '../constants/keyCodes', '../utils/PropTypes/controlled', '../utils/PropTypes/invalidIf', '../utils/PropTypes/minNumber', '../utils/StringUtils/addSuffix', './FloatingLabel', './TextFieldMessage', './PasswordButton', './InputField', './TextFieldDivider'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('classnames'), require('react-prop-types/lib/deprecated'), require('react-prop-types/lib/isRequiredForA11y'), require('../constants/keyCodes'), require('../utils/PropTypes/controlled'), require('../utils/PropTypes/invalidIf'), require('../utils/PropTypes/minNumber'), require('../utils/StringUtils/addSuffix'), require('./FloatingLabel'), require('./TextFieldMessage'), require('./PasswordButton'), require('./InputField'), require('./TextFieldDivider'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.classnames, global.deprecated, global.isRequiredForA11y, global.keyCodes, global.controlled, global.invalidIf, global.minNumber, global.addSuffix, global.FloatingLabel, global.TextFieldMessage, global.PasswordButton, global.InputField, global.TextFieldDivider);
    global.TextField = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _classnames, _deprecated, _isRequiredForA11y, _keyCodes, _controlled, _invalidIf, _minNumber, _addSuffix, _FloatingLabel, _TextFieldMessage, _PasswordButton, _InputField, _TextFieldDivider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _invalidIf2 = _interopRequireDefault(_invalidIf);

  var _minNumber2 = _interopRequireDefault(_minNumber);

  var _addSuffix2 = _interopRequireDefault(_addSuffix);

  var _FloatingLabel2 = _interopRequireDefault(_FloatingLabel);

  var _TextFieldMessage2 = _interopRequireDefault(_TextFieldMessage);

  var _PasswordButton2 = _interopRequireDefault(_PasswordButton);

  var _InputField2 = _interopRequireDefault(_InputField);

  var _TextFieldDivider2 = _interopRequireDefault(_TextFieldDivider);

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

  var TextField = function (_PureComponent) {
    _inherits(TextField, _PureComponent);

    function TextField(props) {
      _classCallCheck(this, TextField);

      var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

      var currentLength = 0;
      if (typeof props.value !== 'undefined') {
        currentLength = props.value.length;
      } else if (typeof props.defaultValue !== 'undefined') {
        currentLength = props.defaultValue.length;
      }

      _this.state = {
        active: false,
        error: false,
        floating: !!props.defaultValue || !!props.value,
        passwordVisible: props.passwordInitiallyVisible,
        height: null,
        currentLength: currentLength
      };

      _this.focus = _this.focus.bind(_this);
      _this.getField = _this.getField.bind(_this);
      _this._blur = _this._blur.bind(_this);
      _this._setField = _this._setField.bind(_this);
      _this._setDivider = _this._setDivider.bind(_this);
      _this._setMessage = _this._setMessage.bind(_this);
      _this._setContainer = _this._setContainer.bind(_this);
      _this._setPasswordBtn = _this._setPasswordBtn.bind(_this);
      _this._setFloatingLabel = _this._setFloatingLabel.bind(_this);
      _this._handleFocus = _this._handleFocus.bind(_this);
      _this._handleChange = _this._handleChange.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      _this._handleHeightChange = _this._handleHeightChange.bind(_this);
      _this._handleOutsideClick = _this._handleOutsideClick.bind(_this);
      _this._updateMultilineHeight = _this._updateMultilineHeight.bind(_this);
      _this._togglePasswordField = _this._togglePasswordField.bind(_this);
      _this._handleContainerClick = _this._handleContainerClick.bind(_this);
      return _this;
    }

    _createClass(TextField, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this._isMultiline(this.props)) {
          this._updateMultilineHeight();
          window.addEventListener('resize', this._updateMultilineHeight);
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var multiline = this._isMultiline(nextProps);
        if (this._isMultiline(this.props) !== multiline) {
          this._updateMultilineHeight(nextProps);
          window[(multiline ? 'add' : 'remove') + 'EventListener']('resize', this._updateMultilineHeight);
        }

        if (this.props.value !== nextProps.value) {
          var value = typeof nextProps.value !== 'undefined' ? nextProps.value.toString() : '';
          var error = this.state.error;

          if (nextProps.maxLength) {
            error = value.length > nextProps.maxLength;
          } else if (nextProps.required && error) {
            error = !value;
          }

          this.setState({
            error: error,
            floating: !!value || this.state.floating && this.state.active,
            currentLength: value.length
          });
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var _props = this.props,
            block = _props.block,
            active = _props.active;

        if (block !== prevProps.block || active !== prevProps.active || this.state.active !== prevState.active) {
          var fn = window[(active || this.state.active ? 'add' : 'remove') + 'EventListener'];
          fn('mousedown', this._handleOutsideClick);
          fn('touchstart', this._handleOutsideClick);
        }

        if (this._isMultiline(this.props) && !this._isMultiline(prevProps)) {
          this._updateMultilineHeight(this.props);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var active = this.props.active;

        var rm = window.removeEventListener;
        if (active || this.state.active) {
          rm('mousedown', this._handleOutsideClick);
          rm('touchstart', this._handleOutsideClick);
        }

        if (this._isMultiline(this.props)) {
          rm('resize', this._updateMultilineHeight);
        }
      }
    }, {
      key: 'getField',
      value: function getField() {
        return this._field.getField();
      }
    }, {
      key: 'focus',
      value: function focus() {
        this._field.focus();
      }
    }, {
      key: '_isMultiline',
      value: function _isMultiline(props) {
        return typeof props.rows !== 'undefined';
      }
    }, {
      key: '_cloneIcon',
      value: function _cloneIcon(icon, active, error, disabled, stateful, block, dir) {
        if (!icon) {
          return icon;
        }

        try {
          var iconEl = _react.Children.only(icon);
          return (0, _react.cloneElement)(iconEl, {
            key: 'icon-' + dir,
            className: (0, _classnames2.default)('md-text-field-icon', {
              'md-text-field-icon--positioned': !block,
              'md-text-field-icon--disabled': disabled,
              'md-text-field-icon--active': stateful && !error && active,
              'md-text-field-icon--error': stateful && error
            }, iconEl.props.className)
          });
        } catch (e) {
          return icon;
        }
      }
    }, {
      key: '_setField',
      value: function _setField(field) {
        if (field !== null) {
          this._field = field;
        }
      }
    }, {
      key: '_setMessage',
      value: function _setMessage(message) {
        if (message !== null) {
          this._message = (0, _reactDom.findDOMNode)(message);
        }
      }
    }, {
      key: '_setDivider',
      value: function _setDivider(divider) {
        if (divider !== null) {
          this._divider = (0, _reactDom.findDOMNode)(divider);
        }
      }
    }, {
      key: '_setContainer',
      value: function _setContainer(container) {
        if (container !== null) {
          this._node = container;
        }
      }
    }, {
      key: '_setPasswordBtn',
      value: function _setPasswordBtn(btn) {
        if (btn !== null) {
          this._password = (0, _reactDom.findDOMNode)(btn);
        }
      }
    }, {
      key: '_setFloatingLabel',
      value: function _setFloatingLabel(label) {
        if (label !== null) {
          this._label = (0, _reactDom.findDOMNode)(label);
        }
      }
    }, {
      key: '_handleContainerClick',
      value: function _handleContainerClick(e) {
        if (this.props.onClick) {
          this.props.onClick(e);
        }

        if (!this.props.disabled) {
          this.focus();
        }
      }
    }, {
      key: '_updateMultilineHeight',
      value: function _updateMultilineHeight() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        var block = props.block;

        var multiline = this._isMultiline(props);
        if (!multiline) {
          return;
        }

        var cs = window.getComputedStyle((0, _reactDom.findDOMNode)(this._field));
        this._additionalHeight = parseInt(cs.getPropertyValue('margin-top'), 10);

        if (!block) {
          var mb = parseInt(window.getComputedStyle(this._divider).getPropertyValue('margin-bottom'), 10);
          this._additionalHeight += mb === 4 ? 12 : 16;
        }

        if (this._message) {
          this._additionalHeight += this._message.offsetHeight;
        }
      }
    }, {
      key: '_blur',
      value: function _blur() {
        var value = this._field.getValue();

        var state = { active: false, error: this.props.required && !value };
        if (!this.props.block) {
          state.floating = !!value;
        }

        this.setState(state);
      }
    }, {
      key: '_handleOutsideClick',
      value: function _handleOutsideClick(e) {
        if (!this._node.contains(e.target)) {
          this._blur();
        }
      }
    }, {
      key: '_handleFocus',
      value: function _handleFocus(e) {
        var _props2 = this.props,
            onFocus = _props2.onFocus,
            block = _props2.block;

        if (onFocus) {
          onFocus(e);
        }

        var state = { active: true };
        if (!block) {
          state.floating = true;
        }

        this.setState(state);
      }
    }, {
      key: '_handleChange',
      value: function _handleChange(e) {
        var _props3 = this.props,
            onChange = _props3.onChange,
            maxLength = _props3.maxLength,
            required = _props3.required;

        if (onChange) {
          onChange(e.target.value, e);
        }

        var currentLength = e.target.value.length;
        if (typeof maxLength !== 'undefined') {
          this.setState({ currentLength: currentLength, error: currentLength > maxLength });
        } else if (required && this.state.error) {
          this.setState({ error: !currentLength });
        }
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        if (this.props.onKeyDown) {
          this.props.onKeyDown(e);
        }

        if ((e.which || e.keyCode) === _keyCodes.TAB) {
          this._blur();
        }
      }
    }, {
      key: '_togglePasswordField',
      value: function _togglePasswordField() {
        this.setState({ passwordVisible: !this.state.passwordVisible }, this.focus);
      }
    }, {
      key: '_handleHeightChange',
      value: function _handleHeightChange(height) {
        if (this._additionalHeight) {
          this.setState({ height: height + this._additionalHeight });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            currentLength = _state.currentLength,
            passwordVisible = _state.passwordVisible,
            height = _state.height;

        var _props4 = this.props,
            id = _props4.id,
            type = _props4.type,
            style = _props4.style,
            className = _props4.className,
            inputStyle = _props4.inputStyle,
            inputClassName = _props4.inputClassName,
            block = _props4.block,
            fullWidth = _props4.fullWidth,
            required = _props4.required,
            customSize = _props4.customSize,
            maxLength = _props4.maxLength,
            errorText = _props4.errorText,
            helpText = _props4.helpText,
            helpOnFocus = _props4.helpOnFocus,
            disabled = _props4.disabled,
            leftIconStateful = _props4.leftIconStateful,
            rightIconStateful = _props4.rightIconStateful,
            passwordIconChildren = _props4.passwordIconChildren,
            passwordIconClassName = _props4.passwordIconClassName,
            lineDirection = _props4.lineDirection,
            paddedBlock = _props4.paddedBlock,
            onDoubleClick = _props4.onDoubleClick,
            onTouchStart = _props4.onTouchStart,
            onTouchMove = _props4.onTouchMove,
            onTouchCancel = _props4.onTouchCancel,
            onTouchEnd = _props4.onTouchEnd,
            onMouseDown = _props4.onMouseDown,
            onMouseUp = _props4.onMouseUp,
            onMouseOver = _props4.onMouseOver,
            onMouseLeave = _props4.onMouseLeave,
            ink = _props4.ink,
            inlineIndicator = _props4.inlineIndicator,
            icon = _props4.icon,
            props = _objectWithoutProperties(_props4, ['id', 'type', 'style', 'className', 'inputStyle', 'inputClassName', 'block', 'fullWidth', 'required', 'customSize', 'maxLength', 'errorText', 'helpText', 'helpOnFocus', 'disabled', 'leftIconStateful', 'rightIconStateful', 'passwordIconChildren', 'passwordIconClassName', 'lineDirection', 'paddedBlock', 'onDoubleClick', 'onTouchStart', 'onTouchMove', 'onTouchCancel', 'onTouchEnd', 'onMouseDown', 'onMouseUp', 'onMouseOver', 'onMouseLeave', 'ink', 'inlineIndicator', 'icon']);

        delete props.label;
        delete props.placeholder;
        delete props.error;
        delete props.active;
        delete props.floating;
        delete props.leftIcon;
        delete props.rightIcon;
        delete props.adjustMinWidth;
        delete props.onClick;
        delete props.onChange;
        delete props.onKeyDown;
        delete props.onFocus;
        delete props.floatingLabel;

        var _props5 = this.props,
            label = _props5.label,
            placeholder = _props5.placeholder,
            error = _props5.error,
            active = _props5.active,
            floating = _props5.floating,
            leftIcon = _props5.leftIcon,
            rightIcon = _props5.rightIcon;

        active = active || this.state.active;
        error = error || this.state.error;
        floating = floating || this.state.floating;

        if (required) {
          if (label) {
            label = (0, _addSuffix2.default)(label, '*');
          }

          if (placeholder && !label) {
            placeholder = (0, _addSuffix2.default)(placeholder, '*');
          }
        }

        if (label && !floating) {
          placeholder = null;
        }

        leftIcon = this._cloneIcon(icon || leftIcon, active, error, disabled, leftIconStateful, block, 'left');
        if (type === 'password' && !disabled) {
          rightIcon = _react2.default.createElement(_PasswordButton2.default, {
            key: 'password-btn',
            ref: this._setPasswordBtn,
            onClick: this._togglePasswordField,
            active: active,
            passwordVisible: passwordVisible,
            iconChildren: passwordIconChildren,
            iconClassName: passwordIconClassName,
            block: block,
            floating: !!label
          });
        } else if (inlineIndicator) {
          var el = _react.Children.only(inlineIndicator);
          rightIcon = (0, _react.cloneElement)(inlineIndicator, {
            key: 'icon-right',
            className: (0, _classnames2.default)('md-text-field-inline-indicator', {
              'md-text-field-inline-indicator--floating': label,
              'md-text-field-inline-indicator--block': block
            }, el.props.className)
          });
        } else {
          rightIcon = this._cloneIcon(rightIcon, active, error, disabled, rightIconStateful, block, 'right');
        }
        var rightIconed = !!rightIcon && type !== 'password' && !inlineIndicator;

        var floatingLabel = _react2.default.createElement(_FloatingLabel2.default, {
          key: 'label',
          ref: this._setFloatingLabel,
          label: label,
          htmlFor: id,
          active: active,
          error: error,
          floating: floating,
          customSize: customSize,
          disabled: disabled,
          iconOffset: !!leftIcon
        });

        var message = _react2.default.createElement(_TextFieldMessage2.default, {
          key: 'message',
          ref: this._setMessage,
          active: active,
          error: error,
          errorText: errorText,
          helpText: helpText,
          helpOnFocus: helpOnFocus,
          block: block,
          maxLength: maxLength,
          leftIcon: !!leftIcon,
          rightIcon: !!rightIcon,
          currentLength: currentLength
        });

        var field = _react2.default.createElement(_InputField2.default, _extends({}, props, {
          key: 'field',
          ref: this._setField,
          id: id,
          type: type,
          label: label,
          style: inputStyle,
          className: inputClassName,
          disabled: disabled,
          customSize: customSize,
          fullWidth: fullWidth,
          passwordVisible: passwordVisible,
          placeholder: placeholder,
          block: block,
          onFocus: this._handleFocus,
          onKeyDown: this._handleKeyDown,
          onChange: this._handleChange,
          onHeightChange: this._handleHeightChange,
          inlineIndicator: !!inlineIndicator
        }));

        var divider = void 0;
        if (!block) {
          divider = _react2.default.createElement(_TextFieldDivider2.default, {
            key: 'text-divider',
            ref: this._setDivider,
            active: active,
            error: error,
            lineDirection: lineDirection
          });
        }

        var children = void 0;
        if (leftIcon || rightIconed) {
          children = _react2.default.createElement(
            'div',
            { key: 'icon-divider', className: 'md-text-field-icon-container' },
            leftIcon,
            _react2.default.createElement(
              'div',
              {
                key: 'divider-container',
                className: (0, _classnames2.default)('md-text-field-divider-container', {
                  'md-text-field-divider-container--grow': fullWidth
                })
              },
              field,
              divider
            ),
            rightIcon
          );
        } else {
          children = [leftIcon, field, divider, rightIcon];
        }

        children = [floatingLabel, children, message];

        var multiline = this._isMultiline(this.props);
        return _react2.default.createElement(
          'div',
          {
            ref: this._setContainer,
            style: Object.assign({}, style, { height: height }),
            className: (0, _classnames2.default)('md-text-field-container', {
              'md-inline-block': !fullWidth && !block,
              'md-full-width': block || fullWidth,
              'md-text-field-container--disabled': disabled,
              'md-text-field-container--input': typeof props.rows === 'undefined',
              'md-text-field-container--input-block': block && !multiline,
              'md-text-field-container--multiline': multiline,
              'md-text-field-container--multiline-block': multiline && block,
              'md-text-field-container--padded-block': block && paddedBlock
            }, className),
            onClick: this._handleContainerClick,
            onDoubleClick: onDoubleClick,
            onMouseOver: onMouseOver,
            onMouseLeave: onMouseLeave,
            onMouseDown: onMouseDown,
            onMouseUp: onMouseUp,
            onTouchStart: onTouchStart,
            onTouchEnd: onTouchEnd,
            onTouchCancel: onTouchCancel,
            onTouchMove: onTouchMove
          },
          ink,
          children
        );
      }
    }]);

    return TextField;
  }(_react.PureComponent);

  TextField.propTypes = {
    /**
     * An optional style to apply to the text field's container.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the text field's container.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to the `input` or `textarea` tag.
     */
    inputStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the `input` or `textarea` tag.
     */
    inputClassName: _react.PropTypes.string,

    /**
     * An optional value to apply to the text field. This will make the component
     * controlled and require the `onChange` prop.
     */
    value: (0, _controlled2.default)(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), 'onChange'),

    /**
     * An optional default value for the text field.
     */
    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

    /**
     * Boolean if the text field should be displayed as a `block`. This is equivalent to
     * the `full width` text field in the Material Design specs. This view will disable
     * floating labels and remove the text divider from the component.
     */
    block: function block(props, propName, component) {
      for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        others[_key - 3] = arguments[_key];
      }

      var err = _react.PropTypes.bool.apply(_react.PropTypes, [props, propName, component].concat(others));
      if (!err && props[propName] && props.label) {
        err = new Error('The `' + component + '` is unable to have a `label` and be displayed as `block`. ' + ('If you would like a `label` for the block `' + component + '`, please use the `placeholder` prop.'));
      }

      return err;
    },

    /**
     * Boolean if the `block` text field should include padding to the left and right of
     * the text field.
     */
    paddedBlock: _react.PropTypes.bool,

    /**
     * Boolean if the text field is currently disabled.
     */
    disabled: _react.PropTypes.bool,

    /**
     * An optional label to display with the text field. This will convert the text field
     * into a floating label text field. You can make it single line by only using the
     * `placeholder` prop.
     */
    label: _react.PropTypes.string,

    /**
     * An optional placeholder text to display in the text field. If there is no `label` prop,
     * the text field will be displayed as a single line text field. If there is a `label` prop,
     * this will only be visible when there is no value and the user focused the text field.
     */
    placeholder: _react.PropTypes.string,

    /**
     * The id for the text field.  This is required for a11y if the `label` prop is defined.
     */
    id: function id(props, propName, component) {
      for (var _len2 = arguments.length, others = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        others[_key2 - 3] = arguments[_key2];
      }

      var validator = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);
      if (typeof props.label !== 'undefined') {
        return (0, _isRequiredForA11y2.default)(validator).apply(undefined, [props, propName, component].concat(others));
      }

      return validator.apply(undefined, [props, propName, component].concat(others));
    },

    /**
     * The type for the text field. This is one of the most import props for mobile accessibility
     * as it will update the keyboard for the text type. This does not get applied on multiline
     * text fields.
     */
    type: _react.PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url', 'password']).isRequired,

    /**
     * An optional function to call when the text field's container triggers the `click` event.
     */
    onClick: _react.PropTypes.func,

    /**
     * An optional function to call when the text field's container triggers the `doubleclick`
     * event.
     */
    onDoubleClick: _react.PropTypes.func,

    /**
     * An optional function to call when the text field's container triggers the `touchstart`
     * event.
     */
    onTouchStart: _react.PropTypes.func,

    /**
     * An optional function to call when the text field's container triggers the `touchmove`
     * event.
     */
    onTouchMove: _react.PropTypes.func,

    /**
     * An optional function to call when the text field's container triggers the `touchcancel`
     * event.
     */
    onTouchCancel: _react.PropTypes.func,

    /**
     * An optional function to call when the text field's container triggers the `touchend`
     * event.
     */
    onTouchEnd: _react.PropTypes.func,

    /**
     * An optional function to call when the text field's container triggers the `mousedown`
     * event.
     */
    onMouseDown: _react.PropTypes.func,

    /**
     * An optional function to call when the text field's container triggers the `mouseup`
     * event.
     */
    onMouseUp: _react.PropTypes.func,

    /**
     * An optional function to call when the text field's container triggers the `mouseover`
     * event.
     */
    onMouseOver: _react.PropTypes.func,

    /**
     * An optional function to call when the text field's container triggers the `mouseleave`
     * event.
     */
    onMouseLeave: _react.PropTypes.func,

    /**
     * An optional onChange function to call. If the `value` prop is true, this is
     * required.
     *
     * When the value changes in the text field, this will be called with the new text
     * field's value and the change event.
     *
     * ```js
     * onChange(e.target.value, e);
     * ```
     */
    onChange: _react.PropTypes.func,

    /**
     * An optional function to call when the text field is focused.
     */
    onFocus: _react.PropTypes.func,

    /**
     * An optional function to call when the text field has the `keydown` event.
     */
    onKeyDown: _react.PropTypes.func,

    /**
     * An optional boolean if the `active` state of the text field can be externally
     * modified as well. The text field is usually considered active when it gains focus.
     *
     * If this prop is set, it will check both the active prop and the active state to
     * determine if one is true.
     */
    active: _react.PropTypes.bool,

    /**
     * An optional boolean if the `error` state of the text field can be externally
     * modified as well. The text field is usually considered errored when it is required
     * and there is no value or the current length of the text field's value is greater
     * than the `maxLength` prop.
     *
     * If this prop is set, it will check both the error prop and the error state to
     * determine if one is true.
     */
    error: _react.PropTypes.bool,

    /**
     * An optional boolean if the `floating` state of the text field's floating label can be
     * externally modified as well. The floating state is true when the tet field gains focus
     * or there is a value in the text field.
     *
     * If this prop is set, it will check both the floating prop and the floating state to
     * determine if one is true.
     */
    floating: _react.PropTypes.bool,

    /**
     * Boolean if the text field is required. If the user blurs the text field while there is
     * no value and it is required, the `error` state will be set to true.
     */
    required: _react.PropTypes.bool,

    /**
     * The direction that the underline should appear from.
     */
    lineDirection: _react.PropTypes.oneOf(['left', 'center', 'right']).isRequired,

    /**
     * An optional icon to place to the left of the text field.
     */
    leftIcon: _react.PropTypes.element,

    /**
     * Boolean if the left icon should be stateful. This means that the icon will
     * gain the active or error colors with the text field.
     */
    leftIconStateful: _react.PropTypes.bool,

    /**
     * An optional icon to place to the right of the text field.
     */
    rightIcon: _react.PropTypes.element,

    /**
     * Boolean if the right icon should be stateful. This means that the icon will
     * gain the active or error colors with the text field.
     */
    rightIconStateful: _react.PropTypes.bool,

    /**
     * Any children used to display the password icon.
     */
    passwordIconChildren: _react.PropTypes.node,

    /**
     * The icon className for the password icon.
     */
    passwordIconClassName: _react.PropTypes.string,

    /**
     * Boolean if the password is initially visible.
     */
    passwordInitiallyVisible: _react.PropTypes.bool,

    /**
     * Boolean if the text field should be displayed as full width.
     */
    fullWidth: _react.PropTypes.bool,

    /**
     * The number of rows for the `multiline` text field. This value must be greater than
     * or equal to 2. When this value is set, the text field will be converted to a multiline
     * field.
     */
    rows: (0, _minNumber2.default)(2, false),

    /**
     * The maximum number of rows for a `multiline` text field. If this value is
     * `undefined`, `0`, or a number less than `0`, the multiline text field will
     * infinitely expand.
     */
    maxRows: _react.PropTypes.number,

    /**
     * An optional customsize to apply to the text field. This is used along with
     * the `$md-text-field-custom-sizes` variable. It basically applies a className of
     * `md-text-field--NAME`.
     */
    customSize: _react.PropTypes.string,

    /**
     * An optional error text to display below the text field. This will only appear when
     * the text field has the `error` state through the `error` prop, the current length
     * of the text field's value is greater than the `maxLength` prop, or the field is
     * required and the user blurs the text field with no value.
     */
    errorText: (0, _invalidIf2.default)(_react.PropTypes.string, 'block'),

    /**
     * An optional help text to display below the text field. This will always be visible
     * unless the `helpOnFocus` prop is set to true. Otherwise it will appear on focus.
     */
    helpText: (0, _invalidIf2.default)(_react.PropTypes.string, 'block'),

    /**
     * Boolean if the help text should display on focus only.
     */
    helpOnFocus: _react.PropTypes.bool,

    /**
     * An optional max length for the text field. This will insert a counter underneath the
     * text field that appears on focus.
     */
    maxLength: _react.PropTypes.number,

    /**
     * The ink when there is an injectInk above the text field. Used from the SelectField.
     *
     * @access private
     */
    ink: _react.PropTypes.node,

    /**
     * An optional element to display inside of the `TextField` to the farthest right. This will
     * position the indicator absolutely and add some additional padding to the `TextField`.
     */
    inlineIndicator: _react.PropTypes.element,

    icon: (0, _deprecated2.default)(_react.PropTypes.node, 'Use the `leftIcon` or `rightIcon` prop instead'),
    floatingLabel: (0, _deprecated2.default)(_react.PropTypes.bool, 'The `label` prop is now always floating. To create a non-floating text field, only use the `placeholder` prop'),
    adjustMinWidth: (0, _deprecated2.default)(_react.PropTypes.bool, 'Manually add a min width style instead')
  };
  TextField.defaultProps = {
    type: 'text',
    lineDirection: 'left',
    passwordIconChildren: 'remove_red_eye',
    leftIconStateful: true,
    rightIconStateful: true,
    fullWidth: true
  };
  exports.default = TextField;
});