// BTS Implementation
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;

            while (true) {
                if (value === current.value) break;

                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        let current = this.root, found = false;

        while (current && !found) {
            if (value < current.value) {
                current = this.left
            } else if (value > current.value) {
                current = this.right;
            } else {
                found = true;
            }
        }

        if (!found) return undefined;

        return current;
    }
}

const tree = new BST();
tree.insert("P")
tree.insert("R")
tree.insert("O")
tree.insert("S")
tree.insert("P")
tree.insert("E")
tree.insert("R")


console.log(tree)