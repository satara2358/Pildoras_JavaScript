// una funcion se llama a si misma cuenta atras
function factorial (n){
  if (n===0 || n===1){
    return 1
  }
  else{
    return n * factorial(n-1)
  }
}

const result = factorial(5)
console.log(result)

// Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: suma(3) -> 1 + 2 + 3 = 6

function suma(n){
  if(n === 0){
    return 0
  }else{
    return n + suma(n-1)
  }
}
const res = suma(3)
console.log(res)

// fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)

// fibonacci 2
const fibonacci = n => {
  if (n < 2) return n
  return fibonacci(n - 2)+ fibonacci(n - 1)
}
fibonacci(10)

// sin recursividad 
function fb(num){
  const fibbb = [0,1]
  for (let i =2; i<=num; i++){
    fibbb[i] = fibbb[i-1]+fibbb[i-2]
  }
  return fibbb[num]
}
fb(10)