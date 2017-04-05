(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', './TextArea'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('./TextArea'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.TextArea);
    global.InputField = mod.exports;
  }
})(this, function (exports, _react, _classnames, _TextArea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _classnames2 = _interopRequireDefault(_classnames);

  var _TextArea2 = _interopRequireDefault(_TextArea);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
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

  var InputField = function (_PureComponent) {
    _inherits(InputField, _PureComponent);

    function InputField(props) {
      _classCallCheck(this, InputField);

      var _this = _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).call(this, props));

      _this.getValue = _this.getValue.bind(_this);
      _this.getField = _this.getField.bind(_this);
      _this.focus = _this.focus.bind(_this);
      _this._setField = _this._setField.bind(_this);
      return _this;
    }

    _createClass(InputField, [{
      key: 'getField',
      value: function getField() {
        return typeof this.props.rows === 'undefined' ? this._field : this._field.getField();
      }
    }, {
      key: 'getValue',
      value: function getValue() {
        if (typeof this.props.rows === 'undefined') {
          return this._field.value;
        }

        return this._field.getValue();
      }
    }, {
      key: 'focus',
      value: function focus() {
        this._field.focus();
      }
    }, {
      key: '_setField',
      value: function _setField(field) {
        this._field = field;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            rows = _props.rows,
            label = _props.label,
            customSize = _props.customSize,
            fullWidth = _props.fullWidth,
            type = _props.type,
            passwordVisible = _props.passwordVisible,
            block = _props.block,
            inlineIndicator = _props.inlineIndicator,
            props = _objectWithoutProperties(_props, ['className', 'rows', 'label', 'customSize', 'fullWidth', 'type', 'passwordVisible', 'block', 'inlineIndicator']);

        var multiline = typeof rows !== 'undefined';
        var Component = multiline ? _TextArea2.default : 'input';
        if (!multiline) {
          props.type = passwordVisible ? 'text' : type;

          delete props.maxRows;
          delete props.onHeightChange;
        } else {
          props.label = label;
          props.block = block;
        }

        return (0, _react.createElement)(Component, _extends({}, props, {
          rows: rows,
          ref: this._setField,
          className: (0, _classnames2.default)('md-text-field', _defineProperty({
            'md-text': !props.disabled,
            'md-text--disabled': props.disabled,
            'md-text-field--inline-indicator': inlineIndicator || !multiline && type === 'password',
            'md-text-field--multiline': multiline,
            'md-full-width': fullWidth,
            'md-text-field--margin': !block && !multiline && !label,
            'md-text-field--floating-margin': !block && !multiline && label
          }, 'md-text-field--' + customSize, customSize), className)
        }));
      }
    }]);

    return InputField;
  }(_react.PureComponent);

  InputField.propTypes = {
    id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    type: _react.PropTypes.string,
    placeholder: _react.PropTypes.string,
    block: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    rows: _react.PropTypes.number,
    maxRows: _react.PropTypes.number,
    label: _react.PropTypes.string,
    fullWidth: _react.PropTypes.bool,
    customSize: _react.PropTypes.string,
    passwordVisible: _react.PropTypes.bool,
    inlineIndicator: _react.PropTypes.bool
  };
  exports.default = InputField;
});