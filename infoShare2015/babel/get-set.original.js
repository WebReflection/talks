window.addEventListener('error', (e) => alert(e.message));

class Test {
  get value() {}
  set value(value) {
    Object.defineProperty(this, 'value', {value: value});
  }
}

var t = new Test;
// max recursion stack in webOS
// not even caught in Android 2
// shenanigans in IE9
t.value = 123;
alert(t.value);