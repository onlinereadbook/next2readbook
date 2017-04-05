(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', 'react-prop-types/lib/deprecated', '../utils/PropTypes/controlled', '../utils/getField', './contextTypes', '../Papers/Paper', '../Helpers/Collapse'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('react-prop-types/lib/deprecated'), require('../utils/PropTypes/controlled'), require('../utils/getField'), require('./contextTypes'), require('../Papers/Paper'), require('../Helpers/Collapse'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.deprecated, global.controlled, global.getField, global.contextTypes, global.Paper, global.Collapse);
    global.Card = mod.exports;
  }
})(this, function (exports, _react, _classnames, _deprecated, _controlled, _getField, _contextTypes, _Paper, _Collapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _getField2 = _interopRequireDefault(_getField);

  var _contextTypes2 = _interopRequireDefault(_contextTypes);

  var _Paper2 = _interopRequireDefault(_Paper);

  var _Collapse2 = _interopRequireDefault(_Collapse);

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

  var Card = function (_PureComponent) {
    _inherits(Card, _PureComponent);

    function Card(props) {
      _classCallCheck(this, Card);

      var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

      _this.state = {
        zDepth: 1,
        expanded: typeof props.initiallyExpanded !== 'undefined' ? props.initiallyExpanded : !!props.defaultExpanded
      };
      _this._handleMouseOver = _this._handleMouseOver.bind(_this);
      _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
      _this._handleExpandClick = _this._handleExpandClick.bind(_this);
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      return _this;
    }

    _createClass(Card, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var _props = this.props,
            iconClassName = _props.iconClassName,
            iconChildren = _props.iconChildren,
            expanderTooltipLabel = _props.expanderTooltipLabel,
            expanderTooltipDelay = _props.expanderTooltipDelay,
            expanderTooltipPosition = _props.expanderTooltipPosition,
            expanderIconClassName = _props.expanderIconClassName,
            expanderIconChildren = _props.expanderIconChildren;


        var expanded = typeof this.props.isExpanded !== 'undefined' ? this.props.isExpanded : (0, _getField2.default)(this.props, this.state, 'expanded');

        return {
          expanded: expanded,
          onExpandClick: this._handleExpandClick,
          iconClassName: typeof iconClassName !== 'undefined' ? iconClassName : expanderIconClassName,
          iconChildren: typeof iconChildren !== 'undefined' ? iconChildren : expanderIconChildren,
          tooltipLabel: expanderTooltipLabel,
          tooltipDelay: expanderTooltipDelay,
          tooltipPosition: expanderTooltipPosition
        };
      }
    }, {
      key: '_handleMouseOver',
      value: function _handleMouseOver(e) {
        if (this.props.onMouseOver) {
          this.props.onMouseOver(e);
        }

        if (this.props.raise && !this._touched) {
          this.setState({ zDepth: 4 });
        }
      }
    }, {
      key: '_handleMouseLeave',
      value: function _handleMouseLeave(e) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e);
        }

        this._touched = false;
        if (this.props.raise && this.state.zDepth !== 1) {
          this.setState({ zDepth: 1 });
        }
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart(e) {
        if (this.props.onTouchStart) {
          this.props.onTouchStart(e);
        }

        this._touched = true;
      }
    }, {
      key: '_handleExpandClick',
      value: function _handleExpandClick(e) {
        var onExpanderClick = this.props.onExpanderClick;

        var expanded = !(0, _getField2.default)(this.props, this.state, 'expanded');
        if (onExpanderClick) {
          onExpanderClick(expanded, e);
        }

        if (typeof this.props.expanded === 'undefined') {
          this.setState({ expanded: expanded });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var zDepth = this.state.zDepth;

        var _props2 = this.props,
            className = _props2.className,
            raise = _props2.raise,
            tableCard = _props2.tableCard,
            children = _props2.children,
            props = _objectWithoutProperties(_props2, ['className', 'raise', 'tableCard', 'children']);

        delete props.expanded;
        delete props.isExpanded;
        delete props.onExpanderClick;
        delete props.initiallyExpanded;
        delete props.defaultExpanded;
        delete props.iconChildren;
        delete props.iconClassName;
        delete props.expanderIconChildren;
        delete props.expanderIconClassName;
        delete props.expanderTooltipLabel;
        delete props.expanderTooltipDelay;
        delete props.expanderTooltipPosition;

        var expanded = typeof this.props.isExpanded !== 'undefined' ? this.props.isExpanded : (0, _getField2.default)(this.props, this.state, 'expanded');
        var expanderIndex = -1;
        var parts = _react.Children.map(_react.Children.toArray(children), function (child, i) {
          if (!child || !child.props) {
            return child;
          } else if (expanderIndex < 0 && (child.props.isExpander || child.props.expander)) {
            expanderIndex = i;
          }

          if (!child.props.expandable) {
            return child;
          }

          var collapsed = expanderIndex === -1 || expanderIndex === i || !expanded;
          return _react2.default.createElement(
            _Collapse2.default,
            { collapsed: collapsed },
            child
          );
        });

        return _react2.default.createElement(
          _Paper2.default,
          _extends({}, props, {
            zDepth: zDepth,
            className: (0, _classnames2.default)('md-card', {
              'md-card--raise': raise,
              'md-card--table': tableCard
            }, 'md-background--card', className),
            onMouseOver: this._handleMouseOver,
            onMouseLeave: this._handleMouseLeave,
            onTouchStart: this._handleTouchStart
          }),
          parts
        );
      }
    }]);

    return Card;
  }(_react.PureComponent);

  Card.propTypes = {
    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the card.
     */
    className: _react.PropTypes.string,

    /**
     * Any Card parts that should be rendered.
     */
    children: _react.PropTypes.node,

    /**
     * Boolean if the card is expanded by default when there is an expander
     * component.
     */
    defaultExpanded: _react.PropTypes.bool,

    /**
     * Boolean if the card should raise on hover when on a desktop display.
     */
    raise: _react.PropTypes.bool,

    /**
     * Boolean if the card is currently expanded. This will require the `onExpanderClick` function
     * to toggle the state. The card will become controlled if this is not `undefined`.
     */
    expanded: (0, _controlled2.default)(_react.PropTypes.bool, 'onExpanderClick', 'defaultExpanded'),

    /**
     * An optional function to call when the expander is clicked.
     */
    onExpanderClick: _react.PropTypes.func,

    /**
     * The icon className to use for the expander icon.
     */
    expanderIconClassName: _react.PropTypes.string,

    /**
     * Any icon children required for the expander icon.
     */
    expanderIconChildren: _react.PropTypes.string,

    /**
     * The tooltip position for the expander icon.
     */
    expanderTooltipPosition: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * The optional tooltip to display for the expander icon.
     */
    expanderTooltipLabel: _react.PropTypes.string,

    /**
     * An optional delay before the tooltip appears for the expander icon on hover.
     */
    expanderTooltipDelay: _react.PropTypes.number,

    /**
     * Boolean if the card contains a table. It will update the styling accordingly.
     * When using the `DataTable` component, do not wrap it in a `CardText` component.
     *
     * ```js
     * <Card tableCard={true}>
     *   <CardTitle title="Example />
     *   <DataTable>
     *     ...
     *   </DataTable>
     * </Card>
     * ```
     */
    tableCard: _react.PropTypes.bool,

    /**
     * An optional function to call when the mouseover event is triggered.
     */
    onMouseOver: _react.PropTypes.func,

    /**
     * An optional function to call when the mouseleave event is triggered.
     */
    onMouseLeave: _react.PropTypes.func,

    /**
     * An optional function to call when the touchstart event is triggered.
     */
    onTouchStart: _react.PropTypes.func,
    initiallyExpanded: (0, _deprecated2.default)(_react.PropTypes.bool, 'Use `defaultExpanded` instead'),
    isExpanded: (0, _deprecated2.default)(_react.PropTypes.bool, 'Use `expanded` instead'),
    iconChildren: (0, _deprecated2.default)(_react.PropTypes.node, 'Use the `expanderIconChildren` prop instead'),
    iconClassName: (0, _deprecated2.default)(_react.PropTypes.string, 'Use the `expanderIconClassName` prop instead')
  };
  Card.defaultProps = {
    expanderIconChildren: 'keyboard_arrow_down',
    expanderIconClassName: 'material-icons',
    expanderTooltipPosition: 'left'
  };
  Card.childContextTypes = _contextTypes2.default;
  exports.default = Card;
});