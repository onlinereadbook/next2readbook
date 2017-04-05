(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', '../Subheaders', 'react-prop-types/lib/deprecated', '../Menus/contextTypes'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('../Subheaders'), require('react-prop-types/lib/deprecated'), require('../Menus/contextTypes'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.Subheaders, global.deprecated, global.contextTypes);
    global.List = mod.exports;
  }
})(this, function (exports, _react, _classnames, _Subheaders, _deprecated, _contextTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _Subheaders2 = _interopRequireDefault(_Subheaders);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _contextTypes2 = _interopRequireDefault(_contextTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
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

  var List = function (_PureComponent) {
    _inherits(List, _PureComponent);

    function List() {
      _classCallCheck(this, List);

      return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var _context = this.context,
            listLevel = _context.listLevel,
            context = _objectWithoutProperties(_context, ['listLevel']);

        return _extends({}, context, {
          listLevel: typeof listLevel === 'undefined' ? 1 : listLevel + 1
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _cn;

        var _props = this.props,
            className = _props.className,
            ordered = _props.ordered,
            children = _props.children,
            subheader = _props.subheader,
            primarySubheader = _props.primarySubheader,
            props = _objectWithoutProperties(_props, ['className', 'ordered', 'children', 'subheader', 'primarySubheader']);

        var _context2 = this.context,
            menuPosition = _context2.menuPosition,
            menuCascading = _context2.menuCascading,
            listLevel = _context2.listLevel;


        var subheaderEl = void 0;
        if (subheader) {
          subheaderEl = _react2.default.createElement(_Subheaders2.default, { key: 'subheader', primaryText: subheader, primary: primarySubheader });
        }

        var Component = ordered ? 'ol' : 'ul';
        return _react2.default.createElement(
          Component,
          _extends({}, props, {
            className: (0, _classnames2.default)('md-list', (_cn = {
              'md-list--menu': menuPosition,
              'md-list--menu-scrollable': menuPosition && !menuCascading,
              'md-list--menu-cascading': menuCascading,
              'md-list--menu-nested': menuPosition && listLevel
            }, _defineProperty(_cn, 'md-list--nested-' + listLevel, listLevel && !menuPosition), _defineProperty(_cn, 'md-list--menu-' + menuPosition, menuPosition), _cn), className)
          }),
          subheaderEl,
          children
        );
      }
    }]);

    return List;
  }(_react.PureComponent);

  List.propTypes = {
    /**
     * An optional style to apply to the list.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply to the list.
     */
    className: _react.PropTypes.string,

    /**
     * Boolean if this should be an ordered list (`<ol>`) component. Otherwise, it will
     * be rendered as `<ul>`.
     */
    ordered: _react.PropTypes.bool,

    /**
     * This *should* be a list of `ListItem`, `ListItemControl`, `Divider`, or
     * `Subheader`.
     */
    children: _react.PropTypes.node,
    subheader: (0, _deprecated2.default)(_react.PropTypes.string, 'Use the `Subheader` component as a child instead'),
    primarySubheader: (0, _deprecated2.default)(_react.PropTypes.bool, 'Use the `Subheader` component as a child instead')
  };
  List.childContextTypes = _contextTypes2.default;
  List.contextTypes = _contextTypes2.default;
  exports.default = List;
});