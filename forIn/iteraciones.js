// for...in nos permite crear un bucle que itera sobre todas las propiedades enumerables 
//de un objeto, en un orden arbitrario.

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

// Iterar con Object.keys()
const properties = Object.keys(spiderman)

console.log(properties.length) // 3

properties.forEach(property => {
  console.log(property)
})

// -> name
// -> universe
// -> powers

//  Object.values() ---------------///

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