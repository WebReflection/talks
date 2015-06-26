// ES6
`test1 ${1 + 2} test2 ${3 + 4}`

// ES3
'test1 ${1 + 2} test2 ${3 + 4}'.template();



// ES6
function greetings(name) {
  return `Hello ${name}!`;
}
console.log(greetings('Andrea'));

// ES3
function greetings(name) {
  return 'Hello ${name}!'.template({name: name});
}
console.log(greetings('Andrea'));



// ES6
function greetings(user) {
  return `Hello ${user.name}!`;
}
console.log(greetings({name:'Andrea'}));

// ES3
function greetings(user) {
  return 'Hello ${user.name}!'.template({user: user});
}
console.log(greetings({name:'Andrea'}));



// ES6 multiline
(function (name) {
return (
`Hello there,
  this is ${name}!`
)}('Andrea'));

// ES3 multiline
(function () {/*
Hello there,
  this is ${name}!
*/}).template({
  name: 'Andrea'
});



// ES6 vs ES3 tagged template
function entityEncode(strings /*, value1, value2*/) {
  for (var
    values = [].slice.call(arguments, 1),
    re = /[<>'"&]/g,
    place = function (m) {
      return '&#' + m.charCodeAt(0) + ';';
    },
    replace = ''.replace,
    out = [],
    i = 0,
    slength = strings.length,
    vlength = values.length;
    i < slength; i++
  ) {
    out.push(
      strings[i],
      i < vlength ?
        replace.call(values[i], re, place) :
        ''
    );
  }
  return out.join('');
}

var href = 'javascript:alert("hello ladies & gentlemen!");';



// ES6 "transformer" example
document.body.innerHTML = entityEncode `<a href="${href}">hello</a>`;



// ES3 "transformer" example
document.body.innerHTML = '<a href="${href}">hello</a>'.template(
  entityEncode,
  {href: href}
);