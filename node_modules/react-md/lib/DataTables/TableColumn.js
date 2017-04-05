(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../Tooltips/injectTooltip', '../FontIcons/Collapser', '../Helpers/IconSeparator'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../Tooltips/injectTooltip'), require('../FontIcons/Collapser'), require('../Helpers/IconSeparator'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.injectTooltip, global.Collapser, global.IconSeparator);
    global.TableColumn = mod.exports;
  }
})(this, function (exports, _react, _classnames, _injectTooltip, _Collapser, _IconSeparator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _injectTooltip2 = _interopRequireDefault(_injectTooltip);

  var _Collapser2 = _interopRequireDefault(_Collapser);

  var _IconSeparator2 = _interopRequireDefault(_IconSeparator);

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

  var TableColumn = function (_PureComponent) {
    _inherits(TableColumn, _PureComponent);

    function TableColumn() {
      _classCallCheck(this, TableColumn);

      return _possibleConstructorReturn(this, (TableColumn.__proto__ || Object.getPrototypeOf(TableColumn)).apply(this, arguments));
    }

    _createClass(TableColumn, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            numeric = _props.numeric,
            adjusted = _props.adjusted,
            header = _props.header,
            children = _props.children,
            sorted = _props.sorted,
            sortIconChildren = _props.sortIconChildren,
            sortIconClassName = _props.sortIconClassName,
            tooltip = _props.tooltip,
            selectColumnHeader = _props.selectColumnHeader,
            __fixedColumn = _props.__fixedColumn,
            props = _objectWithoutProperties(_props, ['className', 'numeric', 'adjusted', 'header', 'children', 'sorted', 'sortIconChildren', 'sortIconClassName', 'tooltip', 'selectColumnHeader', '__fixedColumn']);

        var sortable = typeof sorted === 'boolean';

        var displayedChildren = children;
        if (sortable) {
          displayedChildren = _react2.default.createElement(
            _IconSeparator2.default,
            { label: children, iconBefore: true },
            _react2.default.createElement(
              _Collapser2.default,
              { flipped: !sorted, iconClassName: sortIconClassName },
              sortIconChildren
            )
          );
        }

        var Component = header ? 'th' : 'td';

        return _react2.default.createElement(
          Component,
          _extends({}, props, {
            className: (0, _classnames2.default)('md-table-column', {
              'md-table-column--header': header,
              'md-table-column--data': !header,
              'md-table-column--adjusted': adjusted,
              'md-table-column--sortable md-pointer--hover': sortable,
              'md-table-column--relative': !__fixedColumn && tooltip,
              'md-table-column--select-field': selectColumnHeader,
              'md-text': !header,
              'md-text--secondary': header,
              'md-text-left': !numeric,
              'md-text-right': numeric
            }, className)
          }),
          tooltip,
          displayedChildren
        );
      }
    }]);

    return TableColumn;
  }(_react.PureComponent);

  TableColumn.propTypes = {
    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * The optional className for the table column
     */
    className: _react.PropTypes.string,

    /**
     * The children to display in the column.
     */
    children: _react.PropTypes.node,

    /**
     * Boolean if the column is currently sorted. If this prop is not `undefined`,
     * it will add the sort icon unto this column. You will also need to use the
     * `onClick` function to toggle the `sorted` prop as well as handling the sorting
     * of data.
     *
     * This value should really only be set in the `TableHeader` component.
     */
    sorted: _react.PropTypes.bool,

    /**
     * The optional icon children to display in the sort icon.
     */
    sortIconChildren: _react.PropTypes.node,

    /**
     * The icon className for the sort icon.
     */
    sortIconClassName: _react.PropTypes.string.isRequired,

    /**
     * A boolean if the column has numeric data. It will right-align the data.
     */
    numeric: _react.PropTypes.bool,

    /**
     * Boolean if this column should be adjusted with additional padding. This *should*
     * be handled automatically by the `TableRow` component but can be set manually as well.
     */
    adjusted: _react.PropTypes.bool,

    /**
     * Boolean if this column is the `th` for a column of `SelectFieldColumn`. This will apply
     * additional styling to the column to position with the select field.
     */
    selectColumnHeader: _react.PropTypes.bool,

    /**
     * Boolean if this is a `th` component. This value **should** be set
     * automatically for you if it is in the `TableHeader` component.
     */
    header: _react.PropTypes.bool.isRequired,

    /**
     * The optional tooltip to render on hover.
     */
    tooltipLabel: _react.PropTypes.string,

    /**
     * An optional delay to apply to the tooltip before it appears.
     */
    tooltipDelay: _react.PropTypes.number,

    /**
     * The position of the tooltip.
     */
    tooltipPosition: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * The injected tooltip.
     * @access private
     */
    tooltip: _react.PropTypes.node,

    /**
     * Boolean if the TableColumn is coming from the EditDialogColumn or SelectFieldColumn
     * components. When this is false, it will update the column to have `position: relative`
     * so that tooltips can be displayed.
     */
    __fixedColumn: _react.PropTypes.bool
  };
  TableColumn.defaultProps = {
    header: false,
    sortIconClassName: 'material-icons',
    sortIconChildren: 'arrow_upward'
  };
  exports.default = (0, _injectTooltip2.default)(TableColumn);
});