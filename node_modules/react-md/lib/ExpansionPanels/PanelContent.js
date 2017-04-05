(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../Dialogs/DialogFooter'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../Dialogs/DialogFooter'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.DialogFooter);
    global.PanelContent = mod.exports;
  }
})(this, function (exports, _react, _classnames, _DialogFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

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

  var PanelContent = function (_PureComponent) {
    _inherits(PanelContent, _PureComponent);

    function PanelContent() {
      _classCallCheck(this, PanelContent);

      return _possibleConstructorReturn(this, (PanelContent.__proto__ || Object.getPrototypeOf(PanelContent)).apply(this, arguments));
    }

    _createClass(PanelContent, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            style = _props.style,
            contentStyle = _props.contentStyle,
            className = _props.className,
            children = _props.children,
            onSave = _props.onSave,
            onCancel = _props.onCancel,
            saveType = _props.saveType,
            saveLabel = _props.saveLabel,
            savePrimary = _props.savePrimary,
            saveSecondary = _props.saveSecondary,
            cancelType = _props.cancelType,
            cancelLabel = _props.cancelLabel,
            cancelPrimary = _props.cancelPrimary,
            cancelSecondary = _props.cancelSecondary;


        var actions = [{
          type: cancelType,
          label: cancelLabel,
          onClick: onCancel,
          primary: cancelPrimary,
          secondary: cancelSecondary
        }, {
          type: saveType,
          label: saveLabel,
          onClick: onSave,
          primary: savePrimary,
          secondary: saveSecondary
        }];

        return _react2.default.createElement(
          'div',
          { style: style },
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('md-panel-content', className), style: contentStyle },
            children
          ),
          _react2.default.createElement(_DialogFooter2.default, { actions: actions, className: 'md-divider-border md-divider-border--top' })
        );
      }
    }]);

    return PanelContent;
  }(_react.PureComponent);

  PanelContent.propTypes = {
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    contentStyle: _react.PropTypes.object,
    children: _react.PropTypes.node,
    onSave: _react.PropTypes.func.isRequired,
    onCancel: _react.PropTypes.func.isRequired,
    saveType: _react.PropTypes.string,
    saveLabel: _react.PropTypes.string.isRequired,
    savePrimary: _react.PropTypes.bool,
    saveSecondary: _react.PropTypes.bool,
    cancelType: _react.PropTypes.string,
    cancelLabel: _react.PropTypes.string.isRequired,
    cancelPrimary: _react.PropTypes.bool,
    cancelSecondary: _react.PropTypes.bool
  };
  exports.default = PanelContent;
});