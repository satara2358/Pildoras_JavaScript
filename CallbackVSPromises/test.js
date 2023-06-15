const opetarion = (numero1, num2, callback)=>{
  return callback(num2, numero1)
}
// callback funcion que se usa para porparametros llamados como parametros
opetarion(1,4, (a,b) => a + b)
opetarion(1,4, (a,b) => a * b)
opetarion(1,4, (a,b) => a - b)


// promisses y callback hacen lo mismo 317 441 6157

const doAsyncCallBack = (num1, nume2, callback) => {
  const result = num1 + nume2
  return setTimeout(() => {
    callback(result)
  }, 2500)
}

const doAsyncCallBackPromises = (num1 , nume2) => {
  const result = num1 + nume2
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(result)
    }, 3000)
  })
}

doAsyncCallBack(1,3, (result) => {
  console.log(result)
})

doAsyncCallBackPromises(1,3)
  .then(result  => console.log(result))

// -------------------------------- aderir elementos al final de una Tupla

const tuple = [1,2,3,4,5,6]
const aotrRupla = [...tuple, 7,8,9]

console.log(aotrRupla)
// salida (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

