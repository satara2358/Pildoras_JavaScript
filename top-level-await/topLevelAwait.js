// top level await =>  Puede usar la awaitpalabra clave por sí sola (fuera de una función asíncrona) 
// en el nivel superior de un módulo 

async function getBlog() { //<== y para ello se usa las funciones asincronas 
  const res = await fetch('http://caulquierecosa')
  // la palabra reservada await solo se puede usar en funciones asincronas y top level await
  // se usa pocas veces por incompatibilidad de navegadores
  // => La async functiondeclaración declara una función asíncrona donde la awaitpalabra clave está 
  // permitida dentro del cuerpo de la función. Las palabras clave asyncy awaitpermiten que el 
  // comportamiento asíncrono basado en promesas se escriba en un estilo más limpio, evitando la 
  // necesidad de configurar explícitamente cadenas de promesas.
}
console.log(getBlog())
//una solucion IIFE funcion q s ejecuta sola
;(async() => {
  const response = await
  await fetch('http://caulquierecosa').then(res => res.text())
  console.log(response)
})()
// El fetch() devolverá una  que será aceptada cuando reciba una respuesta y sólo será rechazada 
// si hay un fallo de red o si por alguna razón no se pudo completar la petición. El modo más habitual
// de manejar las promesas es utilizando .then(). Esto se suele reescribir de la siguiente forma, que 
// queda mucho más simple: