var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      obj[i] = stringifyJSON(obj[i]);
    }
    return '[' + obj + ']';
  }
  if (typeof obj === 'object') {
    var result = '';
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    result = result = result.substring(0, result.length - 1);
    return '{' + result + '}';
  }
};