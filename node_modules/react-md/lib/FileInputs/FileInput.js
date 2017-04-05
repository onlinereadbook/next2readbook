(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', 'react-prop-types/lib/isRequiredForA11y', '../constants/keyCodes', '../utils/EventUtils/captureNextEvent', '../FontIcons/FontIcon', '../Helpers/IconSeparator', '../Helpers/AccessibleFakeInkedButton'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('react-prop-types/lib/isRequiredForA11y'), require('../constants/keyCodes'), require('../utils/EventUtils/captureNextEvent'), require('../FontIcons/FontIcon'), require('../Helpers/IconSeparator'), require('../Helpers/AccessibleFakeInkedButton'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.isRequiredForA11y, global.keyCodes, global.captureNextEvent, global.FontIcon, global.IconSeparator, global.AccessibleFakeInkedButton);
    global.FileInput = mod.exports;
  }
})(this, function (exports, _react, _classnames, _isRequiredForA11y, _keyCodes, _captureNextEvent, _FontIcon, _IconSeparator, _AccessibleFakeInkedButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _captureNextEvent2 = _interopRequireDefault(_captureNextEvent);

  var _FontIcon2 = _interopRequireDefault(_FontIcon);

  var _IconSeparator2 = _interopRequireDefault(_IconSeparator);

  var _AccessibleFakeInkedButton2 = _interopRequireDefault(_AccessibleFakeInkedButton);

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

  var FileInput = function (_PureComponent) {
    _inherits(FileInput, _PureComponent);

    function FileInput(props) {
      _classCallCheck(this, FileInput);

      var _this = _possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call(this, props));

      _this.state = { hover: false, pressed: false };

      _this._blur = _this._blur.bind(_this);
      _this._handleChange = _this._handleChange.bind(_this);
      _this._handleKeyUp = _this._handleKeyUp.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      _this._handleMouseUp = _this._handleMouseUp.bind(_this);
      _this._handleMouseDown = _this._handleMouseDown.bind(_this);
      _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
      _this._handleTouchStart = _this._handleTouchStart.bind(_this);
      _this._handleMouseOver = _this._handleMouseOver.bind(_this);
      _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
      return _this;
    }

    _createClass(FileInput, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.disabled && !nextProps.disabled && this.state.hover) {
          this.setState({ hover: false });
        }
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        var _this2 = this;

        // I honestly don't remember why this was implemented, but it was copied from the Button
        // component
        if (!this.state.pressed && nextState.pressed) {
          this._timeout = setTimeout(function () {
            _this2._timeout = null;
            if (_this2._attemptedBlur) {
              _this2._attemptedBlur = false;

              _this2.setState({ pressed: false });
            }
          }, 450);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }

        window.removeEventListener('click', this._blur);
      }
    }, {
      key: '_handleChange',
      value: function _handleChange(e) {
        var _props = this.props,
            multiple = _props.multiple,
            onChange = _props.onChange;
        var files = e.target.files;

        if (!multiple) {
          onChange(files[0] || null, e);
        } else {
          onChange(Array.prototype.slice.call(files), e);
        }
      }
    }, {
      key: '_blur',
      value: function _blur() {
        if (this.props.disabled) {
          return;
        }

        if (this._timeout) {
          this._attemptedBlur = true;
        } else {
          this.setState({ pressed: false });
        }
      }
    }, {
      key: '_handleMouseUp',
      value: function _handleMouseUp(e) {
        if (this.props.onMouseUp) {
          this.props.onMouseUp(e);
        }

        this._blur();
      }
    }, {
      key: '_handleMouseDown',
      value: function _handleMouseDown(e) {
        if (this.props.onMouseDown) {
          this.props.onMouseDown(e);
        }

        if (!this.props.disabled) {
          this.setState({ pressed: true });
        }
      }
    }, {
      key: '_handleTouchStart',
      value: function _handleTouchStart(e) {
        if (this.props.onTouchStart) {
          this.props.onTouchStart(e);
        }

        if (!this.props.disabled) {
          this.setState({ pressed: true });
        }
      }
    }, {
      key: '_handleTouchEnd',
      value: function _handleTouchEnd(e) {
        if (this.props.onTouchEnd) {
          this.props.onTouchEnd(e);
        }

        this._blur();
        (0, _captureNextEvent2.default)('mouseover');
      }
    }, {
      key: '_handleKeyUp',
      value: function _handleKeyUp(e) {
        if (this.props.onKeyUp) {
          this.props.onKeyUp(e);
        }

        if ((e.which || e.keyCode) === _keyCodes.TAB) {
          window.addEventListener('click', this._blur);
          this.setState({ pressed: true });
        }
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        if (this.props.onKeyDown) {
          this.props.onKeyDown(e);
        }

        var key = e.which || e.keyCode;

        if (key === _keyCodes.TAB) {
          window.removeEventListener('click', this._blur);
          this.setState({ pressed: false });
        } else if (key === _keyCodes.SPACE || key === _keyCodes.ENTER) {
          e.preventDefault();
          e.target.click();
        }
      }
    }, {
      key: '_handleMouseOver',
      value: function _handleMouseOver(e) {
        if (this.props.onMouseOver) {
          this.props.onMouseOver(e);
        }

        if (!this.props.disabled) {
          this.setState({ hover: true });
        }
      }
    }, {
      key: '_handleMouseLeave',
      value: function _handleMouseLeave(e) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e);
        }

        if (!this.props.disabled) {
          this.setState({ hover: false });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            hover = _state.hover,
            pressed = _state.pressed;

        var _props2 = this.props,
            style = _props2.style,
            className = _props2.className,
            label = _props2.label,
            iconChildren = _props2.iconChildren,
            iconClassName = _props2.iconClassName,
            primary = _props2.primary,
            secondary = _props2.secondary,
            flat = _props2.flat,
            id = _props2.id,
            iconBefore = _props2.iconBefore,
            disabled = _props2.disabled,
            accept = _props2.accept,
            multiple = _props2.multiple,
            props = _objectWithoutProperties(_props2, ['style', 'className', 'label', 'iconChildren', 'iconClassName', 'primary', 'secondary', 'flat', 'id', 'iconBefore', 'disabled', 'accept', 'multiple']);

        delete props.onChange;
        delete props.onKeyUp;
        delete props.onKeyDown;
        delete props.onMouseUp;
        delete props.onMouseDown;
        delete props.onMouseOver;
        delete props.onMouseLeave;
        delete props.onTouchStart;
        delete props.onTouchEnd;

        var icon = !iconClassName && !iconChildren ? null : _react2.default.createElement(
          _FontIcon2.default,
          { iconClassName: iconClassName },
          iconChildren
        );

        var themeClassNames = !disabled && (0, _classnames2.default)({
          'md-text--theme-primary md-ink--primary': flat && primary,
          'md-text--theme-secondary md-ink--secondary': flat && secondary,
          'md-background--primary md-background--primary-hover': !flat && primary,
          'md-background--secondary md-background--secondary-hover': !flat && secondary,
          'md-btn--color-primary-active': flat && hover && primary,
          'md-btn--color-secondary-active': flat && hover && secondary
        });

        var labelChildren = label;
        if (icon) {
          labelChildren = _react2.default.createElement(
            _IconSeparator2.default,
            { label: label, iconBefore: iconBefore },
            icon
          );
        }

        return _react2.default.createElement(
          'div',
          _extends({}, props, {
            style: style,
            className: (0, _classnames2.default)('md-inline-block md-file-input-container', className)
          }),
          _react2.default.createElement(
            _AccessibleFakeInkedButton2.default,
            {
              component: 'label',
              htmlFor: id,
              disabled: disabled,
              onTouchStart: this._handleTouchStart,
              onTouchEnd: this._handleTouchEnd,
              onMouseDown: this._handleMouseDown,
              onMouseUp: this._handleMouseUp,
              onKeyDown: this._handleKeyDown,
              onKeyUp: this._handleKeyUp,
              onMouseOver: this._handleMouseOver,
              onMouseLeave: this._handleMouseLeave,
              className: (0, _classnames2.default)('md-btn md-btn--' + (flat || disabled ? 'flat' : 'raised') + ' md-btn--text', themeClassNames, {
                'md-text': !disabled,
                'md-text--disabled': disabled,
                'md-btn--raised-disabled': disabled && !flat,
                'md-btn--raised-pressed': !disabled && !flat && pressed
              })
            },
            labelChildren
          ),
          _react2.default.createElement('input', {
            multiple: multiple,
            disabled: disabled,
            id: id,
            accept: accept,
            type: 'file',
            'aria-hidden': 'true',
            className: 'md-file-input',
            onChange: this._handleChange
          })
        );
      }
    }]);

    return FileInput;
  }(_react.PureComponent);

  FileInput.propTypes = {
    /**
     * The id for the text field. This is required for a11y and to get the `input type="file"` to
     * open.
     */
    id: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])),

    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * Boolean if the `FileInput` should be styled with the primary color.
     */
    primary: _react.PropTypes.bool,

    /**
     * Boolean if the `FileInput` should be styled with the secondary color.
     */
    secondary: _react.PropTypes.bool,

    /**
     * Boolean if the `FileInput` should be styled as a flat button instead of a
     * raised button.
     */
    flat: _react.PropTypes.bool,

    /**
     * This should be a comma separated list of Media Types that the `FileInput` can
     * accept. If this prop is left blank, any file will be accepted.
     *
     * The values can either be:
     * - A file extension
     * - audio/*
     * - video/*
     * - image/*
     * - any valid [IANA Media Type](http://www.iana.org/assignments/media-types/media-types.xhtml)
     *
     * > NOTE: IE does not enforce this.
     */
    accept: _react.PropTypes.string,

    /**
     * Boolean if multiple files will be accepted.
     */
    multiple: _react.PropTypes.bool,

    /**
     * A label to display on the `FileInput`. This will be used with the `AccessibleFakeInkedButton` component to
     * create a `<label>` for the `<input type="file">`.
     */
    label: _react.PropTypes.node.isRequired,

    /**
     * Boolean if the icons hould appear before the label.
     */
    iconBefore: _react.PropTypes.bool,

    /**
     * The icon children to use for the upload icon.
     */
    iconChildren: _react.PropTypes.node,

    /**
     * The icon className to use for the upload icon.
     */
    iconClassName: _react.PropTypes.string,

    /**
     * A function to call when the value of the input changes. This will
     * be triggered when the user selects a new file or cancels the new file selection.
     *
     * This function will be given the new [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
     * as an array and the change event. If this is not a multiple file input, only the
     * newly selected File will be given instead of a list of one file. Since this is an
     * `input` tag, the user will not be able to select the same file multiple times unless
     * you manually clear the input's value.
     *
     * > NOTE: If the user hits cancel, null will be given for a single file input.
     *
     * ```js
     * onChange(files, e);
     * ```
     */
    onChange: _react.PropTypes.func.isRequired,

    /**
     * Boolean if the `FileInput` is currently disabled.
     */
    disabled: _react.PropTypes.bool,

    /**
     * An optional function to call when they keyup event is triggerred on the file input's label.
     */
    onKeyUp: _react.PropTypes.func,

    /**
     * An optional function to call when they keydown event is triggerred on the file input's label.
     */
    onKeyDown: _react.PropTypes.func,

    /**
     * An optional function to call when they mouseup event is triggerred on the file input's label.
     */
    onMouseUp: _react.PropTypes.func,

    /**
     * An optional function to call when they mousedown event is triggerred on the file input's label.
     */
    onMouseDown: _react.PropTypes.func,

    /**
     * An optional function to call when they mouseover event is triggerred on the file input's label.
     */
    onMouseOver: _react.PropTypes.func,

    /**
     * An optional function to call when they mouseleave event is triggerred on the file input's label.
     */
    onMouseLeave: _react.PropTypes.func,

    /**
     * An optional function to call when they touchend event is triggerred on the file input's label.
     */
    onTouchEnd: _react.PropTypes.func,

    /**
     * An optional function to call when they touchstart event is triggerred on the file input's label.
     */
    onTouchStart: _react.PropTypes.func
  };
  FileInput.defaultProps = {
    label: 'Select a file',
    iconChildren: 'file_upload'
  };
  exports.default = FileInput;
});