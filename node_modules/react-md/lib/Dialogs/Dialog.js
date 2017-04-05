(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', 'classnames', '../utils/EventUtils/isValidFocusKeypress', '../Helpers/FocusContainer', '../Papers/Paper', './DialogTitle', './DialogFooter'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('classnames'), require('../utils/EventUtils/isValidFocusKeypress'), require('../Helpers/FocusContainer'), require('../Papers/Paper'), require('./DialogTitle'), require('./DialogFooter'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.classnames, global.isValidFocusKeypress, global.FocusContainer, global.Paper, global.DialogTitle, global.DialogFooter);
    global.Dialog = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _classnames, _isValidFocusKeypress, _FocusContainer, _Paper, _DialogTitle, _DialogFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _isValidFocusKeypress2 = _interopRequireDefault(_isValidFocusKeypress);

  var _FocusContainer2 = _interopRequireDefault(_FocusContainer);

  var _Paper2 = _interopRequireDefault(_Paper);

  var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

  var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

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

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
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

  var Dialog = function (_PureComponent) {
    _inherits(Dialog, _PureComponent);

    function Dialog(props) {
      _classCallCheck(this, Dialog);

      var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

      _this._setRenderNode = function (dialog) {
        _this._renderNode = (0, _reactDom.findDOMNode)(dialog);
      };

      _this.state = { transformOrigin: null };
      _this._setContent = _this._setContent.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      return _this;
    }

    _createClass(Dialog, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return { renderNode: this._renderNode };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _props = this.props,
            pageX = _props.pageX,
            containerX = _props.containerX,
            pageY = _props.pageY,
            containerY = _props.containerY;

        if (!pageX || !pageY) {
          return;
        }

        this.setState({
          transformOrigin: pageX - containerX + 'px ' + (pageY - containerY) + 'px'
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.onOpen) {
          this.props.onOpen();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.onLeave) {
          this.props.onLeave();
        }
      }
    }, {
      key: '_setContent',
      value: function _setContent(content) {
        if (content !== null) {
          this._content = (0, _reactDom.findDOMNode)(content);
          var contentPadded = this._content.querySelectorAll('.md-list').length === 0;

          this.setState({ contentPadded: contentPadded });
        }
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        if (!(0, _isValidFocusKeypress2.default)(e)) {
          return;
        }

        var target = e.target,
            shiftKey = e.shiftKey;

        var _innerFocusables = _toArray(this._innerFocusables),
            first = _innerFocusables[0],
            focusables = _innerFocusables.slice(1);

        var last = focusables[focusables.length - 1];

        if (shiftKey && target === first) {
          e.preventDefault();
          last.focus();
        } else if (!shiftKey && target === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            contentPadded = _state.contentPadded,
            transformOrigin = _state.transformOrigin;

        var _props2 = this.props,
            id = _props2.id,
            className = _props2.className,
            contentStyle = _props2.contentStyle,
            contentClassName = _props2.contentClassName,
            title = _props2.title,
            Content = _props2.contentComponent,
            actions = _props2.actions,
            children = _props2.children,
            fullPage = _props2.fullPage,
            props = _objectWithoutProperties(_props2, ['id', 'className', 'contentStyle', 'contentClassName', 'title', 'contentComponent', 'actions', 'children', 'fullPage']);

        delete props.pageX;
        delete props.pageY;
        delete props.containerX;
        delete props.containerY;
        delete props.style;
        delete props.onOpen;
        delete props.onLeave;

        var _props3 = this.props,
            labelledBy = _props3['aria-labelledby'],
            style = _props3.style;

        var titleId = id + 'Title';
        if (!labelledBy && title) {
          labelledBy = titleId;
        }

        var dialogChildren = fullPage ? children : [_react2.default.createElement(
          _DialogTitle2.default,
          { key: 'title', id: titleId },
          title
        ), _react2.default.createElement(
          Content,
          {
            ref: this._setContent,
            key: 'content',
            style: contentStyle,
            className: (0, _classnames2.default)('md-dialog-content', {
              'md-dialog-content--padded': contentPadded
            }, contentClassName)
          },
          children
        ), _react2.default.createElement(_DialogFooter2.default, { key: 'footer', actions: actions })];

        if (transformOrigin) {
          style = Object.assign({}, style, { transformOrigin: transformOrigin });
        }

        return _react2.default.createElement(
          _Paper2.default,
          _extends({}, props, {
            id: id,
            component: _FocusContainer2.default,
            ref: this._setRenderNode,
            style: style,
            className: (0, _classnames2.default)('md-background--card md-dialog', {
              'md-dialog--full-page': fullPage,
              'md-dialog--centered': !fullPage
            }, className),
            role: 'dialog',
            'aria-labelledby': labelledBy
          }),
          dialogChildren
        );
      }
    }]);

    return Dialog;
  }(_react.PureComponent);

  Dialog.propTypes = {
    id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    'aria-labelledby': _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    contentStyle: _react.PropTypes.object,
    contentClassName: _react.PropTypes.string,
    title: _react.PropTypes.node,
    children: _react.PropTypes.node,
    contentComponent: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).isRequired,
    actions: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.object]))]),
    initialFocus: _react.PropTypes.string,
    pageX: _react.PropTypes.number,
    pageY: _react.PropTypes.number,
    containerX: _react.PropTypes.number,
    containerY: _react.PropTypes.number,
    fullPage: _react.PropTypes.bool,
    onLeave: _react.PropTypes.func,
    zDepth: _react.PropTypes.number.isRequired,
    focusOnMount: _react.PropTypes.bool,
    onOpen: _react.PropTypes.func
  };
  Dialog.defaultProps = {
    contentComponent: 'section',
    zDepth: 5
  };
  Dialog.childContextTypes = {
    renderNode: _react.PropTypes.object
  };
  exports.default = Dialog;
});