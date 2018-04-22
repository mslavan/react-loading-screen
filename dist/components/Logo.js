'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-bottom: 20px;\n  border-radius: ', ';\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  margin-bottom: 20px;\n  border-radius: ', ';\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 150px;\n    max-height: 175px;\n  '], ['\n    width: 150px;\n    max-height: 175px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 120px;\n    max-height: 135px;\n  '], ['\n    width: 120px;\n    max-height: 135px;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    width: 100px;\n    max-height: 115px;\n  '], ['\n    width: 100px;\n    max-height: 115px;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    width: 80px;\n    max-height: 90px;\n  '], ['\n    width: 80px;\n    max-height: 90px;\n  ']);

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

var Image = _styledComponents2.default.img(_templateObject, function (props) {
  return props.rounded ? '10%' : '0px';
}, _mediaConf2.default.largest(_templateObject2), _mediaConf2.default.desktop(_templateObject3), _mediaConf2.default.tablet(_templateObject4), _mediaConf2.default.phone(_templateObject5));

var propTypes = {
  src: _propTypes2.default.string.isRequired,
  rounded: _propTypes2.default.bool
};

function Logo(_ref) {
  var src = _ref.src,
      rounded = _ref.rounded;

  return _react2.default.createElement(Image, {
    rounded: true,
    src: src });
}

Logo.PropTypes = propTypes;

exports.default = Logo;