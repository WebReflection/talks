# Literally Awesome !
<sub>Meetup.js Argentina</sub>

The basics:
```js
const before = 'abc'; // (['"]).*\1
const after = `abc`;  // `.*`
```

- - -

The first of many <sup><sub>(pointless)</sub></sup> benchmarks:
```js
console.time('regular');
for (let i = 0; i < 1000; i++) this.value = 'abc';
console.timeEnd('regular');
// - - - - - - - - - - - - -
console.time('template');
for (let i = 0; i < 1000; i++) this.value = `abc`;
console.timeEnd('template');
```

- - -

Values in between ?
```js
this.value = 'a' + i + i + 'c';
console.log(this.value);
// - - - - - - - - - - - - -
this.value = `a${i + i}c`;
console.log(this.value);
```

- - -

Values in between !
```js
console.time('regular');
for (let i = 0; i < 1000; i++) this.value = 'a' + (i + i) + 'c';
console.timeEnd('regular');
// - - - - - - - - - - - - -
console.time('template');
for (let i = 0; i < 1000; i++) this.value = `a${i + i}c`;
console.timeEnd('template');
console.log(this.value);
```

- - -

Intercepting ?
```js
function nope(before, interpolation, after) {
  console.log(before, interpolation, after);
}

let i = 2;
nope('a' + (i + i) + 'c');
// - - - - - - - - - - - - -
nope(`a${i + i}c`);
```

- - -

Intercepting !

```js
function before(before, interpolation, after) {
  console.log(before, interpolation, after);
}
before('a', 123, 'c');
// - - - - - - - - - - - - -
function after(chunks, interpolation) {
  const [before, after] = chunks;
  console.log(before, interpolation, after);
}
after`a${123}c`;
```

### 💺💺💺
```js
function before(b, i, a) {
  return b + i + a;
}
console.time('regular');
for (let i = 0; i < 1000; i++) this.value = before('a', i, 'c');
console.timeEnd('regular');
// - - - - - - - - - - - - -
function after(c, i) {
  return c[0] + i + c[1];
}
console.time('template');
for (let i = 0; i < 1000; i++) this.value = after`a${i}c`;
console.timeEnd('template');
```

... or for this case ...
```js
function before(b, i, a) {
  return b + i + a;
}
console.time('regular');
for (let i = 0; i < 1000; i++) this.value = before('a', i, 'c');
console.timeEnd('regular');
// - - - - - - - - - - - - -
function after(c, i) {
  return c.join(i);
}
console.time('template');
for (let i = 0; i < 1000; i++) this.value = after`a${i}c`;
console.timeEnd('template');
```

- - -

Intercepting them all (no-op):
```js
function before() {
  return String.prototype.concat.apply('', arguments);
}
this.value = before('a', 'b', 'c', 'd', 'e');
// - - - - - - - - - - - - -
function after(chunks, ...interpolations) {
  const out = [chunks[0]];
  const length = interpolations.length;
  for (let i = 0; i < length; i++) {
    out.push(interpolations[i], chunks[i + 1]);
  }
  return out.join('');
}
this.value = after`a${'b'}cd${'e'}`;
```

### 💺💺💺
```js
console.time('regular');
for (let i = 0; i < 1000; i++) this.value = before('a', i, 'c', 'd', i);
console.timeEnd('regular');
// - - - - - - - - - - - - -
console.time('template');
for (let i = 0; i < 1000; i++) this.value = after`a${i}cd${i}`;
console.timeEnd('template');
```

- - -

# <big>DILEMMA</big>

Before, ES2015, how am I supposed to know which part of a string is dynamic ?

```js
let today = new Date();
function tenBefore(i) { return i < 10 ? ('0' + i) : i; }
console.log(
  'Date: ' +
    tenBefore(today.getDate()) + '/' +
    tenBefore(today.getMonth() + 1) + '/' +
    today.getFullYear()
);
console.log(
  'Date: ' + [
    today.getDate(),
    today.getMonth() + 1,
    today.getFullYear()
  ].map(tenBefore).join('/')
);
// - - - - - - - - - - - - -
function ten(chunks, ...interpolations) {
  return chunks.reduce(
    (s, c, i) => s + tenBefore(interpolations[i - 1]) + c
  );
}
console.log(
  ten`Date: ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
);
```

- - -

Memory ?

```js
const store = new Map;
function get(chunks, i) {
  store.set(chunks, i);
  return chunks.join(i);
}

console.log(get`a${0}b`);
console.log(store.size);
```

will it crash ?
```js
for (let i = 0; i < 1e8; i++) this.value = get`a${i}b`;
```

- - -

Uniqueness 🎉

```js
let templateA, templateB;

function tagA(chunks, ...values) {
  templateA = chunks;
  return chunks.reduce((s, c, i) => s + values[i - 1] + c);
}

function tagB(chunks, ...values) {
  templateB = chunks;
  return chunks.reduce((s, c, i) => s + values[i - 1] + c);
}

tagA`wait, ${'what'} ?`;
tagB`wait, ${'really'} ?`;

console.assert(templateA === templateB, 'same template');
```

<sub>... AHA !</sub>

- - -

`entry.js`

```js
console.log(
  `Hello ${process.env.USER}!`
);
```

[i18n-dummy](https://github.com/WebReflection/i18n-dummy)

```js
const i18n = require('i18n-dummy');

console.log(
  i18n`Hello ${process.env.USER}!`
);
```

[i18n-yummy](https://github.com/WebReflection/i18n-yummy) and
[i18n-utils](https://github.com/WebReflection/i18n-utils) `npx i18n-utils entry.js`

```js
const i18n = require('i18n-yummy');
i18n.db = require('./i18n.db.json');
i18n.locale = 'es';

console.log(
  i18n`Hello ${process.env.USER}!`
);
```

- - -

[viper(HTML)](https://viperhtml.js.org/viper.html)

```js
const viper = require('viperhtml');
'' + viper()`<!doctype html>
<html lang="en">
  <head>
    <title>&copy; TL ${(new Date).getFullYear()}</title>
    <style>
    html {
      font-family: sans-serif;
    }
    </style>
    <script>
    // some comment
    this.onload = function () {
      document.body.textContent = 'Hello There';
    };
    </script>
  </head>
</html>`;
```

- - -

[hyper(HTML)](https://viperhtml.js.org/hyper.html) <sup><sub>nitty-gritty edition</sub></sup>

[live demo](https://codepen.io/WebReflection/pen/JObreJ?editors=0010)

```js
function hyperHTML(chunks, ...interpolations) {
  if (!templates.has(chunks)) {
    const template = document.createElement('template');
    template.innerHTML = chunks.join('<!--⚡️-->');
    templates.set(chunks, {
      content: template.content,
      paths: [].filter.call(
        template.content.childNodes,
        node => node.nodeType === Node.COMMENT_NODE &&
                node.textContent === '⚡️'
      ).map(node => {
        node = node.parentNode.insertBefore(
          node.ownerDocument.createTextNode(''),
          node
        );
        const path = [];
        do {
          path.unshift(path.indexOf.call(node.parentNode.childNodes, node));
          node = node.parentNode;
        } while(node !== template.content);
        return path;
      })
    });
  }
  if (!updates.has(this) || updates.get(this).chunks !== chunks) {
    const info = templates.get(chunks);
    this.textContent = '';
    this.appendChild(info.content.cloneNode(true));
    updates.set(this, {
      chunks,
      fns: info.paths.map(path => {
        const node = path.reduce((p, i) => p.childNodes[i], this);
        return text => node.textContent = text;
      })
    });
  }
  updates.get(this).fns.forEach((fn, i) => fn(interpolations[i]));
  return this;
}

const templates = new Map;
const updates = new WeakMap;

const render = hyperHTML.bind(document.body);
render`hello ${'world'}`;
```

[DBMonster](https://webreflection.github.io/hyperHTML/test/dbmonster.html)

[1K SVG](https://codepen.io/WebReflection/full/yMGYEx/)

[Silky smooth](https://codepen.io/WebReflection/full/rzQPpv/)

[Airport Distance Map](https://codepen.io/WebReflection/full/gxqvpZ/)

[HNPWA](https://viperhtml-164315.appspot.com/top/1) + [Source](https://github.com/WebReflection/viper-news)

[JSX to hyperHTML](https://github.com/codemix/babel-plugin-hyperhtml)

- - -

**Thank You**
