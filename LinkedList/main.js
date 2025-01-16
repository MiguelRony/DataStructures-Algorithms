import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
list.prepend("dinosaur");
console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(4));
list.pop();
console.log(list.toString());
console.log(list.contains("cat"));
console.log(list.contains("fish"));
console.log(list.find("cat"));
list.insertAt("sparrow", 0);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());