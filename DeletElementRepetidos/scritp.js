const a = [1,2,3,4,3,2,1]
const b = [1,2,3,4,3,7,7,9]
const c = [5,6,8,0]

// solucion 
const hasDuplicates = arry => new Set(arry).size < arry.length 

console.log(hasDuplicates(a));

hasDuplicates(b)

hasDuplicates(c)


