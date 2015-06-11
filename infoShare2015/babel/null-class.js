'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var Null = (function (_ref) {
  function Null() {
    _classCallCheck(this, Null);

    if (_ref != null) {
      _ref.apply(this, arguments);
    }
  }

  _inherits(Null, _ref);

  return Null;
})(null);

var n = new Null();
console.log('toString: ' + n.toString);

var k = '__proto__';

n[k] = {};

console.log('toString: ' + n.toString);

