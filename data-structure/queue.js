// Queue Imeplementation using a Singly Linked List
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) { 
        const newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++
        return this;
    }
    
    dequeue() {
        if (this.size === 0) return null;

        const firstItem = this.first;

        if (this.size === 1) {
            this.last = null
        }

        this.first = this.first.next;
        this.size--;

        return firstItem;
    }
}

const q = new Queue()

q.enqueue('first')
q.enqueue('last')
q.enqueue('world')

console.log(q)

q.dequeue()
q.dequeue()
// q.dequeue()

console.log("\n\n\n")

console.log(q)