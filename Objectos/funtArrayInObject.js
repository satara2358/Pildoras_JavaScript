const vendedor = {
  nombre: 'pedro',
  apellido: 'coco',
  empresa: 'autodes',
  habilidadesBalndas: ['veloz', 'Bebedor'],
  veder: function(){
    return 'vendio'
  },
  nombreCompleto: function(){
    return 'se llama '+this.nombre + ' apellido '+this.apellido
  }
}

console.log(vendedor.nombre);
console.log(vendedor.empresa);
console.log(vendedor.veder());
console.log(vendedor.nombreCompleto());