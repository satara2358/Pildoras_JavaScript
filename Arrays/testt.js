
function sortAbsoluteNumbers(numbers) {

  numbers.sort((a,b) => {
    let va = Math.abs(a)
    let vb = Math.abs(b)

    if(a<b){
      return -1
    }else if(a>b){
      return 1
    }else{
      return 0
    }
  })

  return numbers
}

sortAbsoluteNumbers([-1, 2, 3, -5, -4, 6, 7, 8, -9])
function sortAbsoluteNumbers(numbers) {
  numbers.sort((a, b) => {
    let va = Math.abs(a);
    let vb = Math.abs(b);

    if (va < vb) {
      return -1;
    } else if (va > vb) {
      return 1;
    } else {
      return 0;
    }
  });

  return numbers;
}

sortAbsoluteNumbers([-1, 2, 3, -5, -4, 6, 7, 8, -9]);