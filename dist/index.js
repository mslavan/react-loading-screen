'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background: ', ';\n  opacity: ', ';\n  visibility: ', ';\n  transition: opacity 0.4s, visibility -0.3s linear 0.5s;\n'], ['\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background: ', ';\n  opacity: ', ';\n  visibility: ', ';\n  transition: opacity 0.4s, visibility -0.3s linear 0.5s;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n'], ['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: ', ';\n'], ['\n  display: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSpinkit = require('react-spinkit');

var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Text = require('./components/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ScreenWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.bgColor || '#ffffff';
}, function (props) {
  return props.loading ? 1 : 0;
}, function (props) {
  return props.loading ? 'visible' : 'hidden';
});
var LoadingComponents = _styledComponents2.default.div(_templateObject2);
var LoadableData = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.loading ? 'none' : 'block';
});

var propTypes = {
  children: _propTypes2.default.node.isRequired,
  bgColor: _propTypes2.default.string,
  spinnerColor: _propTypes2.default.string,
  textColor: _propTypes2.default.string,
  loading: _propTypes2.default.bool.isRequired,
  logoSrc: _propTypes2.default.string,
  text: _propTypes2.default.string
};

function LoadingScreen(_ref) {
  var children = _ref.children,
      bgColor = _ref.bgColor,
      spinnerColor = _ref.spinnerColor,
      textColor = _ref.textColor,
      loading = _ref.loading,
      logoSrc = _ref.logoSrc,
      logoRounded = _ref.logoRounded,
      text = _ref.text,
      textStyle = _ref.textStyle;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      ScreenWrapper,
      {
        bgColor: bgColor,
        loading: loading
      },
      _react2.default.createElement(
        LoadingComponents,
        null,
        logoSrc && _react2.default.createElement(_Logo2.default, {
          src: logoSrc,
          rounded: logoRounded }),
        loading && spinnerColor && _react2.default.createElement(_reactSpinkit2.default, {
          name: 'ball-beat',
          fadeIn: 'quarter',
          color: spinnerColor }),
        text && _react2.default.createElement(_Text2.default, {
          text: text,
          textColor: textColor })
      )
    ),
    _react2.default.createElement(
      LoadableData,
      { loading: loading },
      children
    )
  );
}

LoadingScreen.propTypes = propTypes;

exports.default = LoadingScreen;