'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSpinkit = require('react-spinkit');

var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);

var _Root = require('./components/Root');

var _Root2 = _interopRequireDefault(_Root);

var _ContainerLogo = require('./components/ContainerLogo');

var _ContainerLogo2 = _interopRequireDefault(_ContainerLogo);

var _ChildrenWrapper = require('./components/ChildrenWrapper');

var _ChildrenWrapper2 = _interopRequireDefault(_ChildrenWrapper);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Text = require('./components/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _propTypes2.default.node.isRequired,
  backgroundColor: _propTypes2.default.string,
  spinnerColor: _propTypes2.default.string,
  textColor: _propTypes2.default.string,
  loading: _propTypes2.default.bool.isRequired,
  logoSrc: _propTypes2.default.string,
  text: _propTypes2.default.string
};

function LoadingScreen(_ref) {
  var children = _ref.children,
      backgroundColor = _ref.backgroundColor,
      spinnerColor = _ref.spinnerColor,
      textColor = _ref.textColor,
      loading = _ref.loading,
      logoSrc = _ref.logoSrc,
      logoRounded = _ref.logoRounded,
      text = _ref.text,
      textStyle = _ref.textStyle;


  var windowSizeBlock = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: windowSizeBlock },
      _react2.default.createElement(
        _Root2.default,
        {
          backgroundColor: backgroundColor,
          loading: loading
        },
        _react2.default.createElement(
          _ContainerLogo2.default,
          { loading: loading },
          logoSrc && _react2.default.createElement(_Logo2.default, {
            src: logoSrc,
            rounded: logoRounded }),
          loading && _react2.default.createElement(_reactSpinkit2.default, {
            name: 'ball-beat',
            fadeIn: 'quarter',
            color: spinnerColor }),
          text && _react2.default.createElement(_Text2.default, {
            text: text,
            textColor: textColor })
        )
      )
    ),
    _react2.default.createElement(
      _ChildrenWrapper2.default,
      { loading: loading },
      children
    )
  );
}

LoadingScreen.propTypes = propTypes;

exports.default = LoadingScreen;