let frutas = ['a', 'b', 'c', 'd']

for(let i = 0 ; i <=frutas.length; i++){
  console.log(frutas[i])
}

// ------------------------ //

let iter = 0

while ( iter < frutas.length){
  console.log(frutas[i])
  i++
}

// -------------------  //

for (let op of frutas){
  console.log(op)
}

frutas.forEach( function (el, index){
  console.log(index, el);
})

// arrow funtion 
frutas.forEach( elem  => {
  console.log(elem)
})

// si el número es par y, si es así, añadirlo a la suma total

alert(2 + 2 + '1' ); // "41" y no "221" 
alert('1' + 2 + 2); // "122", no es "14"
alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3
// Convierte los no números
alert( +true ); // 1
alert( +"" );   // 0
let apples = "2";
let oranges = "3";
// ambos valores convertidos a números antes del operador binario suma
alert( +apples + +oranges ); // 5

//----------curiosidades------//

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

////--------- Solucion____________////

"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

//La suma con una cadena "" + 1 convierte 1 a un string: "" + 1 = "1", y luego tenemos "1" + 0, la misma regla se aplica.
//La resta - (como la mayoría de las operaciones matemáticas) sólo funciona con números, convierte una cadena vacía "" a 0.
//La suma con una cadena concatena el número 5 a la cadena.
//La resta siempre convierte a números, por lo tanto hace de " -9 " un número -9 (ignorando los espacios que lo rodean).
//null se convierte en 0 después de la conversión numérica.
//undefined se convierte en NaN después de la conversión numérica.
//Los caracteres de espacio se recortan al inicio y al final de la cadena cuando una cadena se convierte en un número. Aquí toda la cadena consiste en caracteres de espacio, tales como \t, \n y un espacio “común” entre ellos. Por lo tanto, pasa lo mismo que a una cadena vacía, se convierte en 0.
//////--------------------------/////
let a = prompt("¿Primer número?", 1);
let b = prompt("¿Segundo número?", 2);

alert(+a + +b); // 3
//------------------------------//

function sumarPares(numeros) {
  let suma = 0
  let i = 0
  while(i <= numeros.length){
    let num =numeros[i]
    i++
    if(num % 2 ===0){
      suma += num
    }
  }
  return suma
}
sumarPares([3,2,4,4])

//----- string de más de 3 caracteres?////
const namess = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = namess.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false
//----///
// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const names = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true

// Crear una función que reciba un array de palabras y devuelva true si todas las palabras 
// terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".

function acabanEnA(words) {
  const fin = words.every(a => a.endsWith('a'))
  return fin
}
acabanEnA(['casa', 'asa', 'taza'])

///.---------------     

function sortAbsoluteNumbers(numbers) {
  numbers.sort((a, b) => {
    let va = Math.abs(a);
    let vb = Math.abs(b);

    if (va < vb) {
      return -1;
    } else if (va > vb) {
      return 1;
    } else {
      return 0;
    }
  });

  return numbers;
}

sortAbsoluteNumbers([-1, 2, 3, -5, -4, 6, 7, 8, -9]);

///---------------------/// 

let numerr = [-1, 2, 3, -5, -4, 6, 7, 8, -9]
let m = [] //Valor Absoluto
for (let i = 0; i<numerr.length; i++){
  let n = Math.abs(numerr[i])
  m.push(n)
  console.log(n)
}
const x = [...numerr]
const ordena = x.sort((a,b) => a-b) // ordena los # 
console.log(x+'original')
console.log(m+'valor A')
console.log(ordena)
