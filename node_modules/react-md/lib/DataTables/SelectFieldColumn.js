(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../SelectFields/SelectField', './TableColumn', './findTable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../SelectFields/SelectField'), require('./TableColumn'), require('./findTable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.SelectField, global.TableColumn, global.findTable);
    global.SelectFieldColumn = mod.exports;
  }
})(this, function (exports, _react, _classnames, _SelectField, _TableColumn, _findTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _SelectField2 = _interopRequireDefault(_SelectField);

  var _TableColumn2 = _interopRequireDefault(_TableColumn);

  var _findTable2 = _interopRequireDefault(_findTable);

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

  var SelectFieldColumn = function (_PureComponent) {
    _inherits(SelectFieldColumn, _PureComponent);

    function SelectFieldColumn(props, context) {
      _classCallCheck(this, SelectFieldColumn);

      var _this = _possibleConstructorReturn(this, (SelectFieldColumn.__proto__ || Object.getPrototypeOf(SelectFieldColumn)).call(this, props, context));

      _this.state = {
        active: !!props.defaultOpen,
        left: null,
        width: null
      };

      _this._wrapper = null;
      _this._table = null;
      _this._left = null;
      _this._scrollLeft = null;

      _this._setWrapper = _this._setWrapper.bind(_this);
      _this._repositionCell = _this._repositionCell.bind(_this);
      _this._handleMenuToggle = _this._handleMenuToggle.bind(_this);
      return _this;
    }

    _createClass(SelectFieldColumn, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var active = this.state.active;

        if (active === prevState.active) {
          return;
        } else if (this._table) {
          this._table[(active ? 'add' : 'remove') + 'EventListener']('scroll', this._repositionCell);
          this._left = active ? this.state.left : null;
          this._scrollLeft = active ? this._table.scrollLeft : null;
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.table && this.state.active) {
          this._table.removeEventListener('scroll', this._repositionCell);
        }
      }
    }, {
      key: '_setWrapper',
      value: function _setWrapper(wrapper) {
        this._wrapper = wrapper;
        this._table = (0, _findTable2.default)(this._wrapper);
      }
    }, {
      key: '_repositionCell',
      value: function _repositionCell() {
        var _this2 = this;

        if (!this._ticking) {
          requestAnimationFrame(function () {
            _this2._ticking = false;

            var left = _this2._left;
            var scrolledOut = false;
            if (_this2._table) {
              var _table = _this2._table,
                  scrollLeft = _table.scrollLeft,
                  offsetWidth = _table.offsetWidth;

              left -= scrollLeft - _this2._scrollLeft;
              scrolledOut = left < 16 || offsetWidth - left < _this2.state.width * _this2.props.scrollThreshold;
            }

            var active = _this2.state.active;

            if (!_this2._timeout && scrolledOut) {
              active = false;
            }

            _this2.setState({ left: left, active: active });
          });
        }

        this._ticking = true;
      }
    }, {
      key: '_handleMenuToggle',
      value: function _handleMenuToggle(active, e) {
        if (this.props.onMenuToggle) {
          this.props.onMenuToggle(active, e);
        }

        var width = null;
        var left = null;
        if (this._wrapper && active) {
          left = this._wrapper.getBoundingClientRect().left - 1; // 1px for box shadow
          width = this._wrapper.offsetWidth;
        }

        this.setState({ active: active, width: width, left: left });
      }
    }, {
      key: 'render',
      value: function render() {
        var rowId = this.context.rowId;
        var _state = this.state,
            active = _state.active,
            width = _state.width,
            left = _state.left;

        var _props = this.props,
            style = _props.style,
            className = _props.className,
            menuStyle = _props.menuStyle,
            menuClassName = _props.menuClassName,
            wrapperStyle = _props.wrapperStyle,
            wrapperClassName = _props.wrapperClassName,
            header = _props.header,
            props = _objectWithoutProperties(_props, ['style', 'className', 'menuStyle', 'menuClassName', 'wrapperStyle', 'wrapperClassName', 'header']);

        delete props.id;
        delete props.scrollThreshold;

        var id = this.props.id;

        if (!id) {
          id = rowId + '-select';
        }

        return _react2.default.createElement(
          _TableColumn2.default,
          {
            style: _extends({ left: left }, style),
            className: (0, _classnames2.default)('md-select-field-column', {
              'md-table-column--fixed md-table-column--fixed-active': active
            }, className),
            header: header,
            __fixedColumn: true
          },
          _react2.default.createElement(
            'div',
            {
              ref: this._setWrapper,
              style: _extends({}, wrapperStyle, { width: width }),
              className: wrapperClassName
            },
            _react2.default.createElement(_SelectField2.default, _extends({
              id: id
            }, props, {
              style: menuStyle,
              className: menuClassName,
              onMenuToggle: this._handleMenuToggle,
              fullWidth: true
            }))
          )
        );
      }
    }]);

    return SelectFieldColumn;
  }(_react.PureComponent);

  SelectFieldColumn.propTypes = {
    /**
     * An optional id to use for the select field in the column. If this is omitted,
     * the id will be generated from the `baseId` from the `DataTable`.
     */
    id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * An optional style to apply to the `TableColumn`.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the `TableColumn`.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to the select field's wrapper in the column.
     */
    wrapperStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the select field's wrapper in the column.
     */
    wrapperClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the select field's menu component.
     */
    menuStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the select field's menu component.
     */
    menuClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the select field's input.
     */
    inputStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the select field's input.
     */
    inputClassName: _react.PropTypes.string,

    /**
     * Boolean if the `SelectFieldColumn` is in the `TableHeader` component. This is
     * injected from the `TableRow` component. Should not be used.
     */
    header: _react.PropTypes.bool,

    /**
     * An optional function to call when the select field's menu is toggled open.
     * See the select field component for the callback information.
     */
    onMenuToggle: _react.PropTypes.func,

    /**
     * The position of the select field. It is ideal to keep this as the default.
     */
    position: _SelectField2.default.propTypes.position,

    /**
     * Boolean if the select field is open by default.
     */
    defaultOpen: _react.PropTypes.bool,

    /**
     * When the dialog is open and a user scrolls the dialog offscreen, this is the amount
     * of the dialog that should be offscreen before hiding the dialog (inverse). The default
     * is to have 25% of the dialog offscreen.
     */
    scrollThreshold: _react.PropTypes.number.isRequired
  };
  SelectFieldColumn.defaultProps = {
    position: _SelectField2.default.Positions.BELOW,
    scrollThreshold: 0.75
  };
  SelectFieldColumn.contextTypes = {
    rowId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
  };
  exports.default = SelectFieldColumn;
});