// ES3
var B = Class({ "extends": A,
  method: function (x, y) {
    return this.super(x, y);
  },
  get value() {
    return this.super();
  },
  set value(value) {
    return this.super(value);
  }
});

// $ jshint basic.es3.js
