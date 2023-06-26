const persona = {
  name: 'coco',
  age: 33,
  twich: 'www.twich'
}

Object.keys(persona) // ['name', 'age', 'twich']

// -----------------------------------//

const map = new Map()
map.set('name', 'miguel')
map.set('age',33)
map.delete('name') // facilidad para crear y borrar
console.log(map.size) // 