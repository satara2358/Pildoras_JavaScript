// Las propiedades y métodos de un objeto pueden ser de cualquier tipo de JavaScript, incluso 
// otros objetos o arrays.
const persona = {
  name: 'Dani',
  age: 30,
  isWorking: true,
  family: ['Miguel', 'Maria'], // array
  address: { // otro objeto
    street: 'Calle de la piruleta',
    number: 13,
    city: 'Barcelona'
  }
}
// Cuando una función es parte de un objeto se le llama método.
const person = {
  name: 'Dani',
  age: 30,
  isWorking: true,
  family: ['Miguel', 'Maria'],
  address: {
    street: 'Calle de la piruleta',
    number: 13,
    city: 'Barcelona'
  },
  walk: function () { // <- método
    console.log('Estoy caminando')
  }
}

/// ---------------- reto Midu-------///
//Tenemos una función que recibe dos parámetros. name y subs. Haz que la función devuelva 
//un objeto con la siguiente información:
// name con el valor del parámetro name
// subscribers con el valor del parámetro subs
// hash, con el valor de la longitud del string name multiplicado por el parámetro subs
// Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. 
// Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería 
// El canal de Dani tiene 100 suscriptores.
//¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola.

function createObject(name, subs) {
  let hash = name.length * subs
  console.log(hash)
  return{
    name: name,
    subscribers: subs,
    hash: hash,
    getStatus: function(){
      return `El canal de ${this.name} tiene ${this.subscribers} suscriptores`
    }
  }
}
createObject("Miguel", 100)

