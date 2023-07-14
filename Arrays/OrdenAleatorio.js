// recuperar un elemento del array
const numbers = [1,2,3,4,5,6,7,8]
const ramdomIndex = Math.floor(
  Math.random() * numbers.length
)
numbers[ramdomIndex]

// quitar elemento repetidos 
const num = [1,1,2,3,4,3,2,1,4,5,6,7,87,9]
// forma Array
Array.from(new Set(num))
// forma conjuntos
;[...new Set(num)]