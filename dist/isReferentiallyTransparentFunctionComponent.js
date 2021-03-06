'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isClassComponent = require('./isClassComponent.js');

var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-env node*/
var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && (process.env.NODE_ENV === 'production' || !Component.propTypes));
}; /**
    * @author recompose (https://github.com/acdlite/recompose)
    */

exports.default = isReferentiallyTransparentFunctionComponent;