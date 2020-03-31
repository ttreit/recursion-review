// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  // create result array
  var result = [];
  // create doc variable to simplify
  var doc = document.body;

  if (doc.classList.contains(className)) {
    result.push(doc);
    console.log('first result', result);
  }

  // start with document body node
  if (doc.hasChildNodes()) {
    var children = doc.childNodes;
    for (var i = 0; i < children.length; i++) {
      var classes = children[i].classList;
      if (classes !== undefined) {
        if (classes.contains(className)) {
          result.push(children[i]);
        }
      }
      // if (classes.contains(className)) {
      //   result.push(children[i])
      // }
      console.log('classes', classes);
    }
  }
    // if node has children
      // for each child, do they have children?
        // if so, call getElementsByClassName again (base case)
        // if no child, get classList for the node
          // push ele to result array
  console.log('result', result);
  return result;
};


// // parg is an object reference to a <p> element

// // First check that the element has child nodes
// if (parg.hasChildNodes()) {
//   let children = parg.childNodes;

//   for (let i = 0; i < children.length; i++) {
//     // do something with each child as children[i]
//     // NOTE: List is live! Adding or removing children will change the list's `length`
//   }
// }