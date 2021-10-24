class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.frontOfQueue = null;
        this.backOfQueue = null;
        this.length = 0;
    }
    enqueue(data){
        const newNode = new Node(data);
        if(this.length === 0){
            this.frontOfQueue = this.backOfQueue = newNode;
        }else {
            const lastNode = this.backOfQueue;
            newNode.next = lastNode;
            this.backOfQueue = newNode;
        }
        this.length++;
    }
    dequeue(){
        const currentLastItem = this.backOfQueue;
        if(this.backOfQueue === this.frontOfQueue){
            this.frontOfQueue = this.backOfQueue = null;
        }else {
            this.backOfQueue = currentLastItem.next;
        }
        this.length--;
        return currentLastItem;   
    }
}

