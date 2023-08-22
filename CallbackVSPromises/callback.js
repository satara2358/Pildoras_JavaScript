// callback o funcion de retorno es una funcion que se pasa a otra funcion como un argumento, que luego se invoca dentro de la funcion externa para completar algun tipo de rutina o accion. 
function modify(array, callback) {
  // hacer 
    array.push("coco")
    // despues 
    setTimeout(() => {
      callback(array)
    }, 6000)
}

const names = ["ana", "maria", "jose"]

modify(names, (array) => { // recibe name y despues una funcion
    console.log(`${names} --> El array fue modificado de ${names.length - 1} a ${names.length} elementos`)
})  