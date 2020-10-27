const interface = require('readline-sync');
const calculator = require('./app/calculator');

const firsNumber = interface.question('Deme el primer numero: ');
const secondNumber = interface.question('Deme el segundo numero: ');

var a = parseInt(firsNumber);
var b = parseInt(secondNumber);

console.log(`add ${a} + ${b} = ${calculator.add(a,b)}`);
console.log(`Minus ${a} - ${b} = ${calculator.minus(a,b)}`);
console.log(`Multiply ${a} * ${b} = ${calculator.multiply(a,b)}`);
console.log(`Divide ${a} / ${b} = ${calculator.divide(a,b)}`);