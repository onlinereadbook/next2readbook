(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'classnames', 'react-prop-types/lib/deprecated', '../utils/getField', '../utils/PropTypes/controlled', '../constants/keyCodes', '../Helpers/AccessibleFakeInkedButton', '../Helpers/Collapse', '../FontIcons/Collapser', './TileAddon', './ListItemText', './List'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('classnames'), require('react-prop-types/lib/deprecated'), require('../utils/getField'), require('../utils/PropTypes/controlled'), require('../constants/keyCodes'), require('../Helpers/AccessibleFakeInkedButton'), require('../Helpers/Collapse'), require('../FontIcons/Collapser'), require('./TileAddon'), require('./ListItemText'), require('./List'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.classnames, global.deprecated, global.getField, global.controlled, global.keyCodes, global.AccessibleFakeInkedButton, global.Collapse, global.Collapser, global.TileAddon, global.ListItemText, global.List);
    global.ListItem = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _classnames, _deprecated, _getField, _controlled, _keyCodes, _AccessibleFakeInkedButton, _Collapse, _Collapser, _TileAddon, _ListItemText, _List) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _getField2 = _interopRequireDefault(_getField);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

  var _Collapse2 = _interopRequireDefault(_Collapse);

  var _Collapser2 = _interopRequireDefault(_Collapser);

  var _TileAddon2 = _interopRequireDefault(_TileAddon);

  var _ListItemText2 = _interopRequireDefault(_ListItemText);

  var _List2 = _interopRequireDefault(_List);

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

  var ListItem = function (_PureComponent) {
    _inherits(ListItem, _PureComponent);

    function ListItem(props) {
      _classCallCheck(this, ListItem);

      var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

      _this.state = { active: false };

      if (typeof props.isOpen === 'undefined') {
        _this.state.isOpen = typeof props.initiallyOpen !== 'undefined' ? props.initiallyOpen : !!props.defaultOpen;
      }

      _this.focus = _this.focus.bind(_this);
      _this._setTile = _this._setTile.bind(_this);
      _this._setContainer = _this._setContainer.bind(_this);
      _this._handleOutsideClick = _this._handleOutsideClick.bind(_this);
      _this._handleClick = _this._handleClick.bind(_this);
      _this._handleKeyUp = _this._handleKeyUp.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      _this._handleMouseOver = _this._handleMouseOver.bind(_this);
      _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
      return _this;
    }

    _createClass(ListItem, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.state.active) {
          window.removeEventListener('click', this._handleOutsideClick);
        }

        if (this._touchTimeout) {
          clearTimeout(this._touchTimeout);
        }
      }
    }, {
      key: 'focus',
      value: function focus() {
        if (this._tile) {
          this._tile.focus();
        }
      }
    }, {
      key: 'blur',
      value: function blur() {
        if (this._tile) {
          this._tile.blur();
        }
      }
    }, {
      key: '_setTile',
      value: function _setTile(tile) {
        if (tile) {
          this._tile = tile;
        }
      }
    }, {
      key: '_setContainer',
      value: function _setContainer(container) {
        if (container) {
          this._container = (0, _reactDom.findDOMNode)(container);
        }
      }
    }, {
      key: '_handleOutsideClick',
      value: function _handleOutsideClick(e) {
        if (this._container && !this._container.contains(e.target)) {
          window.removeEventListener('click', this._handleOutsideClick);
          this.setState({ active: false });
        }
      }
    }, {
      key: '_handleClick',
      value: function _handleClick(e) {
        if (this.props.onClick) {
          this.props.onClick(e);
        }

        if (typeof this.state.isOpen !== 'undefined') {
          this.setState({ isOpen: !this.state.isOpen });
        }
      }
    }, {
      key: '_handleMouseOver',
      value: function _handleMouseOver(e) {
        if (this.props.onMouseOver) {
          this.props.onMouseOver(e);
        }

        if (!this.props.disabled) {
          this.setState({ active: true });
        }
      }
    }, {
      key: '_handleMouseLeave',
      value: function _handleMouseLeave(e) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e);
        }

        if (!this.props.disabled) {
          this.setState({ active: false });
        }
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart(e) {
        if (this.props.onTouchStart) {
          this.props.onTouchStart(e);
        }

        this._touched = true;

        this.setState({ active: true, touchedAt: Date.now() });
      }
    }, {
      key: '_handleTouchEnd',
      value: function _handleTouchEnd(e) {
        var _this2 = this;

        if (this.props.onTouchEnd) {
          this.props.onTouchEnd(e);
        }

        var time = Date.now() - this.state.touchedAt;
        this._touchTimeout = setTimeout(function () {
          _this2._touchTimeout = null;

          _this2.setState({ active: false });
        }, time > 450 ? 0 : 450 - time);
      }
    }, {
      key: '_handleKeyUp',
      value: function _handleKeyUp(e) {
        if (this.props.onKeyUp) {
          this.props.onKeyUp(e);
        }

        if ((e.which || e.keyCode) === _keyCodes.TAB) {
          window.addEventListener('click', this._handleOutsideClick);
          this.setState({ active: true });
        }
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        if (this.props.onKeyDown) {
          this.props.onKeyDown(e);
        }

        if ((e.which || e.keyCode) === _keyCodes.TAB) {
          window.removeEventListener('click', this._handleOutsideClick);
          this.setState({ active: false });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            style = _props.style,
            className = _props.className,
            tileStyle = _props.tileStyle,
            tileClassName = _props.tileClassName,
            disabled = _props.disabled,
            leftIcon = _props.leftIcon,
            leftAvatar = _props.leftAvatar,
            inset = _props.inset,
            rightIcon = _props.rightIcon,
            rightAvatar = _props.rightAvatar,
            primaryText = _props.primaryText,
            secondaryText = _props.secondaryText,
            threeLines = _props.threeLines,
            children = _props.children,
            nestedItems = _props.nestedItems,
            active = _props.active,
            activeClassName = _props.activeClassName,
            expanderIconChildren = _props.expanderIconChildren,
            expanderIconClassName = _props.expanderIconClassName,
            props = _objectWithoutProperties(_props, ['style', 'className', 'tileStyle', 'tileClassName', 'disabled', 'leftIcon', 'leftAvatar', 'inset', 'rightIcon', 'rightAvatar', 'primaryText', 'secondaryText', 'threeLines', 'children', 'nestedItems', 'active', 'activeClassName', 'expanderIconChildren', 'expanderIconClassName']);

        delete props.isOpen;
        delete props.defaultOpen;
        delete props.initiallyOpen;

        var isOpen = (0, _getField2.default)(this.props, this.state, 'isOpen');
        var leftNode = _react2.default.createElement(_TileAddon2.default, {
          key: 'left-addon',
          active: active,
          activeClassName: activeClassName,
          icon: leftIcon,
          avatar: leftAvatar
        });

        var rightNode = _react2.default.createElement(_TileAddon2.default, {
          key: 'right-addon',
          active: active,
          activeClassName: activeClassName,
          icon: rightIcon,
          avatar: rightAvatar
        });

        var nestedList = void 0;
        if (nestedItems) {
          nestedList = _react2.default.createElement(
            _Collapse2.default,
            { collapsed: !isOpen },
            _react2.default.createElement(
              _List2.default,
              null,
              nestedItems
            )
          );

          if (!rightIcon || !rightAvatar) {
            rightNode = _react2.default.createElement(_TileAddon2.default, {
              key: 'expander-addon',
              icon: _react2.default.createElement(
                _Collapser2.default,
                { flipped: isOpen, iconClassName: expanderIconClassName },
                expanderIconChildren
              ),
              avatar: null
            });
          }
        }
        var icond = !!leftIcon || !!rightIcon;
        var avatard = !!leftAvatar || !!rightAvatar;

        return _react2.default.createElement(
          'li',
          {
            style: style,
            className: (0, _classnames2.default)('md-list-item', {
              'md-list-item--nested-container': nestedItems
            }, className),
            ref: this._setContainer
          },
          _react2.default.createElement(
            _AccessibleFakeInkedButton2.default,
            _extends({}, props, {
              __SUPER_SECRET_REF__: this._setTile,
              key: 'tile',
              onClick: this._handleClick,
              onMouseOver: this._handleMouseOver,
              onMouseLeave: this._handleMouseLeave,
              onTouchStart: this._handleTouchStart,
              onTouchEnd: this._handleTouchEnd,
              onKeyDown: this._handleKeyDown,
              onKeyUp: this._handleKeyUp,
              disabled: disabled,
              style: tileStyle,
              className: (0, _classnames2.default)('md-list-tile', {
                'md-text': !disabled,
                'md-text--disabled': disabled,
                'md-list-tile--active': this.state.active && !this._touched,
                'md-list-tile--icon': !secondaryText && icond && !avatard,
                'md-list-tile--avatar': !secondaryText && avatard,
                'md-list-tile--two-lines': secondaryText && !threeLines,
                'md-list-tile--three-lines': secondaryText && threeLines,
                'md-list-item--inset': inset && !leftIcon && !leftAvatar
              }, tileClassName),
              'aria-expanded': nestedList ? isOpen : null
            }),
            leftNode,
            _react2.default.createElement(_ListItemText2.default, {
              active: active,
              activeClassName: activeClassName,
              disabled: disabled,
              primaryText: primaryText,
              secondaryText: secondaryText,
              threeLines: threeLines,
              className: (0, _classnames2.default)({
                'md-tile-content--left-icon': leftIcon,
                'md-tile-content--left-avatar': leftAvatar,
                'md-tile-content--right-padding': rightIcon || rightAvatar
              })
            }),
            rightNode,
            children
          ),
          nestedList
        );
      }
    }]);

    return ListItem;
  }(_react.PureComponent);

  ListItem.propTypes = {
    /**
     * An optional style to apply to the `li` tag.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the `li` tag.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to the `.md-list-tile`.
     *
     * @see component
     */
    tileStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the `.md-list-tile`.
     *
     * @see component
     */
    tileClassName: _react.PropTypes.string,

    /**
     * Any additional children to display in the `.md-list-tile`. If you use this prop,
     * you will most likely need to override the `height` for the `.md-list-tile--icon`,
     * `.md-list-tile--avatar`, `.md-list-tile--two-lines`, and/or `.md-list-tile--three-lines`
     * to get it to display correctly unless the children are positioned `absolute`.
     */
    children: _react.PropTypes.node,

    /**
     * Boolean if the `ListItem` is disabled.
     */
    disabled: _react.PropTypes.bool,

    /**
     * An optional tab index for the `.md-list-tile`. If omitted, it will default to the
     * `AccessibleFakeButton`'s `tabIndex` default prop value.
     */
    tabIndex: _react.PropTypes.number,

    /**
     * The primary text to display. This will only be rendered as a single line. Any overflown
     * text will be converted to ellipsis.
     */
    primaryText: _react.PropTypes.node.isRequired,

    /**
     * An optional secondary text to display below the `primaryText`. This can be an additional
     * one or two lines. Like the `primaryText`, and overflown text will be converted to ellipsis.
     *
     * You must set the `threeLines` prop to `true` if you want this to be displayed as two lines.
     */
    secondaryText: _react.PropTypes.node,

    /**
     * An optional `FontIcon` to display to the left of the text.
     */
    leftIcon: _react.PropTypes.node,

    /**
     * Boolean if the list item should be inset as if there is a `leftIcon` or a `leftAvatar`.
     * This is used for some lists where only a parent contains the icon.
     */
    inset: _react.PropTypes.bool,

    /**
     * An optional `Avatar` to display to the left of the text. If you have a mixed `List` of
     * `FontIcon` and `Avatar`, it is recommended to set the `iconSized` prop on the `Avatar` to
     * `true` so that the `Avatar` will be scaled down to the `FontIcon` size.
     */
    leftAvatar: _react.PropTypes.node,

    /**
     * An optional `FontIcon` to display to the right of the text.
     */
    rightIcon: _react.PropTypes.node,

    /**
     * An optional `Avatar` to display to the right of the text. If you have a mixed `List` of
     * `FontIcon` and `Avatar`, it is recommended to set the `iconSized` prop on the `Avatar` to
     * `true` so that the `Avatar` will be scaled down to the `FontIcon` size.
     */
    rightAvatar: _react.PropTypes.node,

    /**
     * Boolean if the `secondaryText` should span two lines instead of one. This will include
     * three lines of text in total when including the `primaryText`.
     */
    threeLines: _react.PropTypes.bool,

    /**
     * An optional component to render the `.md-list-tile` as. This is mostly useful if you
     * want to use the `ListItem` for navigation and working with the `react-router`'s `Link`
     * component.
     */
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,

    /**
     * An optional list of `ListItem`, `ListItemControl`, `Divider`, or `Subheader` components
     * to render in a nested list. This will inject an expander icon to the right of the text
     * in the `.md-list-tile` that rotates 180 degrees when open.
     *
     * The nested items will be visible once the user clicks on the `ListItem`.
     *
     * @see `defaultOpen`
     * @see `isOpen`
     */
    nestedItems: _react.PropTypes.arrayOf(_react.PropTypes.node),

    /**
     * Boolean if the `nestedItems` are visible by default.
     */
    defaultOpen: _react.PropTypes.bool,

    /**
     * Boolean if the `nestedItems` are visible. This will make the `nestedItems` controlled
     * and require the `onClick` function to be defined.
     */
    isOpen: (0, _controlled2.default)(_react.PropTypes.bool, 'onClick', 'defaultOpen'),

    /**
     * Any children used to render the expander icon.
     */
    expanderIconChildren: _react.PropTypes.node,

    /**
     * An icon className to use to render the expander icon.
     */
    expanderIconClassName: _react.PropTypes.string,

    /**
     * An optional function to call when the `.md-list-tile` is clicked. This is required if the
     * `isOpen` prop is defined.
     */
    onClick: _react.PropTypes.func,

    /**
     * An optional function to call when the `.md-list-tile` triggers the `mouseover` event.
     */
    onMouseOver: _react.PropTypes.func,

    /**
     * An optional function to call when the `.md-list-tile` triggers the `mouseleave` event.
     */
    onMouseLeave: _react.PropTypes.func,

    /**
     * An optional function to call when the `.md-list-tile` triggers the `touchstart` event.
     */
    onTouchStart: _react.PropTypes.func,

    /**
     * An optional function to call when the `.md-list-tile` triggers the `touchend` event.
     */
    onTouchEnd: _react.PropTypes.func,

    /**
     * An optional function to call when the `.md-list-tile` triggers the `keydown` event.
     */
    onKeyDown: _react.PropTypes.func,

    /**
     * An optional function to call when the `.md-list-tile` triggers the `keyup` event.
     */
    onKeyUp: _react.PropTypes.func,

    /**
     * Boolean if the `ListItem` is currently active. This will apply the `activeClassName` prop
     * to the `leftIcon`, `rightIcon`, and the `primaryText`.
     */
    active: _react.PropTypes.bool,

    /**
     * The className to apply to the `leftIcon`, `rightIcon`, and `primaryText` when the `active`
     * prop is `true`.
     */
    activeClassName: _react.PropTypes.string,
    initiallyOpen: (0, _deprecated2.default)(_react.PropTypes.bool, 'Use `defaultOpen` instead')
  };
  ListItem.defaultProps = {
    activeClassName: 'md-text--theme-primary',
    component: 'div',
    expanderIconChildren: 'keyboard_arrow_down'
  };
  exports.default = ListItem;
});