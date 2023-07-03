// for...in nos permite crear un bucle que itera sobre todas las propiedades enumerables 
// de un objeto, en un orden arbitrario.

const spiderman = {
  name: 'Spidey',
  universe: 42,
  powers: ['web', 'invisibility', 'spider-sense']
}

for (const property in spiderman) {
  console.log(`${property}: ${spiderman[property]}`);
}

// -> name: Spidey
// -> universe: 42
// -> powers: web,invisibility,spider-sense

// for...in con el de for...of que vimos en la sección de arrays. El primero itera sobre 
//las propiedades enumerables de un objeto, mientras que el segundo itera sobre los elementos 
//de un objeto iterable (como los elementos de un array, por ejemplo).

// -----------------Iterar con Object.keys()---------------/// 

const properties = Object.keys(spiderman)

console.log(properties.length) // 3

properties.forEach(property => {
  console.log(property)
})

// -> name
// -> universe
// -> powers

//  -------------- Object.values() ---------------///

const values = Object.values(spiderman)

values.forEach(value => {
  console.log(value)
})
// Como ves, la diferencia con Object.values() 
// es que este método retorna los valores y Object.keys() retorna las propiedades.
// -> Spidey
// -> 42
// -> [ 'web', 'invisibility', 'spider-sense' ]

// -------------- Object.entries()-------------------//

const entriess = Object.entries(spiderman)

entriess.forEach(entry => {
  console.log(entry)
})

// -> [ 'name', 'Spidey' ]
// -> [ 'universe', 42 ]
// -> [ 'powers', [ 'web', 'invisibility', 'spider-sense' ] ]

// Lo interesante es que este método nos da acceso tanto a las propiedades como a los valores. 
// Lo puedes ver más claro en el siguiente ejemplo:

const entriesss = Object.entries(spiderman)

entriesss.forEach(entry => {
  const property = entry[0]
  const value = entry[1]

  console.log(`${property}: ${value}`)
})

// name: Spidey
// universe: 42
// powers: web,invisibility,spider-sense

/// -------------reto------------------ ///

// Tienes una función que recibe un objeto como parámetro. La función debe retornar un array 
// con el nombre de las propiedades que su tipo sea boolean.

// Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar 
// ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.

function getKeysOfBooleanValues(obj) {
  const boleans = []

  for (const property in obj){
    if(typeof obj[property] === 'boolean'){ // evalua con typeOf a cada objeto en su propiedad si es Boleano 
      boleans.push(property) // envia eseo valores para mosatrarlos
    }
  }
  return boleans
}

getKeysOfBooleanValues({ a: true, b: true, c: false })