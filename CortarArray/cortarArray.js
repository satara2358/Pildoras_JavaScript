const numbers = [0,1,2,3,4,5,6,87,8,9,10]
console.log(numbers.length)

/// cortes del array
//............posicion inicial y final No muta el array original
numbers.slice(2,6)
numbers
//............ quita el elemento del array
numbers.splice(9)
numbers
//............ devuelve un arry de 3 elementos
numbers.length = 3
numbers