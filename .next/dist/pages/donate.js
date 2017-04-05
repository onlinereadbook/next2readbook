'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('react-md/lib/Cards/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardTitle = require('react-md/lib/Cards/CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardActions = require('react-md/lib/Cards/CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardText = require('react-md/lib/Cards/CardText');

var _CardText2 = _interopRequireDefault(_CardText);

var _Media = require('react-md/lib/Media');

var _Media2 = _interopRequireDefault(_Media);

var _Avatars = require('react-md/lib/Avatars');

var _Avatars2 = _interopRequireDefault(_Avatars);

var _Buttons = require('react-md/lib/Buttons');

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/user/Sites/onlinereadbook/nextofficeweb/pages/donate.js?entry';

exports.default = function () {
    return _react2.default.createElement(_layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement(_Card2.default, { style: { maxWidth: 600 }, className: 'md-block-centered', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement(_Media2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement(_Media.MediaOverlay, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement(_CardTitle2.default, { title: 'Such nature', subtitle: 'Wow!', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement(_Buttons2.default, { className: 'md-cell--right', icon: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, 'star_outline')))), _react2.default.createElement(_CardTitle2.default, {
        avatar: _react2.default.createElement(_Avatars2.default, { src: '', role: 'presentation', __source: {
                fileName: _jsxFileName,
                lineNumber: 34
            }
        }),
        title: 'Card Title',
        subtitle: 'Card Subtitle',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }), _react2.default.createElement(_CardActions2.default, { expander: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement(_Buttons2.default, { flat: true, label: 'Action 1', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }), _react2.default.createElement(_Buttons2.default, { flat: true, label: 'Action 2', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    })), _react2.default.createElement(_CardText2.default, { expandable: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }))));
};