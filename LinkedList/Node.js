

export class Node{
    constructor(){
        this._value = null;
        this._nextNode = null;
    }

    setValue(value){
        this._value = value;
    }

    getValue(){
        return this._value;
    }

    setNextNode(node){
        this._nextNode = node;
    }

    getNextNode(){
        return this._nextNode
    }
}