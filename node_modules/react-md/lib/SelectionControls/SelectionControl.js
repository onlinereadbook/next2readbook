(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', 'react-prop-types/lib/deprecated', 'react-prop-types/lib/isRequiredForA11y', '../utils/getField', '../utils/StringUtils/capitalizeFirst', '../Helpers/AccessibleFakeInkedButton', '../FontIcons/FontIcon', './SwitchTrack'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('react-prop-types/lib/deprecated'), require('react-prop-types/lib/isRequiredForA11y'), require('../utils/getField'), require('../utils/StringUtils/capitalizeFirst'), require('../Helpers/AccessibleFakeInkedButton'), require('../FontIcons/FontIcon'), require('./SwitchTrack'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.deprecated, global.isRequiredForA11y, global.getField, global.capitalizeFirst, global.AccessibleFakeInkedButton, global.FontIcon, global.SwitchTrack);
    global.SelectionControl = mod.exports;
  }
})(this, function (exports, _react, _classnames, _deprecated, _isRequiredForA11y, _getField, _capitalizeFirst, _AccessibleFakeInkedButton, _FontIcon, _SwitchTrack) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _getField2 = _interopRequireDefault(_getField);

  var _capitalizeFirst2 = _interopRequireDefault(_capitalizeFirst);

  var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

  var _FontIcon2 = _interopRequireDefault(_FontIcon);

  var _SwitchTrack2 = _interopRequireDefault(_SwitchTrack);

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

  /**
   * Prevents a second warning from appearing when using the deprecated or a11y required
   * props by using the `__superSecretProp`.... So secret!
   */
  function preventDouble(validator) {
    return function validate(props, propName) {
      for (var _len = arguments.length, others = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        others[_key - 2] = arguments[_key];
      }

      var err = validator.apply(undefined, [props, propName].concat(others));
      if (err && props.__superSecreteProp) {
        err = null;
      }

      return err;
    };
  }

  /**
   * The `SelectionControl` component is used to render any of the `Radio`, `Checkbox`, or `Switch`
   * selection control type. This component might eventually replace all three since they use this
   * anyways. I am not sure yet though.
   */

  var SelectionControl = function (_PureComponent) {
    _inherits(SelectionControl, _PureComponent);

    function SelectionControl(props) {
      _classCallCheck(this, SelectionControl);

      var _this = _possibleConstructorReturn(this, (SelectionControl.__proto__ || Object.getPrototypeOf(SelectionControl)).call(this, props));

      _this.state = {};
      if (typeof props.checked === 'undefined') {
        _this.state.checked = !!props.defaultChecked;
      }

      _this._setInput = _this._setInput.bind(_this);
      _this._setControl = _this._setControl.bind(_this);
      _this._setContainer = _this._setContainer.bind(_this);
      _this._handleChange = _this._handleChange.bind(_this);
      _this._handleControlClick = _this._handleControlClick.bind(_this);
      _this._getIcon = _this._getIcon.bind(_this);
      return _this;
    }

    _createClass(SelectionControl, [{
      key: '_setInput',
      value: function _setInput(input) {
        this._input = input;
      }
    }, {
      key: '_setControl',
      value: function _setControl(control) {
        this._control = control;
      }
    }, {
      key: '_setContainer',
      value: function _setContainer(container) {
        this._container = container;
      }
    }, {
      key: '_getIcon',
      value: function _getIcon() {
        var _props = this.props,
            checkedIcon = _props.checkedIcon,
            uncheckedIcon = _props.uncheckedIcon,
            type = _props.type;

        var checked = (0, _getField2.default)(this.props, this.state, 'checked');
        if (checkedIcon || uncheckedIcon) {
          return checked ? checkedIcon : uncheckedIcon;
        }

        var prefix = (checked ? '' : 'un') + 'checked' + (0, _capitalizeFirst2.default)(type) + 'Icon';
        return _react2.default.createElement(
          _FontIcon2.default,
          { iconClassName: this.props[prefix + 'ClassName'] },
          this.props[prefix + 'Children']
        );
      }
    }, {
      key: '_handleChange',
      value: function _handleChange(e) {
        var _props2 = this.props,
            type = _props2.type,
            onChange = _props2.onChange;

        var checked = !(0, _getField2.default)(this.props, this.state, 'checked');
        if (onChange) {
          onChange(type === 'radio' ? e.target.value : checked, e);
        }

        if (!this._fromFakeButton && type !== 'switch' && typeof this._control.createInk === 'function') {
          // create ink doesn't exist when testing atm
          this._control.createInk();
        }
        this._fromFakeButton = false;

        if (typeof this.props.checked === 'undefined') {
          this.setState({ checked: checked });
        }
      }
    }, {
      key: '_handleControlClick',
      value: function _handleControlClick() {
        this._fromFakeButton = true;
        // Trigger the change
        this._input.click();
      }
    }, {
      key: 'render',
      value: function render() {
        var _props3 = this.props,
            id = _props3.id,
            style = _props3.style,
            className = _props3.className,
            inline = _props3.inline,
            type = _props3.type,
            name = _props3.name,
            value = _props3.value,
            disabled = _props3.disabled,
            labelBefore = _props3.labelBefore,
            onBlur = _props3.onBlur,
            onFocus = _props3.onFocus,
            props = _objectWithoutProperties(_props3, ['id', 'style', 'className', 'inline', 'type', 'name', 'value', 'disabled', 'labelBefore', 'onBlur', 'onFocus']);

        delete props.label;
        delete props.checked;
        delete props.onChange;
        delete props.checkedIcon;
        delete props.uncheckedIcon;
        delete props.__superSecreteProp;
        delete props.checkedRadioIconChildren;
        delete props.checkedRadioIconClassName;
        delete props.uncheckedRadioIconChildren;
        delete props.uncheckedRadioIconClassName;
        delete props.checkedCheckboxIconChildren;
        delete props.checkedCheckboxIconClassName;
        delete props.uncheckedCheckboxIconChildren;
        delete props.uncheckedCheckboxIconClassName;

        var checked = (0, _getField2.default)(this.props, this.state, 'checked');
        var isSwitch = type === 'switch';
        var label = _react2.default.createElement(
          'label',
          {
            key: 'label',
            htmlFor: id,
            className: (0, _classnames2.default)('md-selection-control-label', {
              'md-pointer--hover': !disabled,
              'md-text--disabled': disabled,
              'md-text': !disabled
            })
          },
          this.props.label
        );

        var control = void 0;
        if (isSwitch) {
          control = _react2.default.createElement(_SwitchTrack2.default, {
            disabled: disabled,
            checked: checked,
            onClick: this._handleControlClick,
            onBlur: onBlur,
            onFocus: onFocus
          });
        } else {
          control = _react2.default.createElement(
            _AccessibleFakeInkedButton2.default,
            {
              ref: this._setControl,
              onBlur: onBlur,
              onFocus: onFocus,
              disabled: disabled,
              onClick: this._handleControlClick,
              className: (0, _classnames2.default)('md-btn md-btn--icon', {
                'md-text--disabled': disabled,
                'md-text--theme-secondary': !disabled && checked,
                'md-text--secondary': !disabled && !checked
              }),
              role: type,
              'aria-checked': checked
            },
            this._getIcon()
          );
        }

        return _react2.default.createElement(
          'div',
          _extends({}, props, {
            ref: this._setContainer,
            style: style,
            className: (0, _classnames2.default)('md-selection-control-container', {
              'md-selection-control-container--inline': inline,
              'md-switch-container': isSwitch
            }, className)
          }),
          labelBefore && label,
          _react2.default.createElement('input', {
            ref: this._setInput,
            id: id,
            type: isSwitch ? 'checkbox' : type,
            checked: checked,
            onChange: this._handleChange,
            disabled: disabled,
            className: 'md-selection-control-input',
            name: name,
            value: value,
            'aria-hidden': true
          }),
          control,
          !labelBefore && label
        );
      }
    }]);

    return SelectionControl;
  }(_react.PureComponent);

  SelectionControl.propTypes = {
    /**
     * An id to use with the selection control. This is used for accessibility and so that the label
     * triggers the selection control toggle.
     */
    id: preventDouble((0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]))),

    /**
     * An optional style to apply to the selection control's container.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the selection control's container.
     */
    className: _react.PropTypes.string,

    /**
     * The type of selection control to render.
     */
    type: _react.PropTypes.oneOf(['checkbox', 'radio', 'switch']).isRequired,

    /**
     * A label to display with the selection control. This is required for accessibility and triggering
     * the toggle.
     */
    label: _react.PropTypes.node,

    /**
     * Boolean if the label should appear before the checkbox/radio icon or switch.
     */
    labelBefore: _react.PropTypes.bool,

    /**
     * A name to use for the `SelectionControl`. This is required for accessibility. If the `type`
     * is a `checkbox` and it is part of a group, it is recommended to make this a string ending
     * in `[]` so that the value can be found from `document.querySelector('input[name="someName[]"]').value`.
     */
    name: preventDouble((0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]))),

    /**
     * Boolean if the `Radio` is disabled.
     */
    disabled: _react.PropTypes.bool,

    /**
     * A function to call when the `SelectionControl` triggers the `change` event. The `onChange`
     * callback will either include:
     * - the currently changed radio's value
     * - the next checked state for the `Switch` or `Checkbox`.
     *
     * as the first paramater followed by the change event.
     *
     * ```js
     * // Radio
     * onChange(changeEvent.target.value, changeEvent);
     *
     * // Checkbox or Switch
     * onChange(changeEvent.target.checked, changeEvent);
     * ```
     */
    onChange: _react.PropTypes.func,

    /**
     * An optional function to call when the `SelectionControl` triggers the `blur` event.
     */
    onBlur: _react.PropTypes.func,

    /**
     * An optional function to call when the `SelectionControl` triggers the `focus` event.
     */
    onFocus: _react.PropTypes.func,

    /**
     * The value for the `SelectionControl`. It is not required for `Checkbox` and `Switch`,
     * but it is recommended.
     */
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * A boolean if the `SelectionControl` is currently checked. This _really_ makes the `onChange`
     * prop required, but since there are cases you might want to have the `onChange` listener on a
     * `fieldset` or something above the component, it is never set to `required`. It will however
     * prevent updates if there is no change listener.
     */
    checked: _react.PropTypes.bool,

    /**
     * Boolean if the `Checkbox` or `Switch` are checked by default. This prop is invalid for a
     * `Radio`.
     */
    defaultChecked: _react.PropTypes.bool,

    /**
     * Boolean if the `SelectionControl` should be displayed inline instead of a block.
     */
    inline: _react.PropTypes.bool,

    /**
     * Any children used to render the checkbox checked `FontIcon`.
     */
    checkedCheckboxIconChildren: _react.PropTypes.node,

    /**
     * An icon className to use to render the checkbox checked `FontIcon`.
     */
    checkedCheckboxIconClassName: _react.PropTypes.string,

    /**
     * Any children used to render the checkbox unchecked `FontIcon`.
     */
    uncheckedCheckboxIconChildren: _react.PropTypes.node,

    /**
     * An icon className to use to render the checkbox unchecked `FontIcon`.
     */
    uncheckedCheckboxIconClassName: _react.PropTypes.string,

    /**
     * Any children used to render the radio checked `FontIcon`.
     */
    checkedRadioIconChildren: _react.PropTypes.node,

    /**
     * An icon className to use to render the radio checked `FontIcon`.
     */
    checkedRadioIconClassName: _react.PropTypes.string,

    /**
     * Any children used to render the radio unchecked `FontIcon`.
     */
    uncheckedRadioIconChildren: _react.PropTypes.node,

    /**
     * An icon className to use to render the radio unchecked `FontIcon`.
     */
    uncheckedRadioIconClassName: _react.PropTypes.string,

    checkedIcon: preventDouble((0, _deprecated2.default)(_react.PropTypes.node, 'Use the `checkedCheckboxIconChildren` and `checkedCheckboxIconClassName`  or the ' + '`checkedRadioIconChildren` and `checkedRadioIconClassName` props instead')),
    uncheckedIcon: preventDouble((0, _deprecated2.default)(_react.PropTypes.node, 'Use the `uncheckedCheckboxIconChildren` and `uncheckedCheckboxIconClassName`  or the ' + '`uncheckedRadioIconChildren` and `uncheckedRadioIconClassName` props instead')),

    /* maybe removed once upgrade again? */
    __superSecreteProp: _react.PropTypes.bool
  };
  SelectionControl.defaultProps = {
    checkedCheckboxIconChildren: 'check_box',
    uncheckedCheckboxIconChildren: 'check_box_outline_blank',
    checkedRadioIconChildren: 'radio_button_checked',
    uncheckedRadioIconChildren: 'radio_button_unchecked'
  };
  exports.default = SelectionControl;
});