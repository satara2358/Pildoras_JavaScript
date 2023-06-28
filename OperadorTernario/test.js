let resilt ;

if(a+b< 4){
  result = 'Debajo'
}else{
  resilt = 'Encima'
}

///Ternario///

let result = (a+b<4)? 'Debajo': 'encima'

///-----------///

let message;

if(login == 'Empleado'){
  message = 'Hola'
}else if (login == 'Director'){
  message = 'ok'
}else if(login == ''){
  message = 'no conexion'
}else{
  message = ''
}

///Ternario///

let messagge = (login == 'empleado')? 'Hola':
  (login == 'director')? 'ok':
  (login == '')? 'no conexion':
  ''
