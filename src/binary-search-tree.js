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

	has(/* data */) {
		throw new NotImplementedError("Not implemented");
		// remove line with error and write your code here
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

	remove(/* data */) {
		throw new NotImplementedError("Not implemented");
		// remove line with error and write your code here
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
