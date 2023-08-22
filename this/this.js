function getname(){
  console.log(`Mi nombre es ${this.nick}`);

}
global.nick = "xXx";

getname();

// this obtiene el valor desde el lugar donde se ejecuta la funcion
let obj = {
  nick: "Otro nick",
  getname: getname
}

obj.getname();