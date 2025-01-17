import { LinkedList } from "../LinkedList/LinkedList.js"

export class HashMap {
    constructor(){
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity);
        this._length = 0;

        //Insert a new linked list on each position of the array
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new LinkedList();
        }
    }

    // Provided by the course
    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        
        return hashCode;
    }

    // Key can only be strings
    set(key, value){
        let index = this.hash(key);
        index = index % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const list = this.buckets[index];
        
        // If it exists just update it
        for (let i = 0; i < list.size(); i++) {
            let nodeValue = list.at(i).getValue();
            if(nodeValue.key === key){
                nodeValue.value = value
                return;
            }
        }

        // If it does not exist add it to the list
        list.append({key, value});
        this._length++;
        if( this.capacity * this.loadFactor < this._length){
            this.rehash();
        }
    }

    rehash(){
        let entries = this.entries();
        this.capacity = this.capacity*2;
        this._length = 0;
        this.buckets = new Array(this.capacity);

        //Insert a new linked list on each position of the array
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new LinkedList();
        }

        entries.forEach(entry => {
            this.set(entry[0], entry[1]);
        });
    }

    get(key){
        let index = this.hash(key);
        index = index % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const list = this.buckets[index];
        
        // check if it exists
        for (let i = 0; i < list.size(); i++) {
            let nodeValue = list.at(i).getValue();
            if(nodeValue.key === key){
                return nodeValue.value;
            }
        }
        return null;
    }

    has(key){
        let index = this.hash(key);
        index = index % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const list = this.buckets[index];
        
        // check if it exists
        for (let i = 0; i < list.size(); i++) {
            let nodeValue = list.at(i).getValue();
            if(nodeValue.key === key){
                return true;
            }
        }
        return false;
    }

    remove(key){
        let index = this.hash(key);
        index = index % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const list = this.buckets[index];
        
        // check if it exists
        for (let i = 0; i < list.size(); i++) {
            let nodeValue = list.at(i).getValue();
            if(nodeValue.key === key){
                list.removeAt(i);
                return true;
            }
        }
        return false;
    }

    length(){
        return this._length;
    }

    clear(){
        //Insert a new linked list on each position of the array
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new LinkedList();
        }
        this._length = 0;
    }

    keys(){
        const entries = this.entries();
        let keys = []
        entries.forEach(entry => keys.push(entry[0]));
        return keys;
    }

    values(){
        const entries = this.entries();
        let values = []
        entries.forEach(entry => values.push(entry[1]));
        return values;
    }

    entries(){
        let entries = [];
        this.buckets.forEach(list => {
            if (list.head() !== null){
                for (let i = 0; i < list.size(); i++) {
                    let nodeValue = list.at(i).getValue();
                    entries.push([nodeValue.key, nodeValue.value]);
                }  
            }
        });
        return entries;
    }
}