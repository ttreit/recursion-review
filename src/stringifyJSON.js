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
   result = result = result.substring(0, result.length -1);
   return '{' + result + '}';
 }
};

//if(obj.hasOwnProperty(key)) return false; return '{}'



// if (Array.isArray(obj) && obj.length > 0) {
//   var arrayResult = ''
//   for (var i = 0; i < obj.length; i++) {
//     arrayResult = stringifyJSON(obj[i]);
//     arrayResult += ',';
//   }
//   result.substring(0, result.length -1);
//   result += ']';
// }

    // result.substring(0, result.length -1);
    // result += ']';

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

      //array
  // if (Array.isArray(obj) && !obj.length) {
  //    return '[]';
  // }
  // if (Array.isArray(obj) && obj.length > 0) {
  //   for (var i = 0; i < obj.length; i++) {
  //     obj[i] = stringifyJSON(obj[i]);
  //   }
  //   return '[' + obj + ']';
  // }