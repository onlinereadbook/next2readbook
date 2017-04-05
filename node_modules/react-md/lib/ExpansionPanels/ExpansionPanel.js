(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'classnames', '../utils/PropTypes/controlled', '../Papers/Paper', '../FontIcons/Collapser', '../Helpers/AccessibleFakeButton', '../Helpers/Collapse', './PanelContent'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('classnames'), require('../utils/PropTypes/controlled'), require('../Papers/Paper'), require('../FontIcons/Collapser'), require('../Helpers/AccessibleFakeButton'), require('../Helpers/Collapse'), require('./PanelContent'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.classnames, global.controlled, global.Paper, global.Collapser, global.AccessibleFakeButton, global.Collapse, global.PanelContent);
    global.ExpansionPanel = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _classnames, _controlled, _Paper, _Collapser, _AccessibleFakeButton, _Collapse, _PanelContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _Paper2 = _interopRequireDefault(_Paper);

  var _Collapser2 = _interopRequireDefault(_Collapser);

  var _AccessibleFakeButton2 = _interopRequireDefault(_AccessibleFakeButton);

  var _Collapse2 = _interopRequireDefault(_Collapse);

  var _PanelContent2 = _interopRequireDefault(_PanelContent);

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

  var LABEL_FONT_SIZE = 15;
  var LINE_HEIGHT = 1.42857;
  var SINGLE_LINE_HEIGHT = LABEL_FONT_SIZE * LINE_HEIGHT;

  /**
   * The `ExpansionPanel` component needs to be used with the `ExpansionList`
   * component. The only reason is that the `ExpansionPanel` should really
   * be rendered as a table, but it was a bit hard to have a single component
   * dynamically rendering another row when expanded. It couldn't be in the
   * same row since the expanded content might not have the same columns.
   */

  var ExpansionPanel = function (_PureComponent) {
    _inherits(ExpansionPanel, _PureComponent);

    function ExpansionPanel(props) {
      _classCallCheck(this, ExpansionPanel);

      var _this = _possibleConstructorReturn(this, (ExpansionPanel.__proto__ || Object.getPrototypeOf(ExpansionPanel)).call(this, props));

      _this.state = {
        received: false,
        twoLine: false
      };

      if (typeof props.expanded === 'undefined') {
        _this.state.expanded = props.defaultExpanded;
      }

      _this._handleSave = _this._handleSave.bind(_this);
      _this._handleCancel = _this._handleCancel.bind(_this);
      _this._handleClick = _this._handleClick.bind(_this);
      _this._determineIfTwoLine = _this._determineIfTwoLine.bind(_this);
      return _this;
    }

    _createClass(ExpansionPanel, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._determineIfTwoLine();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (process.env.NODE_ENV === 'development' && !this.state.received) {
          if (nextProps.columnWidths.length === 0) {
            // Hopefully a nice warning about fixing the missing props injected from ExpansionList
            /* eslint-disable no-console */
            console.error('The `ExpansionPanel` component expects the `columnWidths` prop to be injected from the ' + '`ExpansionList` component. It could be missing because:' + '\n - you have a wrapper component with extra functionality' + '\n - the `ExpansionPanel` is not a direct child of the `ExpansonList` component' + '\n\nYou can fix this by making sure to pass `this.props.focused` and `this.props.columWidths` ' + 'within your wrapper component and making the `ExpansionPanel` a direct child of `ExpansionList`.');
          }

          this.setState({ received: true });
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.label === prevProps.label && this.props.secondaryLabel === prevProps.secondaryLabel) {
          return;
        }

        this._determineIfTwoLine();
      }
    }, {
      key: '_isExpanded',
      value: function _isExpanded(props, state) {
        return typeof props.expanded === 'undefined' ? state.expanded : props.expanded;
      }
    }, {
      key: '_determineIfTwoLine',
      value: function _determineIfTwoLine() {
        var twoLine = false;
        Array.prototype.slice.call((0, _reactDom.findDOMNode)(this).querySelectorAll('.md-panel-column')).some(function (el) {
          return twoLine = el.offsetHeight > SINGLE_LINE_HEIGHT;
        });

        this.setState({ twoLine: twoLine });
      }
    }, {
      key: '_handleClick',
      value: function _handleClick() {
        var expanded = !this._isExpanded(this.props, this.state);
        if (this.props.onExpandToggle) {
          this.props.onExpandToggle(expanded);
        }

        if (typeof this.props.expanded === 'undefined') {
          this.setState({ expanded: expanded });
        }
      }
    }, {
      key: '_handleSave',
      value: function _handleSave(e) {
        var _props = this.props,
            onSave = _props.onSave,
            onExpandToggle = _props.onExpandToggle,
            closeOnSave = _props.closeOnSave;

        if (onSave) {
          onSave(e);
        }

        if (closeOnSave) {
          if (onExpandToggle) {
            onExpandToggle(false);
          }

          if (typeof this.props.expanded === 'undefined') {
            this.setState({ expanded: false });
          }
        }
      }
    }, {
      key: '_handleCancel',
      value: function _handleCancel(e) {
        var _props2 = this.props,
            onCancel = _props2.onCancel,
            onExpandToggle = _props2.onExpandToggle,
            closeOnCancel = _props2.closeOnCancel;

        if (onCancel) {
          onCancel(e);
        }

        if (closeOnCancel) {
          if (onExpandToggle) {
            onExpandToggle(false);
          }

          if (typeof this.props.expanded === 'undefined') {
            this.setState({ expanded: false });
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props3 = this.props,
            className = _props3.className,
            label = _props3.label,
            secondaryLabel = _props3.secondaryLabel,
            expandedSecondaryLabel = _props3.expandedSecondaryLabel,
            children = _props3.children,
            expandIconChildren = _props3.expandIconChildren,
            expandIconClassName = _props3.expandIconClassName,
            focused = _props3.focused,
            columnWidths = _props3.columnWidths,
            saveType = _props3.saveType,
            saveLabel = _props3.saveLabel,
            savePrimary = _props3.savePrimary,
            saveSecondary = _props3.saveSecondary,
            cancelType = _props3.cancelType,
            cancelLabel = _props3.cancelLabel,
            cancelPrimary = _props3.cancelPrimary,
            cancelSecondary = _props3.cancelSecondary,
            headerStyle = _props3.headerStyle,
            headerClassName = _props3.headerClassName,
            contentStyle = _props3.contentStyle,
            contentClassName = _props3.contentClassName,
            tabIndex = _props3.tabIndex,
            props = _objectWithoutProperties(_props3, ['className', 'label', 'secondaryLabel', 'expandedSecondaryLabel', 'children', 'expandIconChildren', 'expandIconClassName', 'focused', 'columnWidths', 'saveType', 'saveLabel', 'savePrimary', 'saveSecondary', 'cancelType', 'cancelLabel', 'cancelPrimary', 'cancelSecondary', 'headerStyle', 'headerClassName', 'contentStyle', 'contentClassName', 'tabIndex']);

        delete props.defaultExpanded;
        delete props.expanded;
        delete props.onSave;
        delete props.onCancel;
        delete props.onExpandToggle;
        delete props.closeOnSave;
        delete props.closeOnCancel;

        var twoLine = this.state.twoLine;

        var expanded = this._isExpanded(this.props, this.state);

        var columns = _react.Children.map(expanded && expandedSecondaryLabel || secondaryLabel, function (panelLabel, i) {
          return _react2.default.createElement(
            'div',
            { className: 'md-panel-column md-text', style: { minWidth: columnWidths[i + 1] } },
            panelLabel
          );
        });

        if (!Array.isArray(columns)) {
          columns = [columns];
        }

        columns.unshift(_react2.default.createElement(
          'div',
          { className: 'md-panel-column md-text', style: { minWidth: columnWidths[0] }, key: 'main-label' },
          label
        ));

        return _react2.default.createElement(
          _Paper2.default,
          _extends({}, props, {
            className: (0, _classnames2.default)('md-expansion-panel', {
              'md-expansion-panel--expanded': expanded
            }, className),
            'aria-expanded': expanded
          }),
          _react2.default.createElement(
            _AccessibleFakeButton2.default,
            {
              onClick: this._handleClick,
              style: headerStyle,
              className: (0, _classnames2.default)('md-panel-header', {
                'md-panel-header--expanded': expanded || twoLine,
                'md-panel-header--focused': focused
              }, headerClassName),
              tabIndex: tabIndex
            },
            columns,
            _react2.default.createElement(
              _Collapser2.default,
              { flipped: expanded, iconClassName: expandIconClassName, className: 'md-cell--right' },
              expandIconChildren
            )
          ),
          _react2.default.createElement(
            _Collapse2.default,
            { collapsed: !expanded },
            _react2.default.createElement(
              _PanelContent2.default,
              {
                style: contentStyle,
                className: contentClassName,
                onSave: this._handleSave,
                onCancel: this._handleCancel,
                saveType: saveType,
                saveLabel: saveLabel,
                savePrimary: savePrimary,
                saveSecondary: saveSecondary,
                cancelType: cancelType,
                cancelLabel: cancelLabel,
                cancelPrimary: cancelPrimary,
                cancelSecondary: cancelSecondary
              },
              children
            )
          )
        );
      }
    }]);

    return ExpansionPanel;
  }(_react.PureComponent);

  ExpansionPanel.propTypes = {
    /**
     * An optional style to apply to the panel.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the panel.
     */
    className: _react.PropTypes.string,

    /**
     * An options style to apply to the panel's header content. This is the
     * section that toggles the children to be visible and label columns.
     */
    headerStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the panel's header content. This is the
     * section that toggles the children to be visible and label columns.
     */
    headerClassName: _react.PropTypes.string,

    /**
     * An optional style to applt to the element surrounding the children when expanded.
     */
    contentStyle: _react.PropTypes.object,

    /**
     * An optional className to applt to the element surrounding the children when expanded.
     */
    contentClassName: _react.PropTypes.string,

    /**
     * The main label to display in the unexpanded panel.
     */
    label: _react.PropTypes.node.isRequired,

    /**
     * Any additional columns to display after the main label. If this is a `list`
     * instead of a singular item, they will each be formatted as a column.
     */
    secondaryLabel: _react.PropTypes.node,

    /**
     * Any additional columns to display after the main label when the panel is
     * expanded. If this is omitted, the default `secondaryLabel` will be displayed
     * instead.
     */
    expandedSecondaryLabel: _react.PropTypes.node,

    /**
     * The component to render the panel as.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,

    /**
     * The content to display once the panel is toggled open.
     */
    children: _react.PropTypes.node,

    /**
     * A boolean if the panel is currently expanded. This will force the component
     * to be controlled and require's the `onExpandToggle` function to be defined.
     */
    expanded: (0, _controlled2.default)(_react.PropTypes.bool, 'onExpandToggle', 'defaultExpanded'),

    /**
     * Boolean if an uncontrolled panel should be expanded by default.
     */
    defaultExpanded: _react.PropTypes.bool.isRequired,

    /**
     * Any children required to render the expand icon.
     */
    expandIconChildren: _react.PropTypes.node,

    /**
     * The icon className to use to render the expand icon.
     */
    expandIconClassName: _react.PropTypes.string,

    /**
     * Boolean if the `ExpansionPanel` is currently tab focused. This is injected
     * and managed by the `ExpansionList` component. Do not set yourself.
     */
    focused: _react.PropTypes.bool.isRequired,

    /**
     * A list of min-widths to apply to each column in the panel header. This is injected
     * and managed by the `ExpansionList` component. Do not set yourself.
     */
    columnWidths: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,

    /**
     * A function to call when the expansion panel's expanded state is toggled.
     * The callback for this function will include the new expanded state.
     *
     * `onExpandToggle(expanded)`
     */
    onExpandToggle: _react.PropTypes.func,

    /**
     * An optional function to call when the Save button is clicked on the expanded panel.
     */
    onSave: _react.PropTypes.func,

    /**
     * An optional function to call when the Cancel button is clicked on the expanded panel.
     */
    onCancel: _react.PropTypes.func,

    /**
     * Boolean if the panel should close when the Save button is clicked.
     */
    closeOnSave: _react.PropTypes.bool,

    /**
     * Boolean if the panel should close when the Cancel button is clicked.
     */
    closeOnCancel: _react.PropTypes.bool,

    /**
     * An optional button type to apply to the Save button. This will get
     * passed to the `FlatButton`.
     */
    saveType: _react.PropTypes.oneOf(['button', 'submit', 'reset']),

    /**
     * The label for the Save button.
     */
    saveLabel: _react.PropTypes.string.isRequired,

    /**
     * Boolean if the Save button should be styled with the primary color.
     */
    savePrimary: _react.PropTypes.bool,

    /**
     * Boolean if the Save button should be styled with the secondary color,
     */
    saveSecondary: _react.PropTypes.bool,

    /**
     * An optional button type to apply to the Cancel button. This will get
     * passed to the `FlatButton`.
     */
    cancelType: _react.PropTypes.oneOf(['button', 'submit', 'reset']),

    /**
     * The label for the Cancel button.
     */
    cancelLabel: _react.PropTypes.string.isRequired,

    /**
     * Boolean if the Cancel button should be styled with the primary color,
     */
    cancelPrimary: _react.PropTypes.bool,

    /**
     * Boolean if the Cancel button should be styled with the secondary color,
     */
    cancelSecondary: _react.PropTypes.bool,

    /**
     * The tab index for the panel's header. This allows keyboard navigation.
     */
    tabIndex: _react.PropTypes.number.isRequired
  };
  ExpansionPanel.defaultProps = {
    defaultExpanded: false,
    expandIconChildren: 'keyboard_arrow_down',
    component: 'li',
    saveLabel: 'Save',
    cancelLabel: 'Cancel',
    savePrimary: true,
    tabIndex: 0,
    closeOnSave: true,
    closeOnCancel: true,
    focused: false,
    columnWidths: []
  };
  exports.default = ExpansionPanel;
});