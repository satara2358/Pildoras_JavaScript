const result = {
  new: [],
  profiles:{
    user: []
  }
}

const mappedResults = Object.keys(result).map(key => {
  const value = result[key]
  console.log(key, '->', value);
})
Object.values(result)
// la mejor forma ===>
Object.entries(result).map(entry => {
  const [key, value] = entry
  console.log({key, value});
})
