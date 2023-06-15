function multiply (um1, nu2 ){
  if(typeof nu2 === undefined){
    return() => um1 * um1
  }
  return um1 * nu2
}

/// otra forma de hacerlo simple

const multiply = (num1, num2) => 
  typeof num2 === 'undefined'
    ? num => num1 * num
    : num1 * num2

    // como usar 
const double = multiply(2)
// => 
double(5)
// resultado 10 => el 2 de multiply refiere a cunatas veces se multiplica  num1