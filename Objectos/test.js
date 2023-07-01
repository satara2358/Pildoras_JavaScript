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

