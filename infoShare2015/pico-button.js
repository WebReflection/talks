function onInit() {
  var light = false;
  setWatch(
    function () {
      LED2.write(light = !light);
    },
    BTN1,
    {
      repeat: true,
      debounce: 50,
      edge: 'rising'
    }
  );
}