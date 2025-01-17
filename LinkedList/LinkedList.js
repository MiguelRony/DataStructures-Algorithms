import { Node } from "./Node.js";

const createNode = (value) =>{
    const node = new Node();
    node.setValue(value);
    return node;
}

export class LinkedList {
    constructor(){
        this._head = null;
        this._tail = null;
        this._size = 0
    }

    append(value){
        const node = createNode(value);
        if (this._head === null){
            this._head = node
            this._tail = node
        }else{
            this._tail.setNextNode(node);
            this._tail = node;
        }
        this._size++;
    }

    prepend(value){
        const node = createNode(value);
        if (this._head === null){
            this._head = node
            this._tail = node
        }else{
            node.setNextNode(this._head);
            this._head = node;
            
        }
        this._size++;
    }

    size(){
        return this._size;
    }

    head(){
        return this._head;
    }

    tail(){
        return this._tail;
    }

    at(index){
        if (index < 0) return null;
        let auxNode = this._head;
        for (let i = 0; i < index; i++) {
            auxNode = auxNode.getNextNode();
            if(auxNode === null) return auxNode;
        }
        return auxNode;
    }

    pop(){
        if(this._head === this._tail){
            const node = this._headl
            this._head = null;
            this._tail = null;
            return node;
        }
        const nodeBeforeTail = this.at(this._size - 2);
        let node = nodeBeforeTail.getNextNode();
        nodeBeforeTail.setNextNode(null);
        this._tail = nodeBeforeTail;
        return node;
    }

    contains(value){
        let index = this.find(value);
        if(index === null){
            return false;
        }
        return true;
    }

    find(value){
        let auxNode = this._head;
        let index = 0;
        while(auxNode !== null){
            if(auxNode.getValue() === value){
                return index;
            }
            auxNode = auxNode.getNextNode();
            index++;
        }
        return null;
    }

    toString(){
        let auxNode = this._head
        let listToString = ""
        while(auxNode !== null){
            listToString += "( " + auxNode.getValue() + " ) => ";
            auxNode = auxNode.getNextNode();
        }
        listToString += "null";
        return listToString;
    }

    insertAt(value, index){
        const node = createNode(value);
        const prevNode = this.at(index - 1);
        this._size++;
        if(index === 0){                    //Modify head
            node.setNextNode(this._head);
            this._head = node;
        }else if(index === this._size){   //Modify tail
            this._tail.setNextNode(node);
            this._tail = node;
        }else if( prevNode !== null){
            node.setNextNode(prevNode.getNextNode());
            prevNode.setNextNode(node);
        }else{
            console.log("node couldn't be inserted");
            this._size--;
        }
    }

    removeAt(index){
        const prevNode = this.at(index-1);
        if(index === 0){ //Modify head
            if( this._size === 1){
                this._head = null;
                this._tail = null;
                this._size--;
            }else{
                this._head = this._head.getNextNode();
                this._size--;
            }                 
        }else if(index === this._size - 1){   //Modify tail
            this._tail = prevNode
            prevNode.setNextNode(null);
            this._size--;
        }else if (prevNode !== null && prevNode.getNextNode() !== null){
            prevNode.setNextNode(prevNode.getNextNode().getNextNode());
            this._size--;
        }
    }

}