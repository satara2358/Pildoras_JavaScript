const numbers = [1, 2, 3]
const doubleNumbers = numbers.map((number) => {
  return number * 2
})
console.log(doubleNumbers) // [2, 4, 6]

//O podríamos crear un array con la longitud de cada cadena de texto de un array de cadenas:

const strings = ['hola', 'javascript', 'midu', 'programación']
const stringsLength = strings.map((string) => string.length)
console.log(stringsLength) // [4, 10, 4, 12]

//Imagina que queremos crear un array con el doble de los números y sólo quedarnos con los que sean mayores que 5. Podríamos hacerlo así:

const numbers2= [1, 2, 3, 4, 5, 6, 7]

const numsGreaterThanFive = numbers2
  .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter(number => number > 5) // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]
