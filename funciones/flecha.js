let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('¡Hola!') :
  () => alert("¡Mayor Edad!");

welcome();

// La diferencia principal es que las llaves necesitan usar un return para devolver un valor (tal como lo hacen las funciones comunes).

let sum = (a, b) => {  // la llave abre una función multilínea
  let result = a + b;
  return result; // si usamos llaves, entonces necesitamos un "return" explícito
};

alert( sum(1, 2) ); // 3