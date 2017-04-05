'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DataTable = require('react-md/lib/DataTables/DataTable');

var _DataTable2 = _interopRequireDefault(_DataTable);

var _TableHeader = require('react-md/lib/DataTables/TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableBody = require('react-md/lib/DataTables/TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableRow = require('react-md/lib/DataTables/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableColumn = require('react-md/lib/DataTables/TableColumn');

var _TableColumn2 = _interopRequireDefault(_TableColumn);

var _loremIpsum = require('lorem-ipsum');

var _loremIpsum2 = _interopRequireDefault(_loremIpsum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/user/Sites/onlinereadbook/nextofficeweb/pages/index.js?entry';


var PlainTableExample = function (_PureComponent) {
    (0, _inherits3.default)(PlainTableExample, _PureComponent);

    function PlainTableExample() {
        (0, _classCallCheck3.default)(this, PlainTableExample);

        return (0, _possibleConstructorReturn3.default)(this, (PlainTableExample.__proto__ || (0, _getPrototypeOf2.default)(PlainTableExample)).apply(this, arguments));
    }

    (0, _createClass3.default)(PlainTableExample, [{
        key: 'render',
        value: function render() {
            var rows = [].concat((0, _toConsumableArray3.default)(new Array(10))).map(function (_, i) {
                return _react2.default.createElement(_TableRow2.default, { key: i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                }, _react2.default.createElement(_TableColumn2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                }, (0, _loremIpsum2.default)({ count: 5, units: 'words' })), _react2.default.createElement(_TableColumn2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                }, (0, _loremIpsum2.default)({ count: 5, units: 'words' })));
            });

            return _react2.default.createElement(_DataTable2.default, { plain: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement(_TableHeader2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_TableRow2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement(_TableColumn2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, 'Lorem 1'), _react2.default.createElement(_TableColumn2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Lorem 2'))), _react2.default.createElement(_TableBody2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, rows));
        }
    }]);

    return PlainTableExample;
}(_react.PureComponent);

exports.default = function () {
    return _react2.default.createElement(_layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement(PlainTableExample, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }));
};