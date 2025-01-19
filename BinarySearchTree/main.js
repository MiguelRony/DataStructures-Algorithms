import { Tree, prettyPrint } from "./Tree.js";

let BST = new Tree( [1, 7, 4, 23, 8, 16, 4, 3, 5, 7, 67, 6345, 324]);
prettyPrint(BST.root);
console.log(BST.isBalanced());
// BST.insert(80);
// BST.insert(70);
// BST.insert(75);
// prettyPrint(BST.root);
// BST.deleteItem(67);
// prettyPrint(BST.root);
// BST.deleteItem(75);
// prettyPrint(BST.root);
// BST.deleteItem(8);
// prettyPrint(BST.root);
// console.log(BST.find(324));
// console.log(BST.find(2));
// BST.levelOder(printLinear);
// console.log();
// BST.inOrder(printLinear);
// console.log();
// BST.preOrder(printLinear);
// console.log();
// BST.postOrder(printLinear);
// console.log();
BST.insert(6346);
prettyPrint(BST.root);
console.log(BST.isBalanced());
BST.rebalance();
prettyPrint(BST.root);
// console.log(BST.height(BST.root));
// console.log(BST.depth(BST.root.right.right));



function printLinear (node){
    process.stdout.write(node.data + " ");
}