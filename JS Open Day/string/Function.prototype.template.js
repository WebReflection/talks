Function.prototype.template = function () {
  return ''.template.apply(
    /\/\*([^\x00]*?)\*\//.test(this) && RegExp.$1,
    arguments
  ).replace(/^\s+|\s+$/g, '');
};