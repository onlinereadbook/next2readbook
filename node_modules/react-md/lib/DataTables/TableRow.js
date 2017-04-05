(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../utils/getField', './headerContextTypes', './rowContextTypes', './TableCheckbox'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../utils/getField'), require('./headerContextTypes'), require('./rowContextTypes'), require('./TableCheckbox'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.getField, global.headerContextTypes, global.rowContextTypes, global.TableCheckbox);
    global.TableRow = mod.exports;
  }
})(this, function (exports, _react, _classnames, _getField, _headerContextTypes, _rowContextTypes, _TableCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _getField2 = _interopRequireDefault(_getField);

  var _headerContextTypes2 = _interopRequireDefault(_headerContextTypes);

  var _rowContextTypes2 = _interopRequireDefault(_rowContextTypes);

  var _TableCheckbox2 = _interopRequireDefault(_TableCheckbox);

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

  var TableRow = function (_Component) {
    _inherits(TableRow, _Component);

    function TableRow(props, context) {
      _classCallCheck(this, TableRow);

      var _this = _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props, context));

      _this.state = {
        biggest: null,
        hover: false,
        selects: []
      };

      _this._handleMouseOver = _this._handleMouseOver.bind(_this);
      _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
      _this._setLongestColumn = _this._setLongestColumn.bind(_this);
      return _this;
    }

    _createClass(TableRow, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var _context = this.context,
            baseId = _context.baseId,
            context = _objectWithoutProperties(_context, ['baseId']);

        return _extends({}, context, {
          rowId: context.header ? baseId + 'CheckboxToggleAll' : '' + baseId + this.props.index
        });
      }
    }, {
      key: '_ignoreHoverState',
      value: function _ignoreHoverState(classList) {
        return classList.contains('md-list--menu') || ['md-edit-dialog', 'md-edit-dialog--active'].every(function (className) {
          return classList.contains(className);
        });
      }
    }, {
      key: '_handleMouseOver',
      value: function _handleMouseOver(e) {
        if (this.props.onMouseOver) {
          this.props.onMouseOver(e);
        }

        if (this.context.header) {
          return;
        }

        var target = e.target;
        while (target && target.parentNode) {
          if (target.classList && this._ignoreHoverState(target.classList)) {
            this.setState({ hover: false });
            return;
          }

          target = target.parentNode;
        }

        this.setState({ hover: true });
      }
    }, {
      key: '_handleMouseLeave',
      value: function _handleMouseLeave(e) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e);
        }

        if (this.context.header) {
          return;
        }

        this.setState({ hover: false });
      }
    }, {
      key: '_setLongestColumn',
      value: function _setLongestColumn(row) {
        if (!row || !this.props.autoAdjust) {
          return;
        }

        var selects = [];
        var cols = Array.prototype.slice.call(row.querySelectorAll('.md-table-column'));
        var biggest = cols.reduce(function (prevBiggest, col, i) {
          selects.push(!!col.className.match(/select-field/));
          if (col.className.match(/prevent-grow/)) {
            return prevBiggest;
          }

          var width = col.offsetWidth;
          if (prevBiggest.width < width) {
            return { width: width, index: i };
          }

          return prevBiggest;
        }, { width: 0, index: 0 });

        if (this.state.biggest && this.state.biggest.index === biggest.index) {
          return;
        }

        this.setState({ biggest: biggest, selects: selects });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _state = this.state,
            hover = _state.hover,
            biggest = _state.biggest,
            selects = _state.selects;

        var _props = this.props,
            className = _props.className,
            children = _props.children,
            selected = _props.selected,
            onCheckboxClick = _props.onCheckboxClick,
            props = _objectWithoutProperties(_props, ['className', 'children', 'selected', 'onCheckboxClick']);

        delete props.index;
        delete props.autoAdjust;

        var checkbox = void 0;
        if (!this.context.plain) {
          checkbox = _react2.default.createElement(_TableCheckbox2.default, { key: 'checkbox', checked: selected, onChange: onCheckboxClick });
        }

        var length = children.length;
        var columns = _react.Children.map(_react.Children.toArray(children), function (col, i) {
          return (0, _react.cloneElement)(col, {
            header: (0, _getField2.default)(col.props, _this2.context, 'header'),
            className: (0, _classnames2.default)({
              'md-table-column--grow': (0, _getField2.default)(col.props, _this2.context, 'header') && biggest && biggest.index === i,
              'md-table-column--adjusted': selects.length && !selects[i] && biggest && biggest.index !== i && i + 1 < length
            }, col.props.className)
          });
        });

        return _react2.default.createElement(
          'tr',
          _extends({}, props, {
            ref: this._setLongestColumn,
            className: (0, _classnames2.default)('md-table-row', className, {
              'md-table-row--hover': hover,
              'md-table-row--active': !this.context.header && selected
            }),
            onMouseOver: this._handleMouseOver,
            onMouseLeave: this._handleMouseLeave
          }),
          checkbox,
          columns
        );
      }
    }]);

    return TableRow;
  }(_react.Component);

  TableRow.propTypes = {
    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the row.
     */
    className: _react.PropTypes.string,

    /**
     * A single or list of `TableColumn` to display in the table.
     *
     * > The specs "require" at least 3 columns for a non-plain data table, but that isn't
     * strictly enforced here.
     */
    children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.arrayOf(_react.PropTypes.element)]).isRequired,

    /**
     * An optional onClick function to call when a row is clicked.
     */
    onClick: _react.PropTypes.func,

    /**
     * A function to call when the checkbox is clicked. This
     * function will will be called with `(rowIndex, event)`. The
     * `TableBody` and `TableHeader` components will automatically
     * merge in a function to goggle the checkbox.
     */
    onCheckboxClick: _react.PropTypes.func,

    /**
     * A boolean if the row should automatically check all the `TableColumn`s in the row
     * and add the className `grow` to the one that is the biggest. You can also disable
     * individual columns by adding the className `.prevent-grow` to them.
     */
    autoAdjust: _react.PropTypes.bool.isRequired,

    /**
     * An optional function to call onMouseOver.
     */
    onMouseOver: _react.PropTypes.func,

    /**
     * An optional function to call onMouseLeave.
     */
    onMouseLeave: _react.PropTypes.func,

    /**
     * Boolean if the row is currently selected. If this value will be
     * injected by the `TableHeader` or `TableBody` component.
     */
    selected: _react.PropTypes.bool,

    /**
     * The row's index in the table. This is injected via the `TableBody` component.
     */
    index: _react.PropTypes.number
  };
  TableRow.defaultProps = {
    autoAdjust: true
  };
  TableRow.contextTypes = _headerContextTypes2.default;
  TableRow.childContextTypes = _rowContextTypes2.default;
  exports.default = TableRow;
});