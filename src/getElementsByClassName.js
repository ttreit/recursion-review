var getElementsByClassName = function(className) {
  var result = [];
  var getElement = function(node) {
    if (node.classList) {
      if (node.classList.contains(className)) {
        result.push(node);
      }
    }
    if (node.hasChildNodes()) {
      var children = node.childNodes;
      for (var i = 0; i < children.length; i++) {
        getElement(children[i], className);
      }
    }
  };
  getElement(document.body);
  return result;
};