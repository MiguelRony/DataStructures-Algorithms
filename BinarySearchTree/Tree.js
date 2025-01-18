import { Node } from "./Node.js"
import { mergeSort } from "../../RecursionPractice/merge-sort.js"

export class Tree {
    constructor(array){
        let sorteArray = mergeSort(array);
        sorteArray = removeDuplicates(sorteArray);
        this.root = this.buildTree(sorteArray);
    }

    buildTree(array){
        return sortedArrayToBSTRecur(array, 0, array.length - 1);
    }

    insert(value){
        let node = this.root;
        let newNode = new Node(value);
        if( node !== null){
            if(node.data === value) return;
            if(node.data > value){
                if(node.left === null){
                    node.left = newNode
                }else{
                    this.insertRec(newNode, node.left);
                }
            }else{
                if(node.right === null){
                    node.right = newNode;
                }else{
                    this.insertRec(newNode, node.right);
                }
            }
        } 
    }

    insertRec(newNode, node){
        if(node.data === newNode.data) return;
        if(node.data > newNode.data){
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertRec(newNode, node.left);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertRec(newNode, node.right);
            }
        }
    }

    deleteItem(value){
        this.root = this.deleteItemRec(value, this.root);
    }

    deleteItemRec(value, node){
        if ( value === node.data){
            if(node.left === null && node.right === null){
                node = null;
            }else if(node.right === null){
                node = node.left;
            }else if( node.left === null){
                node = node.right;
            }else{
                let auxNode = node.right;
                if (auxNode.left === null){
                    auxNode.left = node.left;
                    node = auxNode;
                }else{
                    while(auxNode.left.left !== null){
                        auxNode = auxNode.left;
                    }
                    auxNode.left.left = node.left
                    
                    if( auxNode.left.right !== null){
                        let auxRightNode = auxNode.left.right
                        auxNode.left.right = node.right;
                        node = auxNode.left;
                        auxNode.left = auxRightNode;
                        
                    }else{
                        auxNode.left.right = node.right;
                        node = auxNode.left
                        auxNode.left = null;
                    }
                }
            }
        }else if( value < node.data && node.left !== null){
            node.left = this.deleteItemRec(value, node.left);
        }else if( value > node.data && node.right !== null){
            node.right = this.deleteItemRec(value, node.right);
        }else{
            console.log('Value not found on the tree');
        }
        return node;
    }

    find(value){
        return this.findRec(value, this.root);
    }

    findRec(value, node){
        if(node === null) return null;
        if(node.data === value){
            return node;
        }else if(node.data > value){
            return this.findRec(value, node.left);
        }else{
            return this.findRec(value, node.right);
        }
    }

    levelOder(callback){
        if (callback === null) throw new Error("Callback function expected");
        
        let queue = []
        queue.push(this.root);
        while(queue.length > 0){
            let node = queue.shift();
            callback(node);
            if(node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }

    inOrder(callback){
        if (callback === null) throw new Error("Callback function expected");
        this.inOrderRec(callback, this.root)
    }

    inOrderRec(callback, node){
        if (node.left !== null) this.inOrderRec(callback, node.left);
        callback(node)
        if (node.right !== null) this.inOrderRec(callback, node.right);
    }

    preOrder(callback){
        if (callback === null) throw new Error("Callback function expected");
        this.preOrderRec(callback, this.root)
    }

    preOrderRec(callback, node){
        callback(node)
        if (node.left !== null) this.preOrderRec(callback, node.left);
        if (node.right !== null) this.preOrderRec(callback, node.right);
    }

    postOrder(callback){
        if (callback === null) throw new Error("Callback function expected");
        this.postOrderRec(callback, this.root);
    }

    postOrderRec(callback, node){
        if (node.left !== null) this.postOrderRec(callback, node.left);
        if (node.right !== null) this.postOrderRec(callback, node.right);
        callback(node)
    }

    height(node){
        let height = 0;
        let leftHeight = 0;
        if (node.left !== null) leftHeight = 1 + this.height(node.left);
        let rightHeight = 0;
        if (node.right !== null) rightHeight = 1 + this.height(node.right);
        if( leftHeight > rightHeight){
            height = leftHeight;
        }else{
            height = rightHeight;
        }
        return height;
    }

    depth(node){
        return this.depthRec(node, this.root);
    }

    depthRec(node, comparitionNode){
        let depth = 0;
        if(node === comparitionNode) return depth;
        if(node.data > comparitionNode.data){
            if(comparitionNode.right !== null){
                let res = this.depthRec(node, comparitionNode.right);
                if (res !== null) return 1 + res;
            }
            return null
        }else{
            if(comparitionNode.left !== null){
                let res = this.depthRec(node, comparitionNode.left);
                if (res !== null) return 1 + res;
            }
            return null
        }
    }

    isBalanced(){
        return this.isBalancedRec(this.root);
    }

    isBalancedRec(node){
        let balancedNode = true;
        let leftNodeHeight = 0
        let rightNodeHeght = 0
        if(node.left !== null) leftNodeHeight = this.height(leftNodeHeight)
    }

    rebalance(){

    }
}

function removeDuplicates(array){
    let copyArray = [...array];
    let removedDuplicatesArray = [];
    for (let i = 0; i < copyArray.length; i++) {
        removedDuplicatesArray.push(copyArray[i]);
        while(copyArray[i] === copyArray[i+1]){
            copyArray.splice(i + 1, 1);
        }
    }
    return removedDuplicatesArray;
}

function sortedArrayToBSTRecur(arr, start, end) {
    if (start > end) return null;

    // Find the middle element
    let mid = start + Math.floor((end - start) / 2);

    // Create root node
    let root = new Node(arr[mid]);

    // Create left subtree
    root.left = sortedArrayToBSTRecur(arr, start, mid - 1);

    // Create right subtree
    root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

    return root;
}

export const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };