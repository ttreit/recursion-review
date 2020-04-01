var stringifyJSON = function(obj) {
  //create a result set to empty string
  var result = '';
  //check obj for number, null, boolean, string
  if (typeof obj === 'number' || typeof obj === 'boolean') {
   result += obj;
  }
  if (obj === null) {
    result += obj;
  }
  if (typeof obj === 'string') {
    result += '"' + obj + '"';
  }
  //array
  if (Array.isArray(obj) && !obj.length) {
    result += '[]';
  }
  if (Array.isArray(obj) && obj.length > 0) {
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      stringifyJSON(obj[i]);
      result += ',';
    }
    result.substring(0, result.length -1);
    result += ']';
  }
    //use Array.isArray
    //create opening and closing brackets
    //for loop over array
      //call stringifyJson on Array[i] for each
  //object
    //typeof object equals object and (something else)
    //create opening and closing braces
    // for in loop 
      //get keys and values
      //call stringifyJson on values and keys
    //return result
    return result;
};
