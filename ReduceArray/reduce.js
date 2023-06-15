// callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de 
// la función externa para completar algún tipo de rutina o acción.

// [2,12,3,4,5,6,7,87,89].reduce(()=>{

// })
/// reduce inapropiado 
[2,12,3,4,5,6,7,87,89].reduce((valorAnterio, valorAcom, inedex, array)=>{
  if(valorAnterio < valorAcom){
    return valorAcom
  }
  return valorAnterio
}, [])
// Todo lo anterior se remplza y mejora por
Math.max(...[2,12,3,4,5,6,7,87,89]) 

/// reduce inapropiado ====>
[2,12,3,4,5,6,7,87,89].reduce((prev, actua)=>{
  if(actua % 2 === 0){
    return[...prev, actua * 2]
  }
  return prev
}, []);
// Todo lo anterior se remplza y mejora por
[2,12,3,4,5,6,7,87,89].filter(n => n % 2=== 0).map(n => n *2 )


