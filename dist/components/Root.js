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
  backgroundColor: _propTypes2.default.string,
  loading: _propTypes2.default.bool.isRequired
};

function Root(_ref) {
  var children = _ref.children,
      loading = _ref.loading,
      backgroundColor = _ref.backgroundColor;


  var style = {
    position: 'relative',
    textAlign: 'center',
    background: backgroundColor || '#efefef',
    width: '100%',
    height: '100%',
    zIndex: '9999999999',

    opacity: loading ? 1 : 0,
    WebkitTransition: 'opacity 0.2s ease-out',
    MozTransition: 'opacity 0.2s ease-out',
    MsTransition: 'opacity 0.2s ease-out',
    OTransition: 'opacity 0.2s ease-out'
  };

  return _react2.default.createElement(
    'div',
    {
      style: style
    },
    children
  );
}

Root.PropTypes = propTypes;

exports.default = Root;