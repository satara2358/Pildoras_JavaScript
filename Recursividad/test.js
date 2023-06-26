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

function fibo (n) {

  if (n <= 1) return n;
  let t = fibo(n-1) + fibo(n-2);
  // (6 - 1) + (6 - 2) = (5 - 4) = 1
  // (6 - 1) + (6 - 2) = (5 - 4) = 1
  console.log(t)
  return t
}

fibo(6)