const ELEMENT_NODE = 1;

const getRect = (node) => {
  const nodeRect=node.getBoundingClientRect()

  const height = nodeRect.height;
  const width = nodeRect.width;
  let left = nodeRect.left;
  let top = nodeRect.top;

  return {
    height,
    left,
    top,
    width
  };
};

const measureLayout = (node, callback) => {
  const relativeNode = node && node.parentNode;

  if (node && relativeNode) {
    const relativeRect = getRect(relativeNode);
    const {height, left, top, width} = getRect(node);
    const x = left - relativeRect.left;
    const y = top - relativeRect.top;

    callback(x, y, width, height, left, top);
  }
};

export default measureLayout;
