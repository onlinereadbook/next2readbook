(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'classnames', '../utils/getField', '../SelectFields/SelectField', '../Buttons/Button', './findTable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('classnames'), require('../utils/getField'), require('../SelectFields/SelectField'), require('../Buttons/Button'), require('./findTable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.classnames, global.getField, global.SelectField, global.Button, global.findTable);
    global.TablePagination = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _classnames, _getField, _SelectField, _Button, _findTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _getField2 = _interopRequireDefault(_getField);

  var _SelectField2 = _interopRequireDefault(_SelectField);

  var _Button2 = _interopRequireDefault(_Button);

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

  var

  /**
   * The `TablePagination` component is used to generate the table footer that helps
   * pagination through a large dataset by limiting the number of rows per page.
   * The pagination will always be placed persistently at the bottom of the table
   * so that when a user scrolls to the right, they will always be able to use the
   * pagination.
   */
  TablePagination = function (_PureComponent) {
    _inherits(TablePagination, _PureComponent);

    function TablePagination(props, context) {
      _classCallCheck(this, TablePagination);

      var _this = _possibleConstructorReturn(this, (TablePagination.__proto__ || Object.getPrototypeOf(TablePagination)).call(this, props, context));

      var rpp = typeof props.rowsPerPage !== 'undefined' ? props.rowsPerPage : props.defaultRowsPerPage;
      var p = typeof props.page !== 'undefined' ? props.page : props.defaultPage;
      _this.state = {
        page: props.defaultPage,
        start: (p - 1) * rpp,
        rowsPerPage: props.defaultRowsPerPage,
        controlsMarginLeft: 0
      };

      _this._setControls = _this._setControls.bind(_this);
      _this._position = _this._position.bind(_this);
      _this._increment = _this._increment.bind(_this);
      _this._decrement = _this._decrement.bind(_this);
      _this._setRowsPerPage = _this._setRowsPerPage.bind(_this);
      return _this;
    }

    _createClass(TablePagination, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._position();
        window.addEventListener('resize', this._position);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var rows = this.props.rows;
        var _state = this.state,
            start = _state.start,
            rowsPerPage = _state.rowsPerPage;

        if (rows !== prevProps.rows || start !== prevState.start || rowsPerPage !== prevState.rowsPerPage) {
          this._position();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this._position);
      }
    }, {
      key: '_setControls',
      value: function _setControls(controls) {
        this._controls = (0, _reactDom.findDOMNode)(controls);
      }
    }, {
      key: '_position',
      value: function _position() {
        var table = (0, _findTable2.default)((0, _reactDom.findDOMNode)(this));
        if (table) {
          this.setState({
            controlsMarginLeft: Math.max(0, table.offsetWidth - this._controls.offsetWidth)
          });
        }
      }
    }, {
      key: '_increment',
      value: function _increment() {
        var _props = this.props,
            rows = _props.rows,
            onPagination = _props.onPagination;
        var start = this.state.start;

        var rowsPerPage = (0, _getField2.default)(this.props, this.state, 'rowsPerPage');
        var page = (0, _getField2.default)(this.props, this.state, 'page');

        // Only correct multiple of rows per page
        var max = rows - rows % rowsPerPage;

        var newStart = Math.min(start + rowsPerPage, max);
        var nextPage = page + 1;

        onPagination(newStart, rowsPerPage, nextPage);
        this.setState({ start: newStart, page: nextPage });
      }
    }, {
      key: '_decrement',
      value: function _decrement() {
        var start = this.state.start;

        var page = (0, _getField2.default)(this.props, this.state, 'page');
        var rowsPerPage = (0, _getField2.default)(this.props, this.state, 'rowsPerPage');
        var newStart = Math.max(0, start - rowsPerPage);
        var nextPage = page - 1;

        this.props.onPagination(newStart, rowsPerPage, nextPage);
        this.setState({ start: newStart, page: nextPage });
      }
    }, {
      key: '_setRowsPerPage',
      value: function _setRowsPerPage(rowsPerPage) {
        var page = (0, _getField2.default)(this.props, this.state, 'page');
        var newStart = (page - 1) * rowsPerPage;
        this.props.onPagination(newStart, rowsPerPage, page);
        this.setState({ start: newStart, rowsPerPage: rowsPerPage });
      }
    }, {
      key: 'render',
      value: function render() {
        var _state2 = this.state,
            controlsMarginLeft = _state2.controlsMarginLeft,
            start = _state2.start;

        var _props2 = this.props,
            className = _props2.className,
            rows = _props2.rows,
            rowsPerPageLabel = _props2.rowsPerPageLabel,
            rowsPerPageItems = _props2.rowsPerPageItems,
            incrementIconChildren = _props2.incrementIconChildren,
            incrementIconClassName = _props2.incrementIconClassName,
            decrementIconChildren = _props2.decrementIconChildren,
            decrementIconClassName = _props2.decrementIconClassName,
            props = _objectWithoutProperties(_props2, ['className', 'rows', 'rowsPerPageLabel', 'rowsPerPageItems', 'incrementIconChildren', 'incrementIconClassName', 'decrementIconChildren', 'decrementIconClassName']);

        delete props.onPagination;
        delete props.rowsPerPage;
        delete props.defaultPage;
        delete props.defaultRowsPerPage;
        delete props.page;

        var rowsPerPage = (0, _getField2.default)(this.props, this.state, 'rowsPerPage');

        var pagination = start + 1 + '-' + Math.min(rows, start + rowsPerPage) + ' of ' + rows;
        return _react2.default.createElement(
          'tfoot',
          _extends({}, props, { className: (0, _classnames2.default)('md-table-footer', className) }),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { colSpan: '100%' },
              _react2.default.createElement(
                'div',
                {
                  ref: this._setControls,
                  className: 'md-table-pagination md-table-pagination--controls md-text',
                  style: { marginLeft: controlsMarginLeft }
                },
                rowsPerPageLabel,
                _react2.default.createElement(_SelectField2.default, {
                  id: this.context.baseId + '-pagination',
                  menuItems: rowsPerPageItems,
                  position: _SelectField2.default.Positions.BELOW,
                  inputClassName: 'md-select-field--pagination',
                  value: rowsPerPage,
                  onChange: this._setRowsPerPage
                }),
                _react2.default.createElement(
                  'span',
                  { className: 'md-table-pagination--label' },
                  pagination
                ),
                _react2.default.createElement(
                  _Button2.default,
                  {
                    icon: true,
                    onClick: this._decrement,
                    disabled: start === 0,
                    iconClassName: decrementIconClassName
                  },
                  decrementIconChildren
                ),
                _react2.default.createElement(
                  _Button2.default,
                  {
                    icon: true,
                    onClick: this._increment,
                    disabled: start + rowsPerPage >= rows,
                    iconClassName: incrementIconClassName
                  },
                  incrementIconChildren
                )
              ),
              _react2.default.createElement('div', { className: 'md-table-pagination' })
            )
          )
        );
      }
    }]);

    return TablePagination;
  }(_react.PureComponent);

  TablePagination.propTypes = {
    /**
     * An optional style to apply to the `tfoot` tag.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the `tfoot` tag.
     */
    className: _react.PropTypes.string,

    /**
     * A function to call when a user clicks the increment or decrement pagination
     * icon button. This function will be given the new start index and the number
     * or rows per page as well as the current page.
     *
     * ```js
     * onPagination(newStart, rowsPerPage, currentPage);
     * ```
     */
    onPagination: _react.PropTypes.func.isRequired,

    /**
     * The current value for the select field holding the number of rows per page.
     */
    rowsPerPage: _react.PropTypes.number,

    /**
     * The current page for the pagination. This will make the comonent controlled, so the only way to get pagination
     * is making sure you are updating this prop after the `onPagination` callback is called.
     *
     * Pages start from 1 instead of 0.
     */
    page: _react.PropTypes.number,

    /**
     * The default page to start from for the pagination. Pages start from 1 instead of 0.
     */
    defaultPage: _react.PropTypes.number.isRequired,

    /**
     * The default number of rows per page to display. This will be the value for the
     * `SelectField`.
     */
    defaultRowsPerPage: _react.PropTypes.number.isRequired,

    /**
     * The label to use for the rows per page `SelectField`.
     */
    rowsPerPageLabel: _react.PropTypes.node.isRequired,

    /**
     * A list of numbers for the amount of rows per page to display at a time.
     * This will be rendered into the `SelectField`.
     */
    rowsPerPageItems: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,

    /**
     * The total number of rows that can be displayed. This is the unfiltered/non-subset
     * number of rows. This is used to help calculate the increment/decrement values to
     * display and determine if the user can increment/decrement again.
     */
    rows: _react.PropTypes.number.isRequired,

    /**
     * Any children used to display the increment icon button.
     */
    incrementIconChildren: _react.PropTypes.node,

    /**
     * An icon className used to display the increment icon button.
     */
    incrementIconClassName: _react.PropTypes.string,

    /**
     * Any children used to display the decrement icon button.
     */
    decrementIconChildren: _react.PropTypes.node,

    /**
     * An icon className used to display the decrement icon button.
     */
    decrementIconClassName: _react.PropTypes.string
  };
  TablePagination.contextTypes = {
    baseId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired
  };
  TablePagination.defaultProps = {
    defaultPage: 1,
    defaultRowsPerPage: 10,
    rowsPerPageLabel: 'Rows per page:',
    rowsPerPageItems: [10, 20, 30, 40, 50, 100],
    incrementIconChildren: 'keyboard_arrow_right',
    decrementIconChildren: 'keyboard_arrow_left'
  };
  exports.default = TablePagination;
});