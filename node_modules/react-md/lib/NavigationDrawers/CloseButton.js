(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../Buttons/Button'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../Buttons/Button'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Button);
    global.CloseButton = mod.exports;
  }
})(this, function (exports, _react, _Button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Button2 = _interopRequireDefault(_Button);

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

  var CloseButton = function (_PureComponent) {
    _inherits(CloseButton, _PureComponent);

    function CloseButton(props) {
      _classCallCheck(this, CloseButton);

      var _this = _possibleConstructorReturn(this, (CloseButton.__proto__ || Object.getPrototypeOf(CloseButton)).call(this, props));

      _this._handleClick = _this._handleClick.bind(_this);
      return _this;
    }

    _createClass(CloseButton, [{
      key: '_handleClick',
      value: function _handleClick(e) {
        if (this.props.onClick) {
          this.props.onClick(e);
        }

        if (this.context.onCloseClick) {
          this.context.onCloseClick(e);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _context = this.context,
            iconClassName = _context.closeIconClassName,
            children = _context.closeChildren;


        return _react2.default.createElement(
          _Button2.default,
          _extends({}, this.props, {
            icon: true,
            key: 'close',
            iconClassName: iconClassName,
            onClick: this._handleClick
          }),
          children
        );
      }
    }]);

    return CloseButton;
  }(_react.PureComponent);

  CloseButton.propTypes = {
    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * An optional additional function to call when the `click` event is triggered.
     */
    onClick: _react.PropTypes.func
  };
  CloseButton.contextTypes = {
    closeIconClassName: _react.PropTypes.string,
    closeChildren: _react.PropTypes.node,
    onCloseClick: _react.PropTypes.func
  };
  exports.default = CloseButton;
});