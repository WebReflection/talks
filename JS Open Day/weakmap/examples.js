var a = document.body.appendChild(
  document.createElement('a')
);
a.textContent = 'click me';
a.href = '#mocked-href';

var b = document.body.appendChild(
  document.createElement('span')
);
b.textContent = '0';



// ES6

var wm = new WeakMap;

a.addEventListener('click', setDataObject);

function setDataObject(e) {
  var el = e.currentTarget;
  e.preventDefault();
  if (!wm.has(el)) {
    wm.set(el, {counter: 0});
  }
  b.textContent = ++wm.get(el).counter;
}





// ES3

a.addEventListener('click', {
  handleEvent: function (e) {
    e.preventDefault();
    b.textContent = ++this.counter;
  },
  counter: 0
});





// see https://github.com/WebReflection/dom-handler#dom-handler
//*
Handler.add('body', {
  click: function (e) {
    console.log(e.type);
    this.releaseEvent(e);
  }
});
//*/