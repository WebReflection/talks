// from https://strongloop.com/strongblog/getting-started-with-javascript-es6-destructuring/



// ES6
var value = [1, 2, 3, 4, 5];
var [el1, el2, el3] = value;


// ES3
var value = [1, 2, 3, 4, 5];
with(named('el1, el2, el3', value)) {
  console.log(el1, el2, el3);
}

function named(str, value) {
  for (var
    o = {},
    keys = str.split(/\s*,\s*/),
    i = 0; i < keys.length; i++
  ) {
    o[keys[i]] = value[i];
  }
  return o;
}



// ES6
// "This makes it really neat for example to pull values out of regular expression matches:"
var [
  ,
  firstName,
  lastName
] = "John Doe".match(/^(\w+) (\w+)$/);

// ES3 ... nope, this is way more neat!
if (/^(\w+) (\w+)$/.test("John Doe"))
with ({
  firstName: RegExp.$1,
  lastName: RegExp.$2
}) {
  console.log(firstName, lastName);
}



// ES6
var person = {firstName: "John", lastName: "Doe"};
var {firstName, lastName} = person;



// ES3
var person = {firstName: "John", lastName: "Doe"};
with (person) {
  firstName, lastName
}





// ES6 .. which format? DD/MM/YYYY or MM/DD/YYYY ?
var person = {dateOfBirth: [1, 1, 1980]};
var {dateOfBirth: [day, month, year]} = person;

// ES3 ... no need to mess up like that!






// ES6 
function findUser(userId, {includeProfile, includeHistory}) {
  if (includeProfile);
  if (includeHistory);
}

// ES3 ... #yawn ...
function findUser(userId, options) {
  with(options) {
    if (includeProfile);
    if (includeHistory);
  }
}