(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'react-motion'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('react-motion'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.reactMotion);
    global.Collapse = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _reactMotion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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

  var Collapse = function (_PureComponent) {
    _inherits(Collapse, _PureComponent);

    function Collapse(props) {
      _classCallCheck(this, Collapse);

      var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

      if (!props.collapsed) {
        _this.state = { initialOpen: true };
      } else {
        _this.state = { height: 0, paddingTop: 0, paddingBottom: 0 };
      }

      _this._setHeight = _this._setHeight.bind(_this);
      return _this;
    }

    _createClass(Collapse, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.state.initialOpen && nextProps.collapsed) {
          this.setState({ initialOpen: false });
        }
      }
    }, {
      key: '_spring',
      value: function _spring(collapsed, initialOpen, value, config) {
        var nextValue = !collapsed ? Math.max(0, value) : 0;
        if (initialOpen && !collapsed) {
          return nextValue;
        }

        return (0, _reactMotion.spring)(nextValue, config);
      }
    }, {
      key: '_setHeight',
      value: function _setHeight(child) {
        var height = 0;
        var paddingTop = 0;
        var paddingBottom = 0;
        if (child !== null) {
          var node = (0, _reactDom.findDOMNode)(child);
          var cs = window.getComputedStyle(node);
          height = node.offsetHeight;
          paddingTop = parseInt(cs.getPropertyValue('padding-top'), 10);
          paddingBottom = parseInt(cs.getPropertyValue('padding-bottom'), 10);
        }

        this.setState({ height: height, paddingTop: paddingTop, paddingBottom: paddingBottom });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _state = this.state,
            height = _state.height,
            paddingTop = _state.paddingTop,
            paddingBottom = _state.paddingBottom,
            initialOpen = _state.initialOpen;
        var _props = this.props,
            children = _props.children,
            collapsed = _props.collapsed,
            defaultStyle = _props.defaultStyle,
            motionStyle = _props.style,
            springConfig = _props.springConfig;

        return _react2.default.createElement(
          _reactMotion.Motion,
          {
            style: _extends({}, motionStyle, {
              height: this._spring(collapsed, initialOpen, height, springConfig),
              paddingTop: this._spring(collapsed, initialOpen, paddingTop, springConfig),
              paddingBottom: this._spring(collapsed, initialOpen, paddingBottom, springConfig)
            }),
            defaultStyle: _extends({}, defaultStyle, {
              height: height,
              paddingTop: paddingTop,
              paddingBottom: paddingBottom
            })
          },
          function (style) {
            if (collapsed && !style.height) {
              return null;
            }

            var child = _react.Children.only(children);
            var nextStyle = child.props.style;
            if (collapsed || style.height !== height) {
              nextStyle = Object.assign({}, child.props.style, _extends({}, style, {
                overflow: 'hidden'
              }));
            }
            return (0, _react.cloneElement)(child, {
              ref: _this2._setHeight,
              style: nextStyle
            });
          }
        );
      }
    }]);

    return Collapse;
  }(_react.PureComponent);

  Collapse.propTypes = {
    /**
     * An optional style to merge with the `Motion` style.
     */
    style: _react.PropTypes.object,

    /**
     * An optional default style to merge with the `Motion` default style.
     */
    defaultStyle: _react.PropTypes.object,

    /**
     * Boolean if the children are currently collapsed.
     */
    collapsed: _react.PropTypes.bool.isRequired,

    /**
     * A single child to collapse or expand.
     */
    children: _react.PropTypes.element.isRequired,

    /**
     * The spring config to use for the animation.
     */
    springConfig: _react.PropTypes.object.isRequired
  };
  Collapse.defaultProps = {
    springConfig: {
      precision: 0.5
    }
  };
  exports.default = Collapse;
});