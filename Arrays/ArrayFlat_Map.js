
[1,2,3,4,5,6,7,8,9]
  .filter(n => n % 2 !== 0) // filtro por impares
  .map(n => n * 2)

  [1,2,3,4,[5,6,7,8],9].flat()  // aplana los datos [1,2,3,4,5,6,7,8,9]
  // flat(# de aplanamientos) o poner Infinity  

  // otra forma
[1,2,3,4,5,6,7,8,9]
  .flatMap(n =>n % 2 === 0 ? [] : n * 2)
