//Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra
// "JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice 
// de la fila y el índice de la columna.

const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix)
console.log(position);
function findJavaScript(matrix) {
  let ma = []
  for (let i =0 ; i<matrix.length; i++){
    const j = matrix[i].indexOf('JavaScript')
    if(j !== -1){
      ma.push(i, j)
    }
  }
  if(ma.length === 0){
    return([-1,-1])
  }
  return ma
}

// Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array 
//de dos posiciones con el índice del libro con menos páginas y el índice del libro con más 
//páginas.

function minAndMaxWord(words) {
  let minPaginasIdx = 0;
  let maxPaginasIdx = 0;

  // Recorremos el array para encontrar los índices del libro con menos y más páginas.
  for (let i = 1; i < words.length; i++) {
    if (words[i] < words[minPaginasIdx]) {
      minPaginasIdx = i;
    }
    if (words[i] > words[maxPaginasIdx]) {
      maxPaginasIdx = i;
    }
  }

  return [minPaginasIdx, maxPaginasIdx];
}
