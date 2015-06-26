// ES5 with hybrid ES6 bits
var B = Class({ extends: A,
  method(x, y) {
    return this.super(x, y);
  },
  get value() {
    return this.super();
  },
  set value(value) {
    return this.super(value);
  }
});

// $ babel --whitelist=es6.properties.shorthand basic.es56.js > basic.es5.js
