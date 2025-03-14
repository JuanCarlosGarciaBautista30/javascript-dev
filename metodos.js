const numeros = [1,2,4,6,7];
const mayor = numeros.filter(numero => numero > 4 );
console.log(mayor);

const agregar = numeros.includes(4);
console.log(agregar);

const eliminar = numeros.pop()
console.log(eliminar);
console.log(numeros);