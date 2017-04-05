(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.oneRequiredForA11yIf = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = oneRequiredForA11yIf;
  function oneRequiredForA11yIf(validator, requiringProp) {
    for (var _len = arguments.length, otherPropNames = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      otherPropNames[_key - 2] = arguments[_key];
    }

    return function validate(props, propName, componentName, location, propFullName) {
      var filterUndefined = function filterUndefined(pn) {
        return typeof props[pn] !== 'undefined';
      };
      var componentNameSafe = componentName || '<<anonymous>>';
      var propFullNameSafe = propFullName || propName;
      var requiredDefined = typeof props[requiringProp] !== 'undefined';
      var allPropNames = [propFullNameSafe].concat(otherPropNames);

      for (var _len2 = arguments.length, args = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
        args[_key2 - 5] = arguments[_key2];
      }

      var err = validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
      if (!err && requiredDefined && !allPropNames.filter(filterUndefined).length) {
        err = new Error('One of the following props are required to make `' + componentNameSafe + '` accessible ' + ('for users of assistive technologies such as screen readers when using the `' + requiringProp + '` ') + ('prop. `' + allPropNames.join('`, `') + '`.'));
      }

      return err;
    };
  }
});