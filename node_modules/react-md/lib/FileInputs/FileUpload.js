(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', './FileInput'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('./FileInput'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.FileInput);
    global.FileUpload = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _FileInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _FileInput2 = _interopRequireDefault(_FileInput);

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

  var FileUpload = function (_PureComponent) {
    _inherits(FileUpload, _PureComponent);

    function FileUpload(props) {
      _classCallCheck(this, FileUpload);

      var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this, props));

      _this.state = {};
      _this.abort = _this.abort.bind(_this);
      _this._uploadFile = _this._uploadFile.bind(_this);
      _this._handleUpload = _this._handleUpload.bind(_this);
      return _this;
    }

    /**
     * Attempts to abort the upload of a file. This function takes an optional `file` or `fileName`
     * as it's parameter. If the parameter is omitted, it attempts to abort the first file that was
     * added. If the `onAbort` function was given, it will be called as well.
     *
     * @param {Object|string=} file - The file or the file name to use to find the
     *     correct `FileReader`.
     */


    _createClass(FileUpload, [{
      key: 'abort',
      value: function abort(file) {
        var fileName = file;
        if (!file) {
          // Attempt to remove first file added...
          fileName = Object.keys(this.state)[0];
        } else if (typeof file.name === 'string') {
          fileName = file.name;
        }

        var reader = this.state[fileName];
        if (reader) {
          reader.abort();
          var state = this.state;
          delete state[fileName];

          (0, _reactDom.findDOMNode)(this).querySelector('.md-file-input').value = '';

          this.setState(state);
        }
      }
    }, {
      key: '_uploadFile',
      value: function _uploadFile(file) {
        var _this2 = this;

        var _props = this.props,
            onAbort = _props.onAbort,
            onError = _props.onError,
            onLoad = _props.onLoad,
            onLoadStart = _props.onLoadStart,
            onLoadEnd = _props.onLoadEnd,
            onProgress = _props.onProgress,
            readAs = _props.readAs;
        var name = file.name,
            type = file.type;


        var fr = new FileReader();
        if (onError) {
          fr.onerror = function (e) {
            onError(file, e.target.error, e);
          };
        }

        if (onAbort) {
          fr.onabort = function (e) {
            onAbort(file, e);
          };
        }

        if (onLoadStart) {
          fr.onloadstart = function (e) {
            onLoadStart(file, e);
          };
        }

        if (onLoadEnd) {
          fr.onloadend = function (e) {
            onLoadEnd(file, e);
          };
        }

        fr.onload = function (e) {
          if (onLoad) {
            onLoad(file, e.target.result, e);
          }

          var state = Object.assign({}, _this2.state);
          delete state[name];
          _this2.setState(state);
        };

        if (onProgress) {
          fr.onprogress = function (e) {
            if (e.lengthComputable) {
              onProgress(file, e.loaded / e.total * 100, e);
            }
          };
        }

        if (readAs) {
          if (typeof readAs === 'function') {
            readAs(file.type, file, fr);
          } else {
            fr['readAs' + readAs](file);
          }
        } else if (type.match(/image|video|audio/)) {
          fr.readAsDataURL(file);
        } else if (type.match(/json$/)) {
          fr.readAsText(file);
        } else if (type.match(/application|model|multipart/) || name.match(/(w|e)ar$/)) {
          fr.readAsArrayBuffer(file);
        } else {
          fr.readAsText(file);
        }

        return fr;
      }
    }, {
      key: '_handleUpload',
      value: function _handleUpload(fileList, e) {
        var _this3 = this;

        if (this.props.onChange) {
          this.props.onChange(fileList, e);
        }

        if (!fileList) {
          return;
        }
        var _props2 = this.props,
            maxSize = _props2.maxSize,
            onSizeError = _props2.onSizeError;

        var files = Array.isArray(fileList) ? fileList : [fileList];

        var errorFiles = [];
        if (maxSize) {
          errorFiles = files.filter(function (file) {
            return file.size > maxSize;
          });
          files = files.filter(function (file) {
            return file.size <= maxSize;
          });
        }

        if (errorFiles.length) {
          onSizeError(errorFiles);
        }

        if (!files.length) {
          return;
        }

        var nextState = {};
        files.forEach(function (file) {
          var fileReader = _this3._uploadFile(file);
          nextState[file.name] = fileReader;
        });

        this.setState(nextState);
      }
    }, {
      key: 'render',
      value: function render() {
        var props = _objectWithoutProperties(this.props, []);

        // Remove invalid input props
        delete props.maxSize;
        delete props.onLoad;
        delete props.onLoadStart;
        delete props.onLoadEnd;
        delete props.onProgress;
        delete props.onAbort;
        delete props.onError;
        delete props.maxSize;
        delete props.onSizeError;
        delete props.readAs;

        return _react2.default.createElement(_FileInput2.default, _extends({}, props, { onChange: this._handleUpload }));
      }
    }]);

    return FileUpload;
  }(_react.PureComponent);

  FileUpload.propTypes = {
    /**
     * An optional style to apply.
     */
    style: _react.PropTypes.object,

    /**
     * An optional className to apply.
     */
    className: _react.PropTypes.string,

    /**
     * Boolean if the `FileInput` should be styled with the primary color.
     */
    primary: _react.PropTypes.bool,

    /**
     * Boolean if the `FileInput` should be styled with the secondary color.
     */
    secondary: _react.PropTypes.bool,

    /**
     * Boolean if the `FileInput` should be styled as a flat button instead of a
     * raised button.
     */
    flat: _react.PropTypes.bool,

    /**
     * This should be a comma separated list of Media Types that the `FileInput` can
     * accept. If this prop is left blank, any file will be accepted.
     *
     * The values can either be:
     * - A file extension
     * - audio/*
     * - video/*
     * - image/*
     * - any valid [IANA Media Type](http://www.iana.org/assignments/media-types/media-types.xhtml)
     */
    accept: _react.PropTypes.string,

    /**
     * Boolean if multiple files will be accepted.
     */
    multiple: _react.PropTypes.bool,

    /**
     * A label to display on the `FileInput`.
     */
    label: _react.PropTypes.string,

    /**
     * The icon children to use for the upload icon.
     */
    iconChildren: _react.PropTypes.node,

    /**
     * The icon className to use for the upload icon.
     */
    iconClassName: _react.PropTypes.string,

    /**
     * An optional max size for the file. If the file is greater than
     * this limit, the file will not be uploaded.
     */
    maxSize: _react.PropTypes.number,

    /**
     * A required function to call when the `maxSize` prop is set. It will
     * be given a list of files that were too big.
     */
    onSizeError: function onSizeError(props, propName, component) {
      for (var _len = arguments.length, others = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        others[_key - 3] = arguments[_key];
      }

      if (typeof props.maxSize === 'number') {
        var _PropTypes$func;

        return (_PropTypes$func = _react.PropTypes.func).isRequired.apply(_PropTypes$func, [props, propName, component].concat(others));
      }

      return null;
    },

    /**
     * You can force the `FileReader` to read the file as a specific type
     * if you do not trust the *amazing* regex I have for choosing the correct
     * one.
     *
     * ```js
     * if(type.match(/image|video|audio/)) {
     *   fr.readAsDataURL(file);
     * } else if(type.match(/application|model|multipart/)) {
     *   fr.readAsArrayBuffer(file);
     * } else {
     *   fr.readAsText(file);
     * }
     * ```
     *
     * > `.yml` and `.js` both are considered `application`, so it definitely fails there.
     *
     * If this prop is a function, you will be given the file's type, the file object, and
     * the file reader. You will then need to call `fileReader.readAsYOUR_CORRECT_TYPE(file)`.
     */
    readAs: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['DataURL', 'ArrayBuffer', 'Text']), _react.PropTypes.func]),

    /**
     * An optional function to call when the `FileUpload` aborts. The current
     * file and the abort event are given. This might not be the most useful
     * function to use since you will need to manually call abort yourself anyways.
     */
    onAbort: _react.PropTypes.func,

    /**
     * An optional function to call when the `FileUpload` errors. The current
     * file, the error, and the error event are given.
     *
     * ```js
     * onError(file, event.target.error, event);
     * ```
     */
    onError: _react.PropTypes.func,

    /**
     * An optional function to call when the `FileUpload` loads. The current
     * file, the load result, and the load event are given.
     *
     * ```js
     * onLoad(file, event.target.result, event);
     * ```
     *
     * The load result will either be:
     * - a data url
     * - a plain text string
     * - an array buffer
     *
     * depending on what type the file is.
     */
    onLoad: _react.PropTypes.func,

    /**
     * An optional function to call when the `FileUpload` starts loading. The current
     * file and the load start event are given.
     */
    onLoadStart: _react.PropTypes.func,

    /**
     * An optional function to call when the `FileUpload` finishes loading. The
     * current file and the load end event are given.
     */
    onLoadEnd: _react.PropTypes.func,

    /**
     * An optional function to call when the `FileUpload` progress. The current
     * file, upload progress, and the progress event are given. The progress
     * will be a number between 0 and 100 that has not been rounded.
     *
     * ```js
     * onProgress(file, progress, event);
     * ```
     */
    onProgress: _react.PropTypes.func,

    /**
     * An optional function to call when a file selects or unselects a file.
     * This will be called before any local uploading occurs.
     *
     * ```js
     * onChange(file(s) || null, event);
     * ```
     */
    onChange: _react.PropTypes.func
  };
  exports.default = FileUpload;
});