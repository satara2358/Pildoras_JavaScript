//Self Executing Anonimous funtion exoression  significado de IIFE 
// Es una funcion q se invoca inmediatamente 

const sayhi = () => {
    console.log('hol')
}
sayhi();
// Lo anterior no se ejecuta automaticamente  || se usaba en Jquery
// lo sigiente si

(() => {
    console.log('hola IIFE')
})()



