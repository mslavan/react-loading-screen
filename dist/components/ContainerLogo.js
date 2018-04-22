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
  loading: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node.isRequired
};

function ContainerLogo(_ref) {
  var loading = _ref.loading,
      children = _ref.children;


  var style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  return _react2.default.createElement(
    'div',
    { style: style },
    children
  );
}

ContainerLogo.PropTypes = propTypes;

exports.default = ContainerLogo;