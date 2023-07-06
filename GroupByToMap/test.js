const groupBy = require('array.prototype.groupby')

groupBy.shim()

const group = [{name: 'coco'}, {name: 'sarita'}, {name: 'isabbella'}, {name: 'toby'}].groupBy(user => {
  if(user.name.includes('e')) return 'e'
  if(user.name.includes('a')) return 'a'
  return 'rest'
})

console.log(group)