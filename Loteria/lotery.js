const randomIntFromInterval = (min, max)=>{
  return Math.floor(Math.random() * (max - min +1) + min);
}

function lottery(){
  const res = [] 

  while(res.length < 6){ 
    const num = randomIntFromInterval(1, 45) // recuperar un numero entre 1 y 45 
    if(!res.includes(num)) res.push(num) // si # no esta en Array => agrega ese # al resultado
  }

  return res
}
lottery()