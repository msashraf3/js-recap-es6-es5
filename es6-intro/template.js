const first = 'jaan';
const last = 'pakhi';
const greet = 'potas potas';
const name = first + ' ' + last + ' ' + greet;

console.log(name);

const a = 10;
const b = 20;
const result = 'the sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);

const math = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(math);

const email = 'hi john \n' +
    'cena cena lage \n' +
    'tumi mara mari korba naki';
console.log(email);

const challenge = `John Cena
cena naki ochena
mair dimu prochur`;
console.log(challenge);


const numbers = [45, 48, 98, 78];
const student = {
    name: 'John Ochena',
    age: 5
};

const valueGetting = `The number is ${numbers[0]} which indicates ${student.name}. And their age and number is combined ${numbers[1] + student.age}`;
console.log(valueGetting);