// ES6
class B extends A {
  method(x, y) {
    return super.method(x, y);
  }
  get value() {
    return super.value;
  }
  set value(value) {
    super.value = value;
  }
}

// $ babel basic.es6.js > basic.babel.js
