(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames);
    global.TextArea = mod.exports;
  }
})(this, function (exports, _react, _classnames) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

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

  var TextArea = function (_PureComponent) {
    _inherits(TextArea, _PureComponent);

    function TextArea(props) {
      _classCallCheck(this, TextArea);

      var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

      _this.state = { height: null };
      _this.focus = _this.focus.bind(_this);
      _this.getField = _this.getField.bind(_this);
      _this.getValue = _this.getValue.bind(_this);
      _this._handleChange = _this._handleChange.bind(_this);
      _this._handleResize = _this._handleResize.bind(_this);
      _this._syncHeightWithMask = _this._syncHeightWithMask.bind(_this);
      return _this;
    }

    _createClass(TextArea, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._rowHeight = this._calcRowHeight(this._field, this.props);
        this._syncHeightWithMask();
        window.addEventListener('resize', this._handleResize);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.rows !== nextProps.rows) {
          this._rowHeight = this._calcRowHeight(this._field, this.props);
        }

        if (this.props.value !== nextProps.value || this.props.maxRows !== nextProps.maxRows) {
          this._syncHeightWithMask(nextProps.value);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this._handleResize);
      }
    }, {
      key: 'getField',
      value: function getField() {
        return this._field;
      }
    }, {
      key: 'getValue',
      value: function getValue() {
        return this._field.value;
      }
    }, {
      key: 'focus',
      value: function focus() {
        this._field.focus();
      }
    }, {
      key: '_setMask',
      value: function _setMask(mask) {
        this._mask = mask;
      }
    }, {
      key: '_setField',
      value: function _setField(field) {
        this._field = field;
      }
    }, {
      key: '_calcRowHeight',
      value: function _calcRowHeight(field, props) {
        return field.offsetHeight / props.rows;
      }
    }, {
      key: '_handleResize',
      value: function _handleResize() {
        this._rowHeight = this._calcRowHeight(this._field, this.props);
        this._syncHeightWithMask();
      }
    }, {
      key: '_syncHeightWithMask',
      value: function _syncHeightWithMask(value) {
        if (value !== undefined) {
          this._mask.value = value;
        }

        var height = this._mask.scrollHeight;
        if (height === undefined) {
          return;
        }

        var _props = this.props,
            rows = _props.rows,
            maxRows = _props.maxRows;

        if (maxRows && maxRows > 0) {
          height = Math.min(height, this._rowHeight * maxRows);
        }

        height = Math.max(this._rowHeight * rows, height);

        if (this.props.onHeightChange) {
          // For some reason the md-text-field-multiline-container is 5px
          // larger than the textareas.. So just add 5 here and on the inline style
          this.props.onHeightChange(height + 5);
        }

        this.setState({ height: height });
      }
    }, {
      key: '_handleChange',
      value: function _handleChange(e) {
        this._syncHeightWithMask(e.target.value, e);

        if (this.props.onChange) {
          this.props.onChange(e);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var height = this.state.height;

        var _props2 = this.props,
            style = _props2.style,
            defaultValue = _props2.defaultValue,
            value = _props2.value,
            className = _props2.className,
            label = _props2.label,
            block = _props2.block,
            props = _objectWithoutProperties(_props2, ['style', 'defaultValue', 'value', 'className', 'label', 'block']);

        delete props.maxRows;
        delete props.onChange;
        delete props.onHeightChange;

        return _react2.default.createElement(
          'div',
          {
            style: { height: height && height + 5 },
            className: (0, _classnames2.default)('md-text-field-multiline-container', {
              'md-text-field--margin': !label && !block,
              'md-text-field--floating-margin': label && !block
            })
          },
          _react2.default.createElement('textarea', {
            ref: function ref(mask) {
              _this2._mask = mask;
            },
            className: (0, _classnames2.default)(className, 'md-text-field--multiline-mask'),
            readOnly: true,
            rows: props.rows,
            tabIndex: -1,
            style: style,
            defaultValue: defaultValue,
            'aria-hidden': true,
            value: value
          }),
          _react2.default.createElement('textarea', _extends({}, props, {
            ref: function ref(field) {
              _this2._field = field;
            },
            style: Object.assign({}, style, { height: height }),
            className: className,
            defaultValue: defaultValue,
            value: value,
            onChange: this._handleChange
          }))
        );
      }
    }]);

    return TextArea;
  }(_react.PureComponent);

  TextArea.propTypes = {
    id: _react.PropTypes.string,
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    rows: _react.PropTypes.number.isRequired,
    maxRows: _react.PropTypes.number,
    onChange: _react.PropTypes.func,
    defaultValue: _react.PropTypes.string,
    floatingLabel: _react.PropTypes.bool,
    value: _react.PropTypes.string,
    onHeightChange: _react.PropTypes.func,
    block: _react.PropTypes.bool,
    label: _react.PropTypes.string
  };
  exports.default = TextArea;
});