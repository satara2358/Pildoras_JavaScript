// en este array de promesas si una de elllas falla => se obtiene un error de ejecucion 
// Promise.all([
//   Promise.resolve(13),
//   Promise.reject(new Error('error')),
//   new Promise(resolve => setTimeout(() => resolve(26), 100))
// ])
// .then(values => {
//   console.log(values)
// })

// con allSettled si una de ella falla => las demas si se ejecutan mostrando resultados 
Promise.allSettled([
  Promise.resolve(13), // promesa 1
  Promise.reject(new Error('error')), // promesa 2
  new Promise(resolve => setTimeout(() => resolve(26), 5000)) // promesa a los 5 segundos 
])
.then(values => {
  [
    {value: primervalordepromesa},
    {value: segundovalordepromesa},
    {value: tercervalordepromesa}
  ] = values
  console.log({ /// estraccion de valores delas Promises
    primervalordepromesa,
    segundovalordepromesa,
    tercervalordepromesa
  })
})