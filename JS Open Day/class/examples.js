// https://esdiscuss.org/topic/language-design#content-8


// When I first started by project, my code looked like this:
function Class() {
    Object.defineProperty(this, "prop", {
        get : function() {
        }
    })
}
Class.prototype.MethodA = function() {
}
Class.prototype.MethodB = function() {
}

// You have no idea how much it meant to me when I implemented classes and started seething this instead:
class Class {
    MethodA() {
    }
    MethodB() {
    }
    get prop() {
    }
}


// but it could have looked like the following since about ever
var MyClass = Class({
  methodA: function () {},
  methodB: function () {},
  get prop() {}
});



// Believe it or not, I implemented super() late. Oh man. When I started seeing suff like:
Bleh.prototype.bleh.call(this)
// Replaced with:
super.bleh();


// but it could have been like this since about ever
var Bleher = Class({
  extends: Bleh,
  bleh: function () {
    return this.super();
  }
});