import { HashMap } from "./HashMap.js";

const test = new HashMap()
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.entries());
console.log(test.capacity);
console.log(test.length());

test.set('moon', 'silver')
console.log(test.entries());
test.set('mon', 'not silver');
console.log(test.entries());
console.log(test.capacity);
console.log(test.length());
console.log(test.get('dog'));
console.log(test.has('cat'));
test.remove('elephant');
console.log(test.entries());
console.log(test.keys());
console.log(test.values());
test.clear();
console.log(test.entries());