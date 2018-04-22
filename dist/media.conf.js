'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  '], ['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizes = {
  largest: 10000,
  desktop: 992,
  tablet: 768,
  phone: 376
};

var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(_templateObject, sizes[label] / 16, _styledComponents.css.apply(undefined, arguments));
  };

  return acc;
}, {});

exports.default = media;