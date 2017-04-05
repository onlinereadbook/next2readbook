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
    global.ToolbarTitle = mod.exports;
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

  var ToolbarTitle = function (_PureComponent) {
    _inherits(ToolbarTitle, _PureComponent);

    function ToolbarTitle(props) {
      _classCallCheck(this, ToolbarTitle);

      var _this = _possibleConstructorReturn(this, (ToolbarTitle.__proto__ || Object.getPrototypeOf(ToolbarTitle)).call(this, props));

      _this.state = {};
      return _this;
    }

    _createClass(ToolbarTitle, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            title = _props.title,
            className = _props.className,
            prominent = _props.prominent,
            offset = _props.offset,
            props = _objectWithoutProperties(_props, ['title', 'className', 'prominent', 'offset']);

        if (!title) {
          return null;
        }

        var fullClassName = (0, _classnames2.default)('md-title md-title--toolbar', {
          'md-title--toolbar-prominent': prominent,
          'md-title--toolbar-offset': offset
        }, className);

        if ((0, _react.isValidElement)(title)) {
          var titleEl = _react.Children.only(title);
          return (0, _react.cloneElement)(title, {
            className: (0, _classnames2.default)(fullClassName, titleEl.props.className)
          });
        }

        return _react2.default.createElement(
          'h2',
          _extends({}, props, {
            className: fullClassName
          }),
          title
        );
      }
    }]);

    return ToolbarTitle;
  }(_react.PureComponent);

  ToolbarTitle.propTypes = {
    className: _react.PropTypes.string,
    prominent: _react.PropTypes.bool,
    offset: _react.PropTypes.bool,
    title: _react.PropTypes.node
  };
  exports.default = ToolbarTitle;
});