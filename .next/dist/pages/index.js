'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _lessonData = require('../data/lessonData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/user/Sites/onlinereadbook/nextofficeweb/pages/index.js?entry';

//let lessonData = [{ title: "1" }, { title: "2" }, { title: "3" }];

var cn = 'md-table-column--adjusted';

var PlainTableExample = function (_PureComponent) {
    (0, _inherits3.default)(PlainTableExample, _PureComponent);

    function PlainTableExample() {
        (0, _classCallCheck3.default)(this, PlainTableExample);

        return (0, _possibleConstructorReturn3.default)(this, (PlainTableExample.__proto__ || (0, _getPrototypeOf2.default)(PlainTableExample)).apply(this, arguments));
    }

    (0, _createClass3.default)(PlainTableExample, [{
        key: 'render',
        value: function render() {
            var rows = _lessonData.lessonData.map(function (_, i) {
                return _react2.default.createElement(_TableRow2.default, { key: i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }, _react2.default.createElement(_TableColumn2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }, '    ', _.title, '       '), _react2.default.createElement(_TableColumn2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                }, '      ', _.date, '       '), _react2.default.createElement(_TableColumn2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }, '        ', _.title, '     '), _react2.default.createElement(_TableColumn2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }, '        ', _.title, '     '));
            });

            return _react2.default.createElement(_DataTable2.default, { plain: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_TableHeader2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_TableRow2.default, { autoAdjust: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_TableColumn2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, '\u985E\u578B'), _react2.default.createElement(_TableColumn2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, '\u6642\u9593'), _react2.default.createElement(_TableColumn2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, '\u4E3B\u8B1B\u8005'), _react2.default.createElement(_TableColumn2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, '\u5167\u5BB9'))), _react2.default.createElement(_TableBody2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
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
            lineNumber: 45
        }
    }, _react2.default.createElement(PlainTableExample, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }));
};