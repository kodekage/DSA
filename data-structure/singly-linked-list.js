class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // Adds a new node to the linked list
    push(val) {
        const node = new Node(val)

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

       
        this.length += 1;
        return this; // returns the instance of the linked list
    }

    // Removes a node from the end of the linked list
    pop() {
        if (this.length === 0 || !this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // Shift removes a node from the begining of the Linked list
    shift() {
        if (this.length === 0 || !this.head) return undefined
        
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        return currentHead;
    }

    // Adds a new node to the beginning of the linked list
    unshift(val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let result = this.head;

        for (let i = 0; i < index; i++) {
            result = result.next;
        }

        return result;
    }

    set(index, value) {
        let result = this.get(index)

        if (!result) throw new Error('Node not found')

        result.val = value;

        return result;
    }

    insert(index, value) {
        if (index < 0 || index < this.length) return false;
        if (index > this.length) return this.push(value);
        if(index === 0) return this.unshift(value)
    
        const node = new Node(value)

        const previousNode = this.get(index - 1);
        const previousNodeNext = previousNode.next;
        previousNode.next = node;

        node.next = previousNodeNext;
        this.length++
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        const previousNode = this.get(index - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;

        this.length--;
        return removed;
    }
}

const list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("!")

// console.log(list);

// list.pop()
// list.pop()
// list.pop()
// list.pop()
// list.pop()


// console.log(list.get(2));
console.log(list.set(3, "Prosper"));

// console.log(list.list());