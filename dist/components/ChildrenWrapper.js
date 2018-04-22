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
  children: _propTypes2.default.node
};

function ChildrenWrapper(_ref) {
  var loading = _ref.loading,
      children = _ref.children;


  var style = {
    display: loading ? "none" : "block"
  };

  return _react2.default.createElement(
    'div',
    { style: style },
    children
  );
}

ChildrenWrapper.PropTypes = propTypes;

exports.default = ChildrenWrapper;