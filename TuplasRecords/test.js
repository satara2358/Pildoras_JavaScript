// tupla es un array inmutable
const a = #{ a: 'b', c: #{a:1} }
const b = #{ a: 'b', c: #{a:1} }

console.log(a===b)
// # record salida is true