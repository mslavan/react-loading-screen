'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: \'center\';\n  word-wrap: break-word;\n  color: ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  text-align: \'center\';\n  word-wrap: break-word;\n  color: ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 30px;\n  '], ['\n    font-size: 30px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: 22px;\n  '], ['\n    font-size: 22px;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-size: 20px;\n  '], ['\n    font-size: 20px;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    font-size: 15px;\n  '], ['\n    font-size: 15px;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaConf = require('../media.conf.js');

var _mediaConf2 = _interopRequireDefault(_mediaConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents2.default.p(_templateObject, function (props) {
  return props.color ? props.color : '#676767';
}, _mediaConf2.default.largest(_templateObject2), _mediaConf2.default.desktop(_templateObject3), _mediaConf2.default.tablet(_templateObject4), _mediaConf2.default.phone(_templateObject5));

var propTypes = {
  text: _propTypes2.default.string.isRequired,
  textColor: _propTypes2.default.string
};

function Text(_ref) {
  var text = _ref.text,
      textColor = _ref.textColor;


  return _react2.default.createElement(
    Title,
    { color: textColor },
    text
  );
}

Text.PropTypes = propTypes;

exports.default = Text;