(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom);
    global.Portal = mod.exports;
  }
})(this, function (exports, _react, _reactDom) {
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

  var Portal = function (_PureComponent) {
    _inherits(Portal, _PureComponent);

    function Portal(props) {
      _classCallCheck(this, Portal);

      var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));

      _this._portal = null;
      _this._container = null;

      _this._applyStyles = _this._applyStyles.bind(_this);
      _this._renderPortal = _this._renderPortal.bind(_this);
      _this._removePortal = _this._removePortal.bind(_this);
      return _this;
    }

    _createClass(Portal, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.visible) {
          this._renderPortal(this.props);
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var visible = nextProps.visible,
            onOpen = nextProps.onOpen;

        if (this.props.visible === visible && this._container) {
          // Need to just re-render the subtree
          this._renderPortal(nextProps);
          return;
        }

        if (visible) {
          if (onOpen) {
            onOpen();
          }
          this._renderPortal(nextProps);
        } else {
          this._removePortal();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._removePortal();
      }
    }, {
      key: '_applyStyles',
      value: function _applyStyles(props) {
        if (props.className) {
          this._container.className = props.className;
        }
      }
    }, {
      key: '_renderPortal',
      value: function _renderPortal(props) {
        if (!this._container) {
          this._container = document.createElement(props.component);

          this._applyStyles(props);
          var node = props.renderNode || document.body;
          if (props.lastChild) {
            node.appendChild(this._container);
          } else {
            node.insertBefore(this._container, node.firstChild);
          }
        } else {
          this._applyStyles(props);
        }

        this._portal = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, props.children, this._container);
      }
    }, {
      key: '_removePortal',
      value: function _removePortal() {
        if (this.props.onClose) {
          this.props.onClose();
        }

        if (this._container) {
          (0, _reactDom.unmountComponentAtNode)(this._container);
          (this.props.renderNode || document.body).removeChild(this._container);
        }

        this._portal = null;
        this._container = null;
      }
    }, {
      key: 'render',
      value: function render() {
        // When doing server side rendering, actualy render the component as a direct child of its parent.
        // Once it has been rendered and working client side, it will be removed correctly.
        if (typeof window === 'undefined' && this.props.visible) {
          var _props = this.props,
              Component = _props.component,
              className = _props.className,
              children = _props.children;

          return _react2.default.createElement(
            Component,
            { className: className },
            children
          );
        }

        return null;
      }
    }]);

    return Portal;
  }(_react.PureComponent);

  Portal.propTypes = {
    /**
     * An optional className to apply to the newly created `component` when visible.
     */
    className: _react.PropTypes.string,

    /**
     * Boolean if the children are visible.
     */
    visible: _react.PropTypes.bool.isRequired,

    /**
     * The children to render when visible.
     */
    children: _react.PropTypes.element,

    /**
     * The component to render as. This should be a valid DOM element.
     */
    component: _react.PropTypes.string.isRequired,

    /**
     * An optional function to call when the portal is opened.
     */
    onOpen: _react.PropTypes.func,

    /**
     * An optional function to call when the portal is closed
     */
    onClose: _react.PropTypes.func,

    /**
     * An optional DOM Node to render the portal into. The default is to render as
     * the first child in the `body`.
     */
    renderNode: _react.PropTypes.object,

    /**
     * Boolean if the portal should render the childeren as the last child of the `renderNode`
     * or `body` instead of the first.
     */
    lastChild: _react.PropTypes.bool
  };
  Portal.defaultProps = {
    component: 'span'
  };
  exports.default = Portal;
});