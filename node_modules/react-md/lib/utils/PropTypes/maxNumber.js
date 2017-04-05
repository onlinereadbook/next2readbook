(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.maxNumber = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = maxNumber;


  /**
   * Validates the a prop's value is less than or equal to the minimum value.
   *
   * @param {Number} max - the maximum value for the prop.
   * @param {Boolean} required - Boolean if the prop is required.
   * @return {Error} an error or null.
   */
  function maxNumber(max, required) {
    return function validate(props, propName, componentName, location, propFullName) {
      var componentNameSafe = componentName || '<<anonymous>>';
      var propFullNameSafe = propFullName || propName;

      var validator = _react.PropTypes.number;
      if (required) {
        validator = validator.isRequired;
      }

      for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        args[_key - 5] = arguments[_key];
      }

      var err = validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
      if (!required && !err && props[propName] > max) {
        err = new Error('The ' + location + ' `' + propFullNameSafe + '` must be less than or equal to the min value ' + ('`' + max + '` but received `' + props[propName] + '` for the `' + componentNameSafe + '` component.'));
      }

      return err;
    };
  } /** @module PropTypes/maxNumber */
});