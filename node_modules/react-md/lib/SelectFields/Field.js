(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../constants/CSSTransitionGroupTick', '../FontIcons/FontIcon', '../Helpers/AccessibleFakeInkedButton', '../Helpers/IconSeparator', '../Papers/Paper', '../TextFields/TextFieldDivider'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../constants/CSSTransitionGroupTick'), require('../FontIcons/FontIcon'), require('../Helpers/AccessibleFakeInkedButton'), require('../Helpers/IconSeparator'), require('../Papers/Paper'), require('../TextFields/TextFieldDivider'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.CSSTransitionGroupTick, global.FontIcon, global.AccessibleFakeInkedButton, global.IconSeparator, global.Paper, global.TextFieldDivider);
    global.Field = mod.exports;
  }
})(this, function (exports, _react, _classnames, _CSSTransitionGroupTick, _FontIcon, _AccessibleFakeInkedButton, _IconSeparator, _Paper, _TextFieldDivider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

  var _FontIcon2 = _interopRequireDefault(_FontIcon);

  var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

  var _IconSeparator2 = _interopRequireDefault(_IconSeparator);

  var _Paper2 = _interopRequireDefault(_Paper);

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

  var Field = function (_PureComponent) {
    _inherits(Field, _PureComponent);

    function Field(props) {
      _classCallCheck(this, Field);

      var _this = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props));

      _this.state = { droppingClassName: null };
      _this._transitionNewValue = _this._transitionNewValue.bind(_this);
      return _this;
    }

    _createClass(Field, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
          this._transitionNewValue();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }
      }
    }, {
      key: '_transitionNewValue',
      value: function _transitionNewValue() {
        var _this2 = this;

        if (this._timeout) {
          clearTimeout(this._timeout);
        }

        this._timeout = setTimeout(function () {
          _this2._timeout = setTimeout(function () {
            _this2._timeout = null;

            _this2.setState({ droppingClassName: null });
          }, 300);

          _this2.setState({ droppingClassName: _this2.state.droppingClassName + ' md-drop-enter-active ' });
        }, _CSSTransitionGroupTick2.default);

        this.setState({ droppingClassName: 'md-drop-enter' });
      }
    }, {
      key: 'render',
      value: function render() {
        var droppingClassName = this.state.droppingClassName;

        var _props = this.props,
            id = _props.id,
            name = _props.name,
            value = _props.value,
            active = _props.active,
            below = _props.below,
            style = _props.style,
            className = _props.className,
            label = _props.label,
            disabled = _props.disabled,
            placeholder = _props.placeholder,
            activeLabel = _props.activeLabel,
            iconChildren = _props.iconChildren,
            iconClassName = _props.iconClassName,
            lineDirection = _props.lineDirection,
            required = _props.required,
            error = _props.error,
            toolbar = _props.toolbar,
            props = _objectWithoutProperties(_props, ['id', 'name', 'value', 'active', 'below', 'style', 'className', 'label', 'disabled', 'placeholder', 'activeLabel', 'iconChildren', 'iconClassName', 'lineDirection', 'required', 'error', 'toolbar']);

        var divider = void 0;
        if (!below && !toolbar) {
          divider = _react2.default.createElement(_TextFieldDivider2.default, {
            key: 'text-divider',
            active: active,
            error: error,
            lineDirection: lineDirection,
            className: 'md-divider--select-field'
          });
        }

        return _react2.default.createElement(
          _AccessibleFakeInkedButton2.default,
          _extends({}, props, {
            disabled: disabled,
            component: _Paper2.default,
            zDepth: below && active ? 1 : 0,
            inkDisabled: !below,
            style: style,
            className: (0, _classnames2.default)('md-select-field', {
              'md-text': activeLabel,
              'md-text--secondary': !activeLabel && placeholder,
              'md-text--disabled': disabled
            }, className)
          }),
          _react2.default.createElement(
            _IconSeparator2.default,
            {
              label: activeLabel || (label && active || !label) && placeholder || '',
              labelClassName: droppingClassName,
              className: (0, _classnames2.default)('md-text-field', {
                'md-select-field--text-field': !below,
                'md-select-field--btn': below,
                'md-text-field--margin': !below && !label,
                'md-text-field--floating-margin': label,
                'md-text-field--toolbar': toolbar && !below
              })
            },
            _react2.default.createElement(
              _FontIcon2.default,
              { iconClassName: iconClassName },
              iconChildren
            )
          ),
          divider,
          _react2.default.createElement('input', {
            key: 'value',
            type: 'hidden',
            id: id,
            name: name,
            value: value,
            required: required
          })
        );
      }
    }]);

    return Field;
  }(_react.PureComponent);

  Field.propTypes = {
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    active: _react.PropTypes.bool,
    below: _react.PropTypes.bool,
    label: _react.PropTypes.node,
    placeholder: _react.PropTypes.string,
    iconChildren: _react.PropTypes.node,
    iconClassName: _react.PropTypes.string,
    activeLabel: _react.PropTypes.node,
    id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    name: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    lineDirection: _TextFieldDivider2.default.propTypes.lineDirection,
    disabled: _react.PropTypes.bool,
    required: _react.PropTypes.bool,
    error: _react.PropTypes.bool,
    toolbar: _react.PropTypes.bool
  };
  exports.default = Field;
});