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

var _Inks = require('react-md/lib/Inks');

var _Inks2 = _interopRequireDefault(_Inks);

var _Button = require('react-md/lib/Buttons/Button');

var _Button2 = _interopRequireDefault(_Button);

var _youtubeDatatest = require('../data/youtubeDatatest.json');

var _youtubeDatatest2 = _interopRequireDefault(_youtubeDatatest);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/user/Sites/onlinereadbook/nextofficeweb/pages/youtube.js?entry';

//let lessonData = [{ title: "1" }, { title: "2" }, { title: "3" }];
console.log(_youtubeDatatest2.default);
var cn = 'md-table-column--adjusted';

var PlainTableExample = function (_PureComponent) {
    (0, _inherits3.default)(PlainTableExample, _PureComponent);

    function PlainTableExample(props) {
        (0, _classCallCheck3.default)(this, PlainTableExample);

        // this.state = {
        //   inline: false,
        //   large: false,
        //   sortedyoutubeData:  youtubeData.sort(sort_by('snippet.publishedAt')),      
        //   okOnOutsideClick: true,
        // };
        var _this = (0, _possibleConstructorReturn3.default)(this, (PlainTableExample.__proto__ || (0, _getPrototypeOf2.default)(PlainTableExample)).call(this, props));

        _this.sort = function () {
            console.log('test');
        };

        return _this;
    }

    (0, _createClass3.default)(PlainTableExample, [{
        key: 'render',
        value: function render() {
            var rows = _youtubeDatatest2.default.map(function (_, i) {
                var hrefdata = 'https://www.youtube.com/watch?v=' + _.snippet.videoId;
                return _react2.default.createElement(_TableRow2.default, { key: i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                }, _react2.default.createElement(_TableColumn2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                }, '   ', (0, _moment2.default)(_.snippet.publishedAt).format("YYYY-MM-DD HH:mm"), '             '), _react2.default.createElement(_TableColumn2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }, '    ', _.snippet.title, '             '), _react2.default.createElement(_TableColumn2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }, '  ', _react2.default.createElement(_Button2.default, { href: hrefdata, label: _.snippet.description, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }), '     '));
            });

            return _react2.default.createElement(_DataTable2.default, { plain: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_TableHeader2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_TableRow2.default, { autoAdjust: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_TableColumn2.default, { sorted: true, onClick: this.sort, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, ' \u4E0A\u67B6\u6642\u9593'), _react2.default.createElement(_TableColumn2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, '\u5F71\u7247\u540D\u7A31'), _react2.default.createElement(_TableColumn2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, '\u5167\u5BB9'))), _react2.default.createElement(_TableBody2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, rows));
        }
    }]);

    return PlainTableExample;
}(_react.PureComponent);

exports.default = function () {
    return _react2.default.createElement(_layout2.default, { title: '\u8B80\u66F8\u6703\u7684\u7CBE\u5F69\u5F71\u7247', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, _react2.default.createElement(PlainTableExample, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }));
};