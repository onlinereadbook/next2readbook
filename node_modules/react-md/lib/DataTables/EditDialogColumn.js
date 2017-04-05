(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'classnames', '../constants/keyCodes', '../constants/CSSTransitionGroupTick', '../utils/getField', '../utils/PropTypes/invalidIf', '../Dialogs/DialogFooter', './TableColumn', '../TextFields/TextField', '../FontIcons/FontIcon', './findTable'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('classnames'), require('../constants/keyCodes'), require('../constants/CSSTransitionGroupTick'), require('../utils/getField'), require('../utils/PropTypes/invalidIf'), require('../Dialogs/DialogFooter'), require('./TableColumn'), require('../TextFields/TextField'), require('../FontIcons/FontIcon'), require('./findTable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.classnames, global.keyCodes, global.CSSTransitionGroupTick, global.getField, global.invalidIf, global.DialogFooter, global.TableColumn, global.TextField, global.FontIcon, global.findTable);
    global.EditDialogColumn = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _classnames, _keyCodes, _CSSTransitionGroupTick, _getField, _invalidIf, _DialogFooter, _TableColumn, _TextField, _FontIcon, _findTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

  var _getField2 = _interopRequireDefault(_getField);

  var _invalidIf2 = _interopRequireDefault(_invalidIf);

  var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

  var _TableColumn2 = _interopRequireDefault(_TableColumn);

  var _TextField2 = _interopRequireDefault(_TextField);

  var _FontIcon2 = _interopRequireDefault(_FontIcon);

  var _findTable2 = _interopRequireDefault(_findTable);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  var EditDialogColumn = function (_PureComponent) {
    _inherits(EditDialogColumn, _PureComponent);

    function EditDialogColumn(props, context) {
      _classCallCheck(this, EditDialogColumn);

      var _this = _possibleConstructorReturn(this, (EditDialogColumn.__proto__ || Object.getPrototypeOf(EditDialogColumn)).call(this, props, context));

      _this.state = {
        value: props.defaultValue,
        active: false,
        absolute: false,
        animating: false
      };

      _this._table = null;
      _this._column = null;
      _this._field = null;

      _this._setColumn = _this._setColumn.bind(_this);
      _this._setDialog = _this._setDialog.bind(_this);
      _this._setField = _this._setField.bind(_this);
      _this._setOkButton = _this._setOkButton.bind(_this);
      _this._save = _this._save.bind(_this);
      _this._overrideTab = _this._overrideTab.bind(_this);
      _this._handleKeyUp = _this._handleKeyUp.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      _this._handleChange = _this._handleChange.bind(_this);
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      _this._handleCancelClick = _this._handleCancelClick.bind(_this);
      _this._handleClickOutside = _this._handleClickOutside.bind(_this);
      _this._handleMouseOver = _this._handleMouseOver.bind(_this);
      _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
      _this._positionCell = _this._positionCell.bind(_this);
      _this._repositionCell = _this._repositionCell.bind(_this);
      _this._activateDialog = _this._activateDialog.bind(_this);
      return _this;
    }

    _createClass(EditDialogColumn, [{
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

        window[(active ? 'add' : 'remove') + 'EventListener']('click', this._handleClickOutside);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('click', this._handleClickOutside);

        if (this._timeout) {
          clearTimeout(this._timeout);
        }
      }
    }, {
      key: '_getDialogPosition',
      value: function _getDialogPosition(dialog) {
        var left = null;
        var width = null;
        if (dialog) {
          left = dialog.getBoundingClientRect().left - 1;
          width = dialog.offsetWidth;
        }

        return { width: width, left: left };
      }
    }, {
      key: '_setColumn',
      value: function _setColumn(column) {
        this._column = (0, _reactDom.findDOMNode)(column);
        this._table = (0, _findTable2.default)(this._column);
      }
    }, {
      key: '_setDialog',
      value: function _setDialog(dialog) {
        this._dialog = dialog;
      }
    }, {
      key: '_setField',
      value: function _setField(field) {
        if (field) {
          this._field = field.getField();
        }
      }
    }, {
      key: '_setOkButton',
      value: function _setOkButton(okButton) {
        this._okButton = (0, _reactDom.findDOMNode)(okButton);
      }
    }, {
      key: '_positionCell',
      value: function _positionCell() {
        if (this.props.inline) {
          return;
        }

        var position = void 0;
        if (!this.state.absolute) {
          position = this._getDialogPosition(this._dialog, this._table);
        }

        this.setState(_extends({ absolute: true }, position));
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

            var _state = _this2.state,
                absolute = _state.absolute,
                active = _state.active;

            if (!_this2._timeout && scrolledOut) {
              _this2._timeout = setTimeout(function () {
                _this2._timeout = null;
                _this2.setState({ absolute: false, left: null, width: null });
              }, _this2.props.transitionDuration);
              active = false;
              absolute = true;
            }

            _this2.setState({ left: left, absolute: absolute, active: active });
          });
        }

        this._ticking = true;
      }
    }, {
      key: '_activateDialog',
      value: function _activateDialog(e) {
        if (e) {
          var callback = void 0;
          if (e.type === 'click') {
            callback = 'onClick';
          } else if (e.type === 'touchend') {
            callback = 'onTouchEnd';
          }

          if (callback && this.props[callback]) {
            this.props[callback](e);
          }
        }

        if (this.props.inline || this.state.active) {
          return;
        }

        this.setState({ active: true, cancelValue: (0, _getField2.default)(this.props, this.state, 'value') });
      }
    }, {
      key: '_handleClickOutside',
      value: function _handleClickOutside(e) {
        if (this._column && !this._column.contains(e.target)) {
          if (this.props.onOutsideClick) {
            this.props.onOutsideClick(e);
          }

          if (this.props.okOnOutsideClick) {
            this._save(e);
          } else {
            this._handleCancelClick(e);
          }
        }
      }
    }, {
      key: '_handleMouseOver',
      value: function _handleMouseOver(e) {
        if (this.props.onMouseOver) {
          this.props.onMouseOver(e);
        }

        this._positionCell();
      }
    }, {
      key: '_handleMouseLeave',
      value: function _handleMouseLeave(e) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e);
        }

        if (this.props.inline) {
          return;
        }

        var position = void 0;
        if (!this.state.active) {
          position = { width: null, left: null };
        }

        this.setState(_extends({ absolute: false }, position));
      }
    }, {
      key: '_handleKeyUp',
      value: function _handleKeyUp(e) {
        var _this3 = this;

        if (this.props.onKeyUp) {
          this.props.onKeyUp(e);
        }

        // Make sure this is really a _focus_ event from keyboard
        if ((e.which || e.keyCode) !== _keyCodes.TAB || this.state.active || this.props.inline) {
          return;
        }

        // To get a smooth transition with keybaord, need to _emulate_ how the mouse interaction works.
        // Basically position the edit field absolutely, wait for a re-render, then activate the dialog.
        this._timeout = setTimeout(function () {
          _this3._timeout = null;
          _this3._activateDialog();
        }, _CSSTransitionGroupTick2.default);
        this._positionCell();
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart(e) {
        if (this.props.onTouchStart) {
          this.props.onTouchStart(e);
        }

        this._positionCell();
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        var onKeyDown = this.props.onKeyDown;

        if (onKeyDown) {
          onKeyDown(e);
        }

        var key = e.which || e.keyCode;
        if (key === _keyCodes.ENTER) {
          this._save(e);
        } else if (key === _keyCodes.TAB) {
          this._overrideTab(e);
        } else if (key === _keyCodes.ESC) {
          this._handleCancelClick(e);
        }
      }
    }, {
      key: '_overrideTab',
      value: function _overrideTab(e) {
        var _props = this.props,
            large = _props.large,
            inline = _props.inline,
            okOnOutsideClick = _props.okOnOutsideClick;

        var key = e.which || e.keyCode;
        if (key !== _keyCodes.TAB) {
          return;
        } else if (inline) {
          this._save(e);
          return;
        } else if (!large) {
          if (okOnOutsideClick) {
            this._save(e);
          } else {
            this._handleCancelClick(e);
          }
          return;
        }

        var shiftKey = e.shiftKey;
        var classList = e.target.classList;


        var nextFocus = void 0;
        if (classList.contains('md-text-field') && shiftKey) {
          nextFocus = this._okButton;
        } else if (classList.contains('md-btn') && !shiftKey) {
          nextFocus = this._field;
        }

        if (nextFocus) {
          e.preventDefault();
          nextFocus.focus();
        }
      }
    }, {
      key: '_save',
      value: function _save(e) {
        var _this4 = this;

        if (this.props.onOkClick) {
          this.props.onOkClick((0, _getField2.default)(this.props, this.state, 'value'), e);
        }

        this._timeout = setTimeout(function () {
          _this4._timeout = null;
          _this4.setState({ absolute: false, left: null, width: null });
        }, this.props.transitionDuration);
        this.setState({ active: false, absolute: true });
      }
    }, {
      key: '_handleCancelClick',
      value: function _handleCancelClick(e) {
        var _this5 = this;

        if (this.props.onCancelClick) {
          this.props.onCancelClick(this.state.cancelValue, e);
        }

        var state = { absolute: true, active: false };
        if (typeof this.props.value === 'undefined') {
          state.value = this.state.cancelValue;
        }

        this._timeout = setTimeout(function () {
          _this5._timeout = null;
          _this5.setState({ absolute: false, left: null, width: null });
        }, this.props.transitionDuration);

        this.setState(state);
      }
    }, {
      key: '_handleChange',
      value: function _handleChange(value, e) {
        if (this.props.onChange) {
          this.props.onChange(value, e);
        }

        if (typeof this.props.value === 'undefined') {
          this.setState({ value: value });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var rowId = this.context.rowId;
        var _state2 = this.state,
            active = _state2.active,
            absolute = _state2.absolute,
            animating = _state2.animating,
            left = _state2.left,
            width = _state2.width;

        var _props2 = this.props,
            style = _props2.style,
            className = _props2.className,
            dialogStyle = _props2.dialogStyle,
            dialogClassName = _props2.dialogClassName,
            textFieldStyle = _props2.textFieldStyle,
            textFieldClassName = _props2.textFieldClassName,
            inputStyle = _props2.inputStyle,
            inputClassName = _props2.inputClassName,
            maxLength = _props2.maxLength,
            title = _props2.title,
            okLabel = _props2.okLabel,
            cancelLabel = _props2.cancelLabel,
            large = _props2.large,
            label = _props2.label,
            placeholder = _props2.placeholder,
            inline = _props2.inline,
            inlineIconChildren = _props2.inlineIconChildren,
            inlineIconClassName = _props2.inlineIconClassName,
            noIcon = _props2.noIcon,
            header = _props2.header,
            enforceMinWidth = _props2.enforceMinWidth,
            props = _objectWithoutProperties(_props2, ['style', 'className', 'dialogStyle', 'dialogClassName', 'textFieldStyle', 'textFieldClassName', 'inputStyle', 'inputClassName', 'maxLength', 'title', 'okLabel', 'cancelLabel', 'large', 'label', 'placeholder', 'inline', 'inlineIconChildren', 'inlineIconClassName', 'noIcon', 'header', 'enforceMinWidth']);

        delete props.id;
        delete props.onMouseOver;
        delete props.onMouseLeave;
        delete props.onTouchStart;
        delete props.onTouchEnd;
        delete props.value;
        delete props.defaultValue;
        delete props.onOkClick;
        delete props.onCancelClick;
        delete props.header;
        delete props.okOnOutsideClick;
        delete props.transitionDuration;
        delete props.scrollThreshold;

        var value = (0, _getField2.default)(this.props, this.state, 'value');
        var id = this.props.id;

        if (!id) {
          id = rowId + '-edit-dialog';
        }

        var actions = void 0;
        var largeTitle = void 0;
        if (!inline && large && active) {
          actions = [{
            label: cancelLabel,
            onClick: this._handleCancelClick,
            primary: true
          }, {
            label: okLabel,
            onClick: this._save,
            primary: true,
            ref: this._setOkButton,
            onKeyDown: this._overrideTab
          }];

          actions = _react2.default.createElement(_DialogFooter2.default, { actions: actions });

          largeTitle = _react2.default.createElement(
            'h3',
            { className: 'md-title' },
            title
          );
        }

        var pointer = (0, _classnames2.default)({ 'md-pointer--hover': !active });
        var inlineEditIcon = void 0;
        if (inline && !noIcon) {
          inlineEditIcon = _react2.default.createElement(
            _FontIcon2.default,
            { key: 'edit-icon', iconClassName: inlineIconClassName },
            inlineIconChildren
          );
        }

        var ariaProps = {};
        if (!inline) {
          ariaProps.id = id + '-container';
          ariaProps['aria-haspopup'] = true;
          ariaProps['aria-expanded'] = active;
          ariaProps['aria-owns'] = id;
        }

        return _react2.default.createElement(
          _TableColumn2.default,
          {
            style: _extends({ left: left }, style),
            className: (0, _classnames2.default)('prevent-grow md-edit-dialog-column', {
              'md-table-column--fixed': !inline && (absolute || active || animating),
              'md-table-column--fixed-active': active
            }, className),
            header: header,
            ref: this._setColumn,
            onMouseOver: this._handleMouseOver,
            onMouseLeave: this._handleMouseLeave,
            onClick: this._activateDialog,
            onTouchStart: this._handleTouchStart,
            onTouchEnd: this._activateDialog,
            __fixedColumn: true
          },
          _react2.default.createElement(
            'div',
            _extends({}, ariaProps, {
              ref: this._setDialog,
              style: _extends({ width: width }, dialogStyle),
              className: (0, _classnames2.default)('md-edit-dialog', {
                'md-edit-dialog--active': active,
                'md-edit-dialog--inline': inline,
                'md-edit-dialog--min-width': typeof enforceMinWidth === 'undefined' ? props.type === 'text' : enforceMinWidth,
                'md-background': active
              }, dialogClassName)
            }),
            largeTitle,
            _react2.default.createElement(_TextField2.default, _extends({}, props, {
              id: id,
              ref: this._setField,
              label: active ? label : null,
              active: active,
              floating: active,
              placeholder: active ? placeholder : placeholder || label,
              block: !active,
              paddedBlock: false,
              style: textFieldStyle,
              className: (0, _classnames2.default)(pointer, textFieldClassName),
              inputStyle: inputStyle,
              inputClassName: (0, _classnames2.default)(pointer, {
                'md-text-right': props.type === 'number'
              }, inputClassName),
              onKeyUp: this._handleKeyUp,
              onKeyDown: this._handleKeyDown,
              value: value,
              onChange: this._handleChange,
              maxLength: active ? maxLength : null,
              rightIcon: inlineEditIcon
            })),
            actions
          )
        );
      }
    }]);

    return EditDialogColumn;
  }(_react.PureComponent);

  EditDialogColumn.propTypes = {
    /**
     * An optional id to provide to the text field in the column. If this is omitted,
     * the id will be the current row id and `-edit-dialog`.
     */
    id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * The optional style to apply to the edit dialog's column.
     */
    style: _react.PropTypes.object,

    /**
     * The optional className to apply to the edit dialog's column.
     */
    className: _react.PropTypes.string,

    /**
     * The optional style to apply to the edit dialog.
     */
    dialogStyle: _react.PropTypes.object,

    /**
     * The optional className to apply to the edit dialog.
     */
    dialogClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the text field.
     */
    textFieldStyle: _react.PropTypes.object,

    /**
     * An optional class name to apply to the text field.
     */
    textFieldClassName: _react.PropTypes.string,

    /**
     * An optional style to apply to the text field's input.
     */
    inputStyle: _react.PropTypes.object,

    /**
     * An optional class name to apply to the text field's input.
     */
    inputClassName: _react.PropTypes.string,

    /**
     * The transition duration when the dialog is moving from
     * active to inactive.
     */
    transitionDuration: _react.PropTypes.number.isRequired,

    /**
     * Boolean if the edit dialog is disabled.
     */
    disabled: _react.PropTypes.bool,

    /**
     * The optional max length for the edit dialog.
     */
    maxLength: _react.PropTypes.number,

    /**
     * A value to use for the edit dialog text field. This
     * will make the component controlled so you will need
     * to provide an `onChange` function.
     */
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * An optional function to call when the text field's value
     * is changed. It is called with `(newValue, changeEvent)`.
     */
    onChange: _react.PropTypes.func,

    /**
     * The default value for the column.
     */
    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

    /**
     * An optional function to call when the input is clicked.
     */
    onClick: _react.PropTypes.func,

    /**
     * An optional function to call when the keyup event is triggered.
     */
    onKeyUp: _react.PropTypes.func,

    /**
     * An optional function to call when the keydown event is triggered.
     */
    onKeyDown: _react.PropTypes.func,

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

    /**
     * An optional function to call when the touchend event is triggered.
     */
    onTouchEnd: _react.PropTypes.func,

    /**
     * Boolean if the edit dialog should be large.
     */
    large: _react.PropTypes.bool,

    /**
     * The title for the large edit dialog. The custom validation changes to required
     * when the `large` prop is set to true.
     */
    title: function title(props, propName, component) {
      for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        others[_key - 3] = arguments[_key];
      }

      if (props.large) {
        var _PropTypes$string;

        return (_PropTypes$string = _react.PropTypes.string).isRequired.apply(_PropTypes$string, [props, propName, component].concat(others));
      } else {
        return _react.PropTypes.string.apply(_react.PropTypes, [props, propName, component].concat(others));
      }
    },

    /**
     * An optional function to call when the OK button is clicked.
     * It is called with `(textFieldValue, clickEvent)`. This function
     * will also be called when a user pressed the enter key.
     */
    onOkClick: _react.PropTypes.func,

    /**
     * The label to use for the OK button.
     */
    okLabel: _react.PropTypes.string.isRequired,

    /**
     * An optional function to call when the Cancel button is clicked.
     * It is called with `(textFieldValueBeforeEdit, clickEvent)`. This
     * function will also be called when the user presses the escape key.
     */
    onCancelClick: _react.PropTypes.func,

    /**
     * The label to use for the Cancel button.
     */
    cancelLabel: _react.PropTypes.string.isRequired,

    /**
     * An optional function to call when the edit dialog is open and the user clicks
     * somewhere else on the page.
     */
    onOutsideClick: _react.PropTypes.func,

    /**
     * A boolean if the action when the edit dialog is open and the user clicks somewhere
     * else on the page should be to confirm the current changes.
     *
     * If this is set to `true`, `onOkClick` will be called. Otherwise `onCancelClick` will
     * be called.
     */
    okOnOutsideClick: _react.PropTypes.bool.isRequired,

    /**
     * An optional label for the text field.
     */
    label: _react.PropTypes.node,

    /**
     * An optional placeholder for the text field.
     */
    placeholder: _react.PropTypes.string,

    /**
     * Boolean if the text field should not appear in a dialog.
     */
    inline: (0, _invalidIf2.default)(_react.PropTypes.bool, 'title', 'large'),

    /**
     * Any children used to display an inline edit dialog's edit icon.
     */
    inlineIconChildren: _react.PropTypes.node,

    /**
     * The icon className used to display the inline edit dialog's edit icon.
     */
    inlineIconClassName: _react.PropTypes.string,

    /**
     * Boolean if an inline edit text field should not include an icon.
     */
    noIcon: (0, _invalidIf2.default)(_react.PropTypes.bool, 'title', 'large'),

    /**
     * This is injected by the `TableRow` component.
     */
    header: _react.PropTypes.bool,

    /**
     * The type for the text field.
     */
    type: _TextField2.default.propTypes.type,

    /**
     * Boolean if the min width of the dialog should be set to the `$md-edit-dialog-column-min-width` variable.
     * If this is undefined, the min width will be enforced when the `type` prop is `text`.
     */
    enforceMinWidth: _react.PropTypes.bool,

    /**
     * When the dialog is open and a user scrolls the dialog offscreen, this is the amount
     * of the dialog that should be offscreen before hiding the dialog (inverse). The default
     * is to have 25% of the dialog offscreen.
     */
    scrollThreshold: _react.PropTypes.number.isRequired
  };
  EditDialogColumn.contextTypes = {
    rowId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired
  };
  EditDialogColumn.defaultProps = {
    type: 'text',
    defaultValue: '',
    transitionDuration: 300,
    okOnOutsideClick: true,
    okLabel: 'Save',
    cancelLabel: 'Cancel',
    inlineIconChildren: 'edit',
    scrollThreshold: 0.75
  };
  exports.default = EditDialogColumn;
});