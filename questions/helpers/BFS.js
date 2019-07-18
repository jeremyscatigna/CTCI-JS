// BFS algorithm is a level order tree traversal
// which mean that we traverse the tree level by level
// we can do that using a queue

// Let's implement a BFS algorithm
function levelOrderTraversal(rootNode) {
  if (rootNode === null) {
    return;
  }

  let queue = [];
  queue.push(rootNode);

  while (queue.length > 0) {
    let currentNode = queue[0];

    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }

    queue.shift();
  }
}
