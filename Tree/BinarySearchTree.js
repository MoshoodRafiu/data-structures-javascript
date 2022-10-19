class Node
{
    constructor (value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree
{
    constructor() {
        this.root = null;
    }

    add(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            this.addNode(this.root, node);
        }
        return this;
    }

    addNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.addNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.addNode(node.right, newNode);
            }
        }
    }

    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, value) {
        if (!node) {
            return null;
        } else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            if (!node.right && !node.left) {
                node = null;
            } else if (!node.left) {
                node = node.right;
            } else if (!node.right) {
                node = node.left;
            } else {
                let minNode = this.minNode(node.right);
                node.value = minNode.value;
                node.right = this.removeNode(node.right, minNode.value);
            }
            return node;
        }
    }

    minNode(node) {
        if (!node.left) {
            return node;
        }
        return this.minNode(node.left)
    }

    inOrder() {
        let result = this.inOrderTraverse(this.root);
    }

    inOrderTraverse(node) {
        if (node) {
            this.inOrderTraverse(node.left);
            console.log(node.value);
            this.inOrderTraverse(node.right);
        }
    }

    preOrder() {
        this.preOrderTraverse(this.root);
    }

    preOrderTraverse(node) {
        if (node) {
            console.log(node.value);
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);
        }
    }

    postOrder() {
        this.postOrderTraverse(this.root);
    }

    postOrderTraverse(node) {
        if (node) {
            this.postOrderTraverse(node.left);
            this.postOrderTraverse(node.right);
            console.log(node.value);
        }
    }

    search(value) {
        return this.searchNode(this.root, value)
    }

    searchNode(node, value) {
        if (node === null) {
            return false;
        } else if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }
}

let bst = new BinarySearchTree;

bst.add(10);
bst.add(6);
bst.add(14);
bst.add(9);
bst.add(5);
bst.add(8);

bst.remove(8);

console.log(bst.search(11));

console.log('Pre Order traversal');
bst.preOrder();
console.log('In Order traversal');
bst.inOrder();
console.log('Post Order traversal');
bst.postOrder();

console.log(bst);