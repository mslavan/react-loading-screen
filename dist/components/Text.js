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
  text: _propTypes2.default.string.isRequired,
  textStyle: _propTypes2.default.object
};

function Text(_ref) {
  var text = _ref.text,
      textStyle = _ref.textStyle;


  var style = {
    textAlign: 'center'
  };

  if (textStyle) {
    Object.assign(style, textStyle);
  }

  return _react2.default.createElement(
    'p',
    { style: style },
    text
  );
}

Text.PropTypes = propTypes;

exports.default = Text;