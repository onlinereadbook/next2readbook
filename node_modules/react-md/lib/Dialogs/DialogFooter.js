(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../Buttons/Button'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../Buttons/Button'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.Button);
    global.DialogFooter = mod.exports;
  }
})(this, function (exports, _react, _classnames, _Button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _Button2 = _interopRequireDefault(_Button);

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

  var FOOTER_PADDING = 8;

  var DialogFooter = function (_PureComponent) {
    _inherits(DialogFooter, _PureComponent);

    function DialogFooter(props) {
      _classCallCheck(this, DialogFooter);

      var _this = _possibleConstructorReturn(this, (DialogFooter.__proto__ || Object.getPrototypeOf(DialogFooter)).call(this, props));

      _this.state = { stacked: false };

      _this._toElement = _this._toElement.bind(_this);
      _this._generateActions = _this._generateActions.bind(_this);
      _this._setContainer = _this._setContainer.bind(_this);
      return _this;
    }

    _createClass(DialogFooter, [{
      key: '_setContainer',
      value: function _setContainer(container) {
        var _this2 = this;

        if (container !== null) {
          (function () {
            _this2._container = container;
            var maxWidth = (_this2._container.offsetWidth - FOOTER_PADDING * 3) / 2;

            var stacked = false;
            Array.prototype.slice.call(_this2._container.querySelectorAll('.md-btn')).some(function (_ref) {
              var offsetWidth = _ref.offsetWidth;

              stacked = offsetWidth > maxWidth;
              return stacked;
            });

            _this2.setState({ stacked: stacked });
          })();
        }
      }
    }, {
      key: '_toElement',
      value: function _toElement(action, index) {
        if ((0, _react.isValidElement)(action)) {
          var button = _react.Children.only(action);

          return (0, _react.cloneElement)(action, {
            key: button.props.key || index,
            className: (0, _classnames2.default)('md-btn--dialog', button.props.className),
            waitForInkTransition: true
          });
        }

        return _react2.default.createElement(_Button2.default, _extends({
          key: index,
          flat: true
        }, action, {
          className: (0, _classnames2.default)('md-btn--dialog', action.className),
          waitForInkTransition: true
        }));
      }
    }, {
      key: '_generateActions',
      value: function _generateActions() {
        var actions = this.props.actions;

        if (Array.isArray(actions)) {
          return actions.map(this._toElement);
        }

        return this._toElement(actions);
      }
    }, {
      key: 'render',
      value: function render() {
        var stacked = this.state.stacked;
        var className = this.props.className;

        var _props = this.props,
            children = _props.children,
            actions = _props.actions,
            props = _objectWithoutProperties(_props, ['children', 'actions']);

        delete props.className;
        delete props.onActionMount;

        if (!actions || Array.isArray(actions) && !actions.length) {
          return null;
        }

        className = (0, _classnames2.default)('md-dialog-footer', {
          'md-dialog-footer--inline': !stacked,
          'md-dialog-footer--stacked': stacked
        }, className);

        return _react2.default.createElement(
          'footer',
          _extends({}, props, { className: className, ref: this._setContainer }),
          this._generateActions(),
          children
        );
      }
    }]);

    return DialogFooter;
  }(_react.PureComponent);

  DialogFooter.propTypes = {
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    children: _react.PropTypes.node,
    actions: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object]))])
  };
  exports.default = DialogFooter;
});