String.prototype.template = function (object) {'use strict';
  // Andrea Giammarchi - WTFPL License
  var
    stringify = JSON.stringify,
    re = /\$\{([\S\s]*?)\}/g,
    evaluate = [],
    i = 0,
    m
  ;
  while (m = re.exec(this)) {
    evaluate.push(
      stringify(this.slice(i, re.lastIndex - m[0].length)),
      '(' + m[1] + ')'
    );
    i = re.lastIndex;
  }
  evaluate.push(stringify(this.slice(i)));
  // Function is needed to opt out from possible "use strict" directive
  return Function('with(this)return' + evaluate.join('+')).call(object);
};






































//*
String.prototype.template = function (fn, object) {'use strict';
  // Andrea Giammarchi - WTFPL License
  var
    hasTransformer = typeof fn === 'function',
    stringify = JSON.stringify,
    re = /\$\{([\S\s]*?)\}/g,
    strings = [],
    values = hasTransformer ? [] : strings,
    i = 0,
    str,
    m
  ;
  while ((m = re.exec(this))) {
    str = this.slice(i, re.lastIndex - m[0].length);
    if (hasTransformer) {
      strings.push(str);
      values.push('(' + m[1] + ')');
    } else {
      strings.push(stringify(str), '(' + m[1] + ')');
    }
    i = re.lastIndex;
  }
  str = this.slice(i);
  strings.push(hasTransformer ? str : stringify(str));
  if (hasTransformer) {
    str = 'function' + (Math.random() * 1e5 | 0);
    strings = [
      str,
      'with(this)return ' + str + '(' + stringify(strings) + (
        values.length ? (',' + values.join(',')) : ''
      ) + ')'
    ];
  } else {
    strings = ['with(this)return ' + strings.join('+')];
  }
  return Function.apply(null, strings).call(
    hasTransformer ? object : fn,
    hasTransformer && fn
  );
};
//*/