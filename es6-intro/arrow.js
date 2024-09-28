//function declaration

// function add(a, b) {
//     const result = a + b;
//     return result;
// }
function add(a, b) {
    return a + b;
}

//function expression or annonymous function
const add2 = function (a, b) {
    return a + b;
}

//arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;

const sum3 = add3(5, 93);
const sum4 = add4(5, 93, 1, 1);
const sum2 = add2(5, 93);
const sum = add(5, 90);
console.log(sum4);
console.log(sum2);

const multi = multiply(3, 12);
console.log(multi);