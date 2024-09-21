/* *
*var is obsolete at this point of time
*let - when we need to reassign the value again
*const - it can't be reassign again
*/

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

let count = 0;
count = 10;
console.log(count);

//but we can actually push or change something in an array but can not reassign it
const array = [1, 69, 56, 88];
// array = [5, 55];
//we can push something on this array like this
array.push(6, 99);
//we can also modify the index value
array[2] = 59;

console.log(array);

//we can't also reassign an object but can change or add a value to it
const object = {
    name: 'moyna pakhi',
    age: 22
}
// object = {name: 'tuntuni'}
//but we can modify
object.name = 'gulguli';


console.log(object);