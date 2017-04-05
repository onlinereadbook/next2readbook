(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames);
    global.JumpToContentLink = mod.exports;
  }
})(this, function (exports, _react, _classnames) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

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

  var JumpToContentLink = function (_PureComponent) {
    _inherits(JumpToContentLink, _PureComponent);

    function JumpToContentLink(props) {
      _classCallCheck(this, JumpToContentLink);

      var _this = _possibleConstructorReturn(this, (JumpToContentLink.__proto__ || Object.getPrototypeOf(JumpToContentLink)).call(this, props));

      _this._handleClick = _this._handleClick.bind(_this);
      return _this;
    }

    _createClass(JumpToContentLink, [{
      key: '_handleClick',
      value: function _handleClick(e) {
        if (this.props.onClick) {
          this.props.onClick(e);
        }

        document.getElementById(this.context.id).focus();
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            props = _objectWithoutProperties(_props, ['className']);

        var _context = this.context,
            id = _context.id,
            label = _context.label;

        return _react2.default.createElement(
          'a',
          _extends({}, props, {
            id: 'skipTo' + id,
            href: '#' + id,
            onClick: this._handleClick,
            className: (0, _classnames2.default)('md-content-jump', className)
          }),
          label
        );
      }
    }]);

    return JumpToContentLink;
  }(_react.PureComponent);

  JumpToContentLink.propTypes = {
    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * An optional function to call when the linked is clicked.
     */
    onClick: _react.PropTypes.func
  };
  JumpToContentLink.contextTypes = {
    id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
    label: _react.PropTypes.string.isRequired
  };
  exports.default = JumpToContentLink;
});