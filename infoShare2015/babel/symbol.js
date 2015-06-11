'use strict';

var s = Symbol('yolo');

var o = {};
var p = { __proto__: null };
var n = Object.create(null);

// once assigned to these variables
o[s] = 123;
p[s] = 456;
n[s] = 789;

// it should be like:
// native for/in:
// native keys:
// native getOPN:
// native getOPS: Symbol(yolo)

function getFirstForInKey(obj) {
  'use strict';
  for (var key in obj) {
    return key;
  }
}

function alertInfo(name, obj) {
  alert([name + ' for/in: ' + (getFirstForInKey(obj) || ''), name + ' keys:   ' + Object.keys(obj), name + ' getOPN: ' + Object.getOwnPropertyNames(obj), name + ' getOPS: ' + Object.getOwnPropertySymbols(obj)].join('\n'));
}

// how it is here instead?
alertInfo('Object      ', o);
alertInfo('{__proto__} ', p);
alertInfo('create(null)', n);
