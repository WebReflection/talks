var MorseCode = {
  // (C) Andrea Giammarchi - Mit Style
  signal: function (s, unitms) {
    var
      a = MorseCode.translate(s).split(''),
      i = 0,
      l = a.length
    ;
    if (!unitms) unitms = 300;
    return {
      _timer: 0,
      start: function start(onSignal) {
        var b = 1, next = unitms;
        switch (a[i]) {
          case '.': next *= 1; break;
          case '_': next *= 3; break;
          default:
            while (a[i + b] === ' ') b++;
            next *= b;
            i += b - 1;
            b = 0;
            break;
        }
        onSignal.call(this, b);
        // end of the word
        if (l <= ++i) {
          i = 0;
          // when next is called
          this._timer = setTimeout(
            function () {
              // switch it off
              onSignal.call(this, 0);
              // and after 7 units + 3 (alt) start again
              this._timer = setTimeout(start.bind(this, onSignal), unitms * 10);
            }.bind(this),
            next
          );
        } else {
          // https://github.com/espruino/Espruino/issues/532
          this._timer = setTimeout(start.bind(this, onSignal), next);
        }
        return this;
      },
      stop: function () {
        if (this._timer) {
          clearTimeout(this._timer);
          this._timer = 0;
        }
        return this;
      }
    };
  },
  translate: function (s) {
    s = s.toUpperCase();
    for (var l = s.length, i = 0, a = [], c; i < l; i++) {
      c = s.charAt(i);
      // space between words is 7 units
      if (c === ' ') {
        a.push('       ');
      } else if (MorseCode.hasOwnProperty(c)) {
        // space between letters is 3 units
        if (i && s.charAt(i - 1) !== ' ') {
          a.push('   ');
        }
        a.push(MorseCode[c].split('').join(' '));
      } else {
        throw new Error('unable to convert ' + c);
      }
    }
    return a.join('');
  },
  'A': '._',
  'B': '_...',
  'C': '_._.',
  'D': '_..',
  'E': '.',
  'F': '.._.',
  'G': '__.',
  'H': '....',
  'I': '..',
  'J': '.___',
  'K': '_._',
  'L': '._..',
  'M': '__',
  'N': '_.',
  'O': '___',
  'P': '.__.',
  'Q': '__._',
  'R': '._.',
  'S': '...',
  'T': '_',
  'U': '.._',
  'V': '..._',
  'W': '.__',
  'X': '_.._',
  'Y': '_.__',
  'Z': '__..',
  '1': '.____',
  '2': '..___',
  '3': '...__',
  '4': '...._',
  '5': '.....',
  '6': '_....',
  '7': '__...',
  '8': '___..',
  '9': '____.',
  '0': '_____'
};

var signal = null;

function switchIt(onOrOff) {
  LED2.write(onOrOff);
}

function watch() {
  if (signal === null) {
    signal = MorseCode.signal('SOS').start(switchIt);
  } else {
    signal.stop();
    signal = null;
    switchIt(0);
  }
}

function onInit() {
  clearWatch();
  setWatch(
    watch,
    BTN1,
    {
      repeat: true,
      debounce: 50,
      edge: 'rising'
    }
  );
}