const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	constructor() {
		this.rootNode = null;
	}

	root() {
		return this.rootNode;
	}

	add(data) {
		this.rootNode = addNode(this.rootNode, data);

		function addNode(node, data) {
			if (node === null) {
				return new Node(data);
			}

			if (node.data > data) {
				node.left = addNode(node.left, data);
			} else if (node.data < data) {
				node.right = addNode(node.right, data);
			}
			return node;
		}
	}

	has(data) {
		return Boolean(this.find(data));
	}

	find(data) {
		let node = findNode(this.rootNode, data);

		function findNode(node, data) {
			if (!node) {
				return null;
			}
			if (node.data === data) {
				return node;
			}
			if (node.data > data) {
				return findNode(node.left, data);
			} else {
				return findNode(node.right, data);
			}
		}
		return node;
	}

	remove(data) {
		this.rootNode = removeNode(this.rootNode, data);

		function removeNode(node, data) {
			if (!node) {
				return null;
			}

			if (data > node.data) {
				node.right = removeNode(node.right, data);
				return node;
			} else if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null;
				}
				if (!node.right) {
					node = node.left;
					return node;
				}
				if (!node.left) {
					node = node.right;
					return node;
				}

				let maxLeft = node.left;
				while (maxLeft.right) {
					maxLeft = maxLeft.right;
				}
				node.data = maxLeft.data;
				node.left = removeNode(node.left, maxLeft.data);
				return node;
			}
		}
	}

	min() {
		let current = this.rootNode;
		while (current.left) {
			current = current.left;
		}
		return current.data;
	}

	max() {
		let current = this.rootNode;
		while (current.right) {
			current = current.right;
		}
		return current.data;
	}
}

module.exports = {
	BinarySearchTree,
};
