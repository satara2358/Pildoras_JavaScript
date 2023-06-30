const numbers = [1,2,3,4,5,6,7,8,9,0]

const numFilter = numbers.filter(function (x) {
  return x % 2 === 0
})

console.log(numFilter)

///-----------cadenas de texto que tengan la letra a: ------- /// 
const palabras = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = palabras.filter(string => string.includes('a'))

console.log(stringsWithA) // ['hola', 'adiós', 'casa', 'gato']

//-------------------------------------------//