(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-prop-types/lib/deprecated', 'react-prop-types/lib/isRequiredForA11y', './SelectionControl'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-prop-types/lib/deprecated'), require('react-prop-types/lib/isRequiredForA11y'), require('./SelectionControl'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.deprecated, global.isRequiredForA11y, global.SelectionControl);
    global.Radio = mod.exports;
  }
})(this, function (exports, _react, _deprecated, _isRequiredForA11y, _SelectionControl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

  var _SelectionControl2 = _interopRequireDefault(_SelectionControl);

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

  var Radio = function (_PureComponent) {
    _inherits(Radio, _PureComponent);

    function Radio() {
      _classCallCheck(this, Radio);

      return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
    }

    _createClass(Radio, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            checkedIconChildren = _props.checkedIconChildren,
            checkedIconClassName = _props.checkedIconClassName,
            uncheckedIconChildren = _props.uncheckedIconChildren,
            uncheckedIconClassName = _props.uncheckedIconClassName,
            props = _objectWithoutProperties(_props, ['checkedIconChildren', 'checkedIconClassName', 'uncheckedIconChildren', 'uncheckedIconClassName']);

        return _react2.default.createElement(_SelectionControl2.default, _extends({
          type: 'radio',
          checkedRadioIconChildren: checkedIconChildren,
          checkedRadioIconClassName: checkedIconClassName,
          uncheckedRadioIconChildren: uncheckedIconChildren,
          uncheckedRadioIconClassName: uncheckedIconClassName,
          __superSecreteProp: true
        }, props));
      }
    }]);

    return Radio;
  }(_react.PureComponent);

  Radio.propTypes = {
    /**
     * An id to use with the radio. This is used for accessibility and so that the label
     * triggers the radio toggle.
     */
    id: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])),

    /**
     * An optional style to apply to the radio's container.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the radio's container.
     */
    className: _react.PropTypes.string,

    /**
     * A label to display with the radio. This is required for accessibility and triggering
     * the toggle.
     */
    label: _react.PropTypes.string.isRequired,

    /**
     * Boolean if the label should appear before the radio icon.
     */
    labelBefore: _react.PropTypes.bool,

    /**
     * A name to use for the `Radio`. This is required for accessibility.
     */
    name: (0, _isRequiredForA11y2.default)(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])),

    /**
     * Boolean if the `Radio` is disabled.
     */
    disabled: _react.PropTypes.bool,

    /**
     * A function to call when the `Radio` triggers the `change` event. The `onChange` callback
     * will include the current value of the checked `radio` and the change event.
     *
     * ```js
     * onChange(changeEvent.target.value, changeEvent);
     * ```
     */
    onChange: _react.PropTypes.func,

    /**
     * The value for the `Radio` component.
     */
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,

    /**
     * A boolean if the `Radio` is currently checked.
     */
    checked: _react.PropTypes.bool.isRequired,

    /**
     * Boolean if the `Radio` should be displayed inline.
     */
    inline: _react.PropTypes.bool,

    /**
     * Any children to use for the checked `FontIcon` of the `Radio`.
     */
    checkedIconChildren: _react.PropTypes.node,

    /**
     * An icon className to use for the checked `FontIcon` of the `Radio`.
     */
    checkedIconClassName: _react.PropTypes.string,

    /**
     * Any children to use for the unchecked `FontIcon` of the `Radio`.
     */
    uncheckedIconChildren: _react.PropTypes.node,

    /**
     * An icon className to use for the unchecked `FontIcon` of the `Radio`.
     */
    uncheckedIconClassName: _react.PropTypes.string,

    checkedIcon: (0, _deprecated2.default)(_react.PropTypes.node, 'Use the `checkedIconChildren` and `checkedIconClassName` props instead.'),
    uncheckedIcon: (0, _deprecated2.default)(_react.PropTypes.node, 'Use the `uncheckedIconChildren` and `uncheckedIconClassName` props instead.')
  };
  Radio.defaultProps = {
    checkedIconChildren: 'radio_button_checked',
    uncheckedIconChildren: 'radio_button_unchecked'
  };
  exports.default = Radio;
});