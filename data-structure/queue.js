/*
    First In First Out

           +----------------------+
    null < |   |   |    |    |    |
           +----------------------+
    front                      back


    - Enqueue
    - Dequeue
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return !this.front;
    }

    enqueue(value) {
        let node = new Node();

        if (this.isEmpty()) {
            this.front = this.back = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
    }

    print() {
        //if()
    }
}
