const gamesystem = {
  name: 'PS5',
  price: 550,
  specifications: undefined,
}

console.log('specifications' in gamesystem) // -> true

gamesystem.specifications.ram
// ❌ Uncaught TypeError: Cannot read property 'ram' of undefined

// El operador in puede ser interesante para comprobar si una propiedad existe en un objeto,
// pero no nos sirve para comprobar si el valor de esa propiedad es undefined y habría que hacer 
// comprobaciones extra para evitar el error.

if (
  'specifications' in gamesystem &&
  gamesystem.specifications !== undefined &&
  gamesystem.specifications !== null) {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}

// operador de Encadenamiento Opcional, ?.
// permite leer el valor de una propiedad ubicada profundamente dentro de una cadena de 
// objetos conectados, sin tener que validar expresamente que cada referencia en la cadena 
// es válida.

console.log(gamesystem.specifications?.cpu)
// -> undefined
console.log(gamesystem.specs?.cpu)
// -> AMD Ryzen Zen 2
// no existe, el operador ?. devuelve undefined y no se produce ningún error.
// Si la propiedad existe, el operador ?. devuelve el valor de la propiedad.
 const user = {
  name: 'Peter',
  setings: {
    theme: 'dark',
    Notificationes: {
      email: true,
      push: false,
      marketing: undefined
    }
  }
 }

 // forma de acceder a las propiedades
 let mail = undefined
 if (user && user.setings &&
  user.setings.Notificationes &&
  user.setings.Notificationes.email){
    email = user.setings.Notificationes.email
  }
  console.log(email) // true

  // con Optinal Operator 

  const emaill = user?.setings?.Notificationes?.email
  console.log(emaill)  // true 

  // ------------reto ?. encadenamioento opcional -----------//

  function searchInOcean(ocean, section, item) {
    if (ocean?.[section]) {
      return ocean[section]?.[item] !== undefined ? true : false;
    }
    return false;
  }
  
  console.log(searchInOcean({ sand: { animal: "pulpo" } }, "sand", "animal"));