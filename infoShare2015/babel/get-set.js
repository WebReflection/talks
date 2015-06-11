'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

window.addEventListener('error', function (e) {
  return alert(e.message);
});

var Test = (function () {
  function Test() {
    _classCallCheck(this, Test);
  }

  _createClass(Test, [{
    key: 'value',
    get: function () {},
    set: function (value) {
      Object.defineProperty(this, 'value', { value: value });
    }
  }]);

  return Test;
})();

var t = new Test();
// max recursion stack in webOS
// not even caught in Android 2
// shenanigans in IE9
t.value = 123;
alert(t.value);
