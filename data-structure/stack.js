// Stack Imeplementation using a Singly Linked List
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const firstItem = this.first;

            this.first = newNode;
            this.first.next = firstItem;
        }

        return ++this.size;
    }

    pop() {
        if (this.size === 0) return null;

        const firstItem = this.first;

        if (this.first === this.last) {
            this.last = null;
        }


        this.first = this.first.next;
        this.size--

        return firstItem.val;
    }
}

const s = new Stack();

s.push("Hello")
s.push("World")
s.push("Man!")

console.log(s)

s.pop()
s.pop()
// s.pop()
console.log("\n\n\n")

console.log(s)

