(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'react-addons-css-transition-group', 'classnames', '../utils/PropTypes/controlled', '../utils/getField', '../constants/keyCodes', '../Lists/ListItem', '../Menus/Menu', '../TextFields/TextField'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('react-addons-css-transition-group'), require('classnames'), require('../utils/PropTypes/controlled'), require('../utils/getField'), require('../constants/keyCodes'), require('../Lists/ListItem'), require('../Menus/Menu'), require('../TextFields/TextField'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.reactAddonsCssTransitionGroup, global.classnames, global.controlled, global.getField, global.keyCodes, global.ListItem, global.Menu, global.TextField);
    global.Autocomplete = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _reactAddonsCssTransitionGroup, _classnames, _controlled, _getField, _keyCodes, _ListItem, _Menu, _TextField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _controlled2 = _interopRequireDefault(_controlled);

  var _getField2 = _interopRequireDefault(_getField);

  var _ListItem2 = _interopRequireDefault(_ListItem);

  var _Menu2 = _interopRequireDefault(_Menu);

  var _TextField2 = _interopRequireDefault(_TextField);

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

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
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

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
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

  var Autocomplete = function (_PureComponent) {
    _inherits(Autocomplete, _PureComponent);

    _createClass(Autocomplete, null, [{
      key: 'caseInsensitiveFilter',
      value: function caseInsensitiveFilter(haystack, filterText, dataLabel) {
        var needle = filterText.toLowerCase();

        return haystack.filter(function (hay) {
          if (hay === null || typeof hay === 'undefined') {
            return false;
          } else if (_react2.default.isValidElement(hay)) {
            return true;
          }

          var value = void 0;
          switch (typeof hay === 'undefined' ? 'undefined' : _typeof(hay)) {
            case 'string':
            case 'number':
              value = hay.toString();
              break;
            default:
              value = hay[dataLabel];
          }

          return value && value.toLowerCase().indexOf(needle) !== -1;
        });
      }
    }, {
      key: 'fuzzyFilter',
      value: function fuzzyFilter(haystack, needle, dataLabel) {
        // Create an amazing regex that matches the letters in order
        // and escapes any strings that could be part of a regex.
        var reg = new RegExp(('' + needle).split('').join('\\w*').replace(/(\(|\||\)|\\(?!w\*)|\[|\|-|\.|\^|\+|\$|\?|^(?!w)\*)/g, '\\$1')
        // Couldn't get the matching of two '*' working, so replace them here..
        .replace(/\*\*/g, '*\\*'), 'i');

        return haystack.filter(function (hay) {
          if (hay === null || typeof hay === 'undefined') {
            return false;
          } else if (_react2.default.isValidElement(hay)) {
            return true;
          }

          var value = void 0;
          switch (typeof hay === 'undefined' ? 'undefined' : _typeof(hay)) {
            case 'string':
            case 'number':
              value = hay.toString();
              break;
            default:
              value = hay[dataLabel];
          }

          return value && value.match(reg);
        });
      }
    }, {
      key: 'findIgnoreCase',
      value: function findIgnoreCase(haystack, value, dataLabel) {
        var needle = value ? value.toLowerCase() : '';

        if (!needle) {
          return needle;
        }

        var suggestion = '';
        haystack.some(function (hay) {
          if (hay === null || typeof hay === 'undefined' || _react2.default.isValidElement(hay)) {
            return false;
          }

          var hayStr = (typeof hay === 'undefined' ? 'undefined' : _typeof(hay)) === 'object' ? hay[dataLabel] : hay.toString();

          if (hayStr.toLowerCase().indexOf(needle) === 0) {
            suggestion = hayStr;
          }

          return suggestion;
        });

        return suggestion;
      }
    }]);

    function Autocomplete(props) {
      _classCallCheck(this, Autocomplete);

      var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

      var defaultValue = props.defaultValue,
          data = props.data,
          dataLabel = props.dataLabel,
          filter = props.filter;


      _this.state = {
        value: defaultValue,
        matches: defaultValue && filter ? filter(data, defaultValue, dataLabel) : [],
        isOpen: false,
        matchIndex: -1,
        manualFocus: false,
        suggestionIndex: -1
      };

      _this._setField = _this._setField.bind(_this);
      _this._setMenu = _this._setMenu.bind(_this);
      _this._setSuggestion = _this._setSuggestion.bind(_this);
      _this._close = _this._close.bind(_this);
      _this._updateFont = _this._updateFont.bind(_this);
      _this._handleBlur = _this._handleBlur.bind(_this);
      _this._handleFocus = _this._handleFocus.bind(_this);
      _this._handleClick = _this._handleClick.bind(_this);
      _this._handleChange = _this._handleChange.bind(_this);
      _this._handleItemClick = _this._handleItemClick.bind(_this);
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      _this._handleMenuKeyDown = _this._handleMenuKeyDown.bind(_this);
      _this._handleTextFieldKeyDown = _this._handleTextFieldKeyDown.bind(_this);
      _this._focusSuggestion = _this._focusSuggestion.bind(_this);
      _this._findInlineSuggestions = _this._findInlineSuggestions.bind(_this);
      _this._mapToListItem = _this._mapToListItem.bind(_this);
      _this._toggleMenu = _this._toggleMenu.bind(_this);
      _this._updateSuggestionStyle = _this._updateSuggestionStyle.bind(_this);
      return _this;
    }

    _createClass(Autocomplete, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.inline) {
          window.addEventListener('resize', this._updateFont);
        }
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        if (this.state.isOpen !== nextState.isOpen) {
          var menuFn = nextProps['onMenu' + (nextState.isOpen ? 'Open' : 'Close')];
          if (menuFn) {
            menuFn();
          }
        }

        if (this.props.inline !== nextProps.inline) {
          if (nextProps.inline) {
            this._updateFont();
            window.addEventListener('resize', this._updateFont);
          } else {
            window.removeEventListener('resize', this._updateFont);
          }
        }

        if (nextProps.data !== this.props.data || nextProps.value !== this.props.value) {
          var data = nextProps.data,
              filter = nextProps.filter,
              dataLabel = nextProps.dataLabel;

          var value = (0, _getField2.default)(nextProps, nextState, 'value');

          var matches = filter ? filter(data, value, dataLabel) : data;
          var next = { matches: matches };
          if (value && nextState.focus && matches.length) {
            next.isOpen = true;
          }

          this.setState(next);
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var suggestion = this.state.suggestion;

        this._updateSuggestionStyle(suggestion && !prevState.suggestion, !suggestion && prevState.suggestion);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.inline) {
          window.removeEventListener('resize', this._updateFont);
        }
      }
    }, {
      key: '_updateSuggestionStyle',
      value: function _updateSuggestionStyle(isNew, isDeleted) {
        if (isNew) {
          var msg = (0, _reactDom.findDOMNode)(this).querySelector('.md-text-field-message');

          if (msg) {
            var cs = window.getComputedStyle(this._suggestion);
            var bottom = parseInt(cs.getPropertyValue('bottom'), 10) + msg.offsetHeight;

            this.setState({
              suggestionStyle: Object.assign({}, this.state.suggestionStyle, { bottom: bottom })
            });
          }
        } else if (isDeleted) {
          var suggestionStyle = Object.assign({}, this.state.suggestionStyle);
          delete suggestionStyle.bottom;

          this.setState({ suggestionStyle: suggestionStyle });
        }
      }
    }, {
      key: '_updateFont',
      value: function _updateFont() {
        if (this._field) {
          var cs = window.getComputedStyle(this._field);
          this.setState({
            fontSize: parseInt(cs.getPropertyValue('font-size'), 10),
            font: cs.getPropertyValue('font')
          });
        }
      }
    }, {
      key: '_close',
      value: function _close() {
        if (this.props.onBlur) {
          this.props.onBlur();
        }

        this.setState({ focus: false, isOpen: false });
      }
    }, {
      key: '_handleChange',
      value: function _handleChange(value, event) {
        var _props = this.props,
            onChange = _props.onChange,
            filter = _props.filter,
            findInlineSuggestion = _props.findInlineSuggestion,
            data = _props.data,
            dataLabel = _props.dataLabel,
            inline = _props.inline;


        if (onChange) {
          onChange(value, event);
        }

        if (inline) {
          // If findInlineSuggestion does not exist, assume that `onChange` will handle it.
          return findInlineSuggestion ? this._findInlineSuggestions(value) : null;
        }

        var matches = value ? this.state.matches : [];
        if (value && filter) {
          matches = filter(data, value, dataLabel);
        }

        return this.setState({ matches: matches, isOpen: !!matches.length, value: value });
      }
    }, {
      key: '_handleFocus',
      value: function _handleFocus(e) {
        if (this.props.onFocus) {
          this.props.onFocus(e);
        }

        this.setState({
          matchIndex: -1,
          isOpen: !this.state.manualFocus && !!(0, _getField2.default)(this.props, this.state, 'value') && !!this.state.matches.length,
          manualFocus: false,
          focus: true
        });
      }
    }, {
      key: '_handleBlur',
      value: function _handleBlur(e) {
        if (this.props.inline) {
          if (this.props.onBlur) {
            this.props.onBlur(e);
          }

          this.setState({ focus: false });
        }
      }
    }, {
      key: '_handleTextFieldKeyDown',
      value: function _handleTextFieldKeyDown(e) {
        var _props2 = this.props,
            inline = _props2.inline,
            data = _props2.data,
            dataLabel = _props2.dataLabel,
            onKeyDown = _props2.onKeyDown,
            onAutocomplete = _props2.onAutocomplete;
        var suggestionIndex = this.state.suggestionIndex;


        var key = e.which || e.keyCode;
        if (onKeyDown) {
          onKeyDown(e);
        }

        if (inline && key === _keyCodes.TAB && suggestionIndex !== -1) {
          // Autocomplete the text field
          e.preventDefault();

          var value = data[suggestionIndex];
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            value = value[dataLabel];
          }

          if (onAutocomplete) {
            onAutocomplete(value, suggestionIndex, this.state.matches);
          }

          this.setState({
            value: value,
            suggestion: '',
            suggestionIndex: -1,
            tabbed: true
          });
        }
      }
    }, {
      key: '_handleMenuKeyDown',
      value: function _handleMenuKeyDown(e) {
        var key = e.which || e.keyCode;
        if (key === _keyCodes.TAB) {
          if (this.props.onBlur) {
            this.props.onBlur();
          }

          this.setState({ isOpen: false });
        } else if (key === _keyCodes.UP || key === _keyCodes.DOWN) {
          this._focusSuggestion(key === _keyCodes.UP, e);
        } else if ((key === _keyCodes.ENTER || key === _keyCodes.SPACE) && e.target.classList.contains('md-list-tile')) {
          // Prevent any form submissions
          e.preventDefault();

          // Need to emulate the click event since the default enter/space don't work for some reason
          e.target.click();
          this._handleItemClick(this.state.matchIndex);
        }
      }
    }, {
      key: '_handleClick',
      value: function _handleClick(e) {
        var target = e.target;
        while (target && target.parentNode) {
          if (target.classList.contains('md-list-item')) {
            var items = target.parentNode.querySelectorAll('.md-list-item');
            items = Array.prototype.slice.call(items);

            return this._handleItemClick(items.indexOf(target));
          }

          target = target.parentNode;
        }

        return null;
      }
    }, {
      key: '_handleItemClick',
      value: function _handleItemClick(index) {
        var _this2 = this;

        if (index === -1) {
          return;
        }

        var matches = this.state.matches;
        var _props3 = this.props,
            data = _props3.data,
            dataLabel = _props3.dataLabel,
            filter = _props3.filter,
            onAutocomplete = _props3.onAutocomplete,
            clearOnAutocomplete = _props3.clearOnAutocomplete;

        var value = matches.filter(function (m) {
          return !_react2.default.isValidElement(m);
        })[index];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          value = value[dataLabel];
        }

        if (onAutocomplete) {
          onAutocomplete(value, index, matches);
        }

        value = clearOnAutocomplete ? '' : value;
        this.setState({
          isOpen: false,
          manualFocus: true,
          matches: filter ? filter(data, value, dataLabel) : matches,
          value: value
        }, function () {
          _this2._field.focus();
        });
      }
    }, {
      key: '_focusSuggestion',
      value: function _focusSuggestion(negative, e) {
        e.preventDefault();
        var _state = this.state,
            matchIndex = _state.matchIndex,
            matches = _state.matches;

        var l = matches.length;

        var index = void 0;
        if (negative && matchIndex === -1 || !negative && matchIndex >= l) {
          return;
        } else if (negative) {
          index = matchIndex - 1;
          if (index === -1) {
            this._field.focus();
          }
        } else {
          index = Math.min(l, matchIndex + 1);
        }

        if (index !== -1 && index !== matchIndex) {
          var item = this._menu.querySelectorAll('.md-list-tile')[index];
          if (item) {
            item.focus();
          }
        }

        this.setState({ matchIndex: index });
      }
    }, {
      key: '_findInlineSuggestions',
      value: function _findInlineSuggestions(value) {
        var _props4 = this.props,
            data = _props4.data,
            dataLabel = _props4.dataLabel,
            findInlineSuggestion = _props4.findInlineSuggestion;
        var _state2 = this.state,
            font = _state2.font,
            fontSize = _state2.fontSize;
        var suggestionStyle = this.state.suggestionStyle;


        var suggestion = findInlineSuggestion(data, value, dataLabel);
        if ((typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
          throw new Error('`findInlineSuggestion` should return a string or a number, but got an object.', suggestion);
        }

        var suggestionIndex = -1;

        if (suggestion) {
          // Find index of suggestion
          data.some(function (datum, i) {
            var d = (typeof dataum === 'undefined' ? 'undefined' : _typeof(dataum)) === 'object' ? datum[dataLabel] : datum;
            if (d === suggestion) {
              suggestionIndex = i;
            }

            return suggestionIndex !== -1;
          });

          // Strip already used letters
          suggestion = suggestion.toString().substring(value.length, suggestion.length);

          // Calculate distance to move the suggestion to already existing text
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');

          if (context) {
            // context doesn't exist in jsdom with jest
            context.font = font;
            var padding = this.props.block ? fontSize * 1.5 : 8;

            // Update suggestion style to be offset and not expand past text field
            var left = context.measureText(value).width + padding;
            suggestionStyle = Object.assign({}, suggestionStyle, { left: left });
          }
        }

        this.setState({ value: value, suggestion: suggestion, suggestionIndex: suggestionIndex, suggestionStyle: suggestionStyle, tabbed: false });
      }
    }, {
      key: '_mapToListItem',
      value: function _mapToListItem(match) {
        if (_react2.default.isValidElement(match)) {
          return match;
        }

        var _props5 = this.props,
            dataLabel = _props5.dataLabel,
            dataValue = _props5.dataValue,
            deleteKeys = _props5.deleteKeys;

        var props = void 0;
        switch (typeof match === 'undefined' ? 'undefined' : _typeof(match)) {
          case 'string':
          case 'number':
            props = {
              key: match,
              primaryText: match
            };
            break;
          default:
            props = _extends({}, match, {
              key: match.key || dataValue && match[dataValue] || match[dataLabel],
              primaryText: match[dataLabel]
            });

            if (typeof deleteKeys === 'string') {
              delete props[deleteKeys];
            } else if (Array.isArray(deleteKeys)) {
              deleteKeys.forEach(function (key) {
                delete props[key];
              });
            }

        }

        // Allows focus, but does not let tab focus. This is so up and down keys work.
        return _react2.default.createElement(_ListItem2.default, _extends({ tabIndex: -1 }, props));
      }
    }, {
      key: '_toggleMenu',
      value: function _toggleMenu(e) {
        if (this.props.onMouseDown) {
          this.props.onMouseDown(e);
        }

        if (!this.props.inline && this.state.matches.length && (0, _getField2.default)(this.props, this.state, 'value')) {
          this.setState({ isOpen: !this.state.isOpen });
        }
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart(e) {
        var target = e.target;
        var _props6 = this.props,
            data = _props6.data,
            dataLabel = _props6.dataLabel,
            onAutocomplete = _props6.onAutocomplete;
        var _state3 = this.state,
            suggestionIndex = _state3.suggestionIndex,
            suggestion = _state3.suggestion;

        if (target.classList.contains('md-autocomplete-suggestion') && suggestion) {
          var value = data[suggestionIndex];
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            value = value[dataLabel];
          }

          if (onAutocomplete) {
            onAutocomplete(value, suggestionIndex, data);
          }

          this.setState({
            value: value,
            suggestion: '',
            suggestionIndex: -1,
            tabbed: true
          });
        }
      }
    }, {
      key: '_setField',
      value: function _setField(field) {
        if (field) {
          this._field = field.getField();

          if (this.props.inline) {
            this._updateFont();
          }
        }
      }
    }, {
      key: '_setMenu',
      value: function _setMenu(menu) {
        this._menu = (0, _reactDom.findDOMNode)(menu);
      }
    }, {
      key: '_setSuggestion',
      value: function _setSuggestion(suggestion) {
        this._suggestion = suggestion;
      }
    }, {
      key: 'render',
      value: function render() {
        var _state4 = this.state,
            isOpen = _state4.isOpen,
            matches = _state4.matches,
            tabbed = _state4.tabbed,
            focus = _state4.focus,
            suggestionStyle = _state4.suggestionStyle;

        var _props7 = this.props,
            fullWidth = _props7.fullWidth,
            block = _props7.block,
            style = _props7.style,
            className = _props7.className,
            listStyle = _props7.listStyle,
            listClassName = _props7.listClassName,
            textFieldStyle = _props7.textFieldStyle,
            textFieldClassName = _props7.textFieldClassName,
            inline = _props7.inline,
            props = _objectWithoutProperties(_props7, ['fullWidth', 'block', 'style', 'className', 'listStyle', 'listClassName', 'textFieldStyle', 'textFieldClassName', 'inline']);

        delete props.value;
        delete props.defaultValue;
        delete props.dataLabel;
        delete props.dataValue;
        delete props.filter;
        delete props.data;
        delete props.onAutocomplete;
        delete props.onMenuOpen;
        delete props.onMenuClose;
        delete props.onBlur;
        delete props.onFocus;
        delete props.onKeyDown;
        delete props.onMouseDown;
        delete props.onChange;
        delete props.findInlineSuggestion;
        delete props.clearOnAutocomplete;
        delete props.deleteKeys;

        var value = (0, _getField2.default)(this.props, this.state, 'value');

        var autocomplete = _react2.default.createElement(_TextField2.default, _extends({}, props, {
          style: textFieldStyle,
          className: (0, _classnames2.default)('md-autocomplete', textFieldClassName),
          key: 'autocomplete',
          ref: this._setField,
          value: value,
          onKeyDown: this._handleTextFieldKeyDown,
          onMouseDown: this._toggleMenu,
          onChange: this._handleChange,
          onFocus: this._handleFocus,
          onBlur: this._handleBlur,
          fullWidth: fullWidth,
          block: block
        }));

        if (inline) {
          var suggestion = void 0;
          if (focus && this.state.suggestion) {
            suggestion = _react2.default.createElement(
              'span',
              {
                ref: this._setSuggestion,
                key: 'suggestion',
                style: suggestionStyle,
                className: (0, _classnames2.default)('md-autocomplete-suggestion', {
                  'md-autocomplete-suggestion--floating': props.label,
                  'md-autocomplete-suggestion--block': block
                })
              },
              this.state.suggestion
            );
          }

          return _react2.default.createElement(
            _reactAddonsCssTransitionGroup2.default,
            {
              component: 'div',
              style: style,
              className: (0, _classnames2.default)('md-menu-container md-autocomplete-container', className, {
                'md-full-width': fullWidth || block
              }),
              transitionName: 'opacity',
              transitionEnterTimeout: 150,
              transitionLeave: !tabbed,
              transitionLeaveTimeout: 150,
              onTouchStart: this._handleTouchStart
            },
            autocomplete,
            suggestion
          );
        }

        return _react2.default.createElement(
          _Menu2.default,
          {
            ref: this._setMenu,
            toggle: autocomplete,
            isOpen: isOpen,
            onClick: this._handleClick,
            onClose: this._close,
            onKeyDown: this._handleMenuKeyDown,
            position: _Menu2.default.Positions.BELOW,
            fullWidth: fullWidth || block,
            style: style,
            className: (0, _classnames2.default)('md-autocomplete-container', className),
            listStyle: listStyle,
            listClassName: (0, _classnames2.default)('md-autocomplete-list', listClassName)
          },
          matches.map(this._mapToListItem)
        );
      }
    }]);

    return Autocomplete;
  }(_react.PureComponent);

  Autocomplete.propTypes = {
    /**
     * An optional style to apply to the menu that contains the autocomplete.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the menu that contains the autocomplete.
     */
    className: _react.PropTypes.string,

    /**
     * An optional style to apply to the autocomplete's text field.
     */
    textFieldStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the autocomplete's text field.
     */
    textFieldClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the autocomplete's text field input itself.
     */
    inputStyle: _react.PropTypes.object,

    /**
     * An optional className to apply to the autocomplete's input field iteself.
     */
    inputClassName: _react.PropTypes.string,

    /**
     * The optional style to apply to the opened menu List if the
     * `Autocomplete` is not using `inline` suggestions.
     */
    listStyle: _react.PropTypes.object,

    /**
     * The optional className to apply to the opened menu List if the
     * `Autocomplete` is not using `inline` suggestions.
     */
    listClassName: _react.PropTypes.string,

    /**
     * Boolean if the autocomplete is disabled.
     */
    disabled: _react.PropTypes.bool,

    /**
     * A label to display with the autocomplete.
     */
    label: _react.PropTypes.string,

    /**
     * An optional value to use for the text field. This will force this component
     * to be controlled and require the `onChange` function.
     */
    value: (0, _controlled2.default)(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), 'onChange'),

    /**
     * The default value for the autocomplete's text field.
     */
    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

    /**
     * An object key to use to extract the text to be compared for filtering.
     * This will only be applied if the the given `data` prop is an array of objects.
     */
    dataLabel: _react.PropTypes.string.isRequired,

    /**
     * An optional object key to use to extract the `value` of the given `data` prop.
     * This is really only used with generating a unique react key. The unique react
     * key with either be:
     * - the datum if it is a string or number
     * - the `key` attribute of the datum object
     * - the `datum[dataValue]`
     * - or the `datum[dataLabel]`
     */
    dataValue: _react.PropTypes.string,

    /**
     * A single key or an array of keys to delete from your data object before passing
     * to the `ListItem` component.
     */
    deleteKeys: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),

    /**
     * The data that will be used for autocomplete suggestions. This can either be
     * an array of string, number, or object. If it is an array of objects, the key
     * `dataLabel` is required.
     *
     * ```docgen
     * PropTypes.arrayOf(PropTypes.oneOfType([
     *   PropTypes.element,
     *   PropTypes.string,
     *   PropTypes.number,
     *   PropTypes.shape({
     *     [dataLabel]: PropTypes.oneOfType([
     *       PropTypes.string,
     *       PropTypes.number,
     *     ]).isRequired,
     *   }),
     * ])).isRequired
     * ```
     */
    data: function data(props, propName, component) {
      for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        others[_key - 3] = arguments[_key];
      }

      var _PropTypes$arrayOf;

      var dataLabel = props.dataLabel;

      return (_PropTypes$arrayOf = _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.shape(_defineProperty({}, dataLabel, _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired))]))).isRequired.apply(_PropTypes$arrayOf, [props, propName, component].concat(others));
    },

    /**
     * An optional function to use to filter the `data`. If you have a sexy backend
     * using solr or some other seach/indexer, it is recommended to set this prop to
     * `null` or `false`-ish.
     */
    filter: _react.PropTypes.func,

    /**
     * An optional function to call when the `Autocomplete`'s text field has a `keydown` event.
     */
    onKeyDown: _react.PropTypes.func,

    /**
     * An optional function to call when the `Autocomplete`'s text field has a `mousedown` event.
     */
    onMouseDown: _react.PropTypes.func,

    /**
     * An optional function to call when the `Autocomplete`'s text field value changes.
     * The callback will be given the new value and the change event.
     *
     * `onChange(textFeldValue, event)`
     */
    onChange: _react.PropTypes.func,

    /**
     * An optional function to call when the `Autocomplete`'s text field is focused.
     */
    onFocus: _react.PropTypes.func,

    /**
     * An optional function to call when the entire `Autocomplete` component is blurred.
     * This will be triggered when the window is clicked or when a user tabs away from
     * the autocomplete.
     */
    onBlur: _react.PropTypes.func,

    /**
     * Boolean if this text field should be styled as a full width text field.
     * Floating labels and the text field indicator will be removed automatically.
     */
    block: _react.PropTypes.bool,

    /**
     * Boolean if the autocomplete should span the entire width.
     */
    fullWidth: _react.PropTypes.bool,

    /**
     * Boolean if the `Autocomplete` should display suggestions inline instead
     * of in a `Menu`.
     */
    inline: _react.PropTypes.bool,

    /**
     * The function to call to find a suggestion for an inline autocomplete. This function
     * expects to return a single result of a number or a string.
     *
     * ```js
     * @param {Array<Object|String|Number>} data - The data prop to search.
     * @param {String} value - The current value to use for searching.
     * @param {String} dataLabel - The `dataLabel` prop to use if a datum is an object.
     * @return {String|Number} the found suggestion or false-ish
     * ```
     */
    findInlineSuggestion: _react.PropTypes.func,

    /**
     * An optional function to call when an autocomplete suggestion is clicked either
     * by using the mouse, the enter/space key, or touch. The match index and current
     * `dataLabel` will be given back.
     *
     * `onAutocomplete(suggestion[dataLabel] || suggestion, suggestionIndex, matches);`
     */
    onAutocomplete: _react.PropTypes.func,

    /**
     * A boolean if the text field's value should be reset to the empty string when
     * an item is auto-completed. This is usefull if you do not want a fully controlled
     * component and the values are stored outside of the `TextField`. (like `Chips`).
     */
    clearOnAutocomplete: _react.PropTypes.bool,

    /**
     * An optional function to call when the `Autocomplete` suggestion menu opens.
     */
    onMenuOpen: _react.PropTypes.func,

    /**
     * An optional function to call when the `Autocomplete` suggestion menu closes.
     */
    onMenuClose: _react.PropTypes.func,

    /**
     * This prop is used for disabling the browser's default autocomplete suggestions
     * of previously typed values in the text field. By default, this is disabled.
     */
    autoComplete: _react.PropTypes.oneOf(['on', 'off'])
  };
  Autocomplete.defaultProps = {
    fullWidth: true,
    defaultValue: '',
    dataLabel: 'primaryText',
    filter: Autocomplete.fuzzyFilter,
    findInlineSuggestion: Autocomplete.findIgnoreCase,
    autoComplete: 'off'
  };
  exports.default = Autocomplete;
});