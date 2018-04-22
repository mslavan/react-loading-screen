'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  src: _propTypes2.default.string.isRequired
};

function Logo(_ref) {
  var src = _ref.src;


  var style = {
    width: '500px'
  };

  return _react2.default.createElement('img', {
    src: src,
    style: style });
}

Logo.PropTypes = propTypes;

exports.default = Logo;