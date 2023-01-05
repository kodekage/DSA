class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        const currentTail = this.tail

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        
        this.length--;

        return currentTail;
    }

    shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;

        if (this.length === 1) { 
            this.head, this.tail = null;
        }

        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;

        this.length--;
        return oldHead;
    }
}

const list = new DoublyLinkedList();

list.push("Prosper")
list.push("Opara")
list.push("World")

list.shift();
console.log(list);