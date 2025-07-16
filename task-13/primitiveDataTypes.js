let string = "hello";
let num1 = 1;
let num2 = 3.14;
let boolean = true;
let undefined;
let Null = null;
let symbolValue = Symbol("id");
let bigInt = 12345678901234567890n;

console.log(`"${string}" is a  ${typeof(string)}`);
console.log(`"${num1}" is a ${typeof(num1)}`);
console.log(`"${num2}" is a ${typeof(num2)}`);
console.log(`"${boolean}" is a ${typeof(boolean)}`);
console.log(`"${undefined}" is a ${typeof(undefined)}`);
console.log(`"${Null}" is a ${typeof(Null)}`);
console.log(`"${symbolValue.toString()}" is a ${typeof(symbolValue)}`);
console.log(`"${bigInt}" is a ${typeof(bigInt)}`);
