var getElementsByClassName = function(className) {
  var result = [];
  var helper = function(node, className) {
    if (node.classList) {
      if (node.classList.contains(className)) {
        result.push(node);
      }
    }
    if (node.hasChildNodes()) {
      var children = node.childNodes;
      for (var i = 0; i < children.length; i++) {
        helper(children[i], className);
      }
    }
  };
  helper(document.body, className);
  return result;
};