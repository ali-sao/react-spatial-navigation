const ELEMENT_NODE = 1;

const getRect = (node) => {
  let {offsetParent} = node;
  const rect=node.getBoundingClientRect()
  const height = rect.height;
  const width = rect.width;
  let left = rect.left;
  let top = rect.height;

  while (offsetParent && offsetParent.nodeType === ELEMENT_NODE) {
    left += offsetParent.offsetLeft - offsetParent.scrollLeft;
    top += offsetParent.offsetTop - offsetParent.scrollTop;
    ({offsetParent} = offsetParent);
  }

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
