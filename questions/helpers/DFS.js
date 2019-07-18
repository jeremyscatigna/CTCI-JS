// In Depth First Search there are different ways to traverse the tree
// PreOrder traversal => Node -> Left -> Right
// InOrder => Left -> Node -> Right
// PostOrder => Left -> Right -> Node

// Let's implement a simple PreOrder DFS
function preOrderSearch(node) {
  if (node === null) {
    return;
  }

  console.log(node.data);

  preOrderSearch(node.left);
  preOrderSearch(node.right);
}

// Let's implement a simple InOrder DFS
function inOrderSearch(node) {
  if (node === null) {
    return;
  }

  inOrderSearch(node.left);
  console.log(node.data);
  inOrderSearch(node.right);
}

// Let's implement a simple PostOrder DFS
function postOrderSearch(node) {
  if (node === null) {
    return;
  }

  postOrderSearch(node.left);
  postOrderSearch(node.right);
  console.log(node.data);
}
