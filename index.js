/**Pseudocode 
 * 
 * Make a calcultor website using common calculator structures seen
 * 
 * Input Buttons with symbols, number, etc
 * Output result in square div at top
 * Clear/ AC function
 * 
 * Areas of additional improvements
 */


let number1 = 0;
let number2 = 0;
let Output = 0;

function add (Operand1, Operand2){
    return Output = Operand1 + Operand2;
}

function subtract (Operand1, Operand2){
    return Output = Operand1 - Operand2;
}

function multiply (Operand1, Operand2){
    return Output = Operand1 * Operand2;
}

function power (Operand1, Operand2){
    return Output = Math.pow(Operand1, Operand2);
}

function divide (Operand1, Operand2){
    return Output = Operand1 / Operand2;
}


function operate(operator,number1, number2){

    switch(operator){
        case 'add':
            Output = add(number1, number2);
            break;

        case 'subtract':
            Output = subtract(number1, number2);
            break;

        case 'multiply':
            Output = multiply(number1, number2);
            break;

        case 'power':
            Output = power(number1, number2);
            break;

        case 'divide':
            Output = divide(number1, number2);
            break;

        default:
            Output = "Invalid Operator";

    }

    return Output;
   
}


console.log(operate('add',10,5));
console.log(operate('subtract',10,5));
console.log(operate('multiply',10,5));
console.log(operate('power',10,5));
console.log(operate('divide',10,5));


