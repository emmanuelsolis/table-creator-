const entrada = `Brocoli
Coliflor
Col de Bruselas
Tomates
Tomatillos
Pimientos
Sandia
Melón
Cebollas
Ajos
Calabazas
Calabasita
Ejotes
Esparragos
Maiz Dulce`;

const palabras = entrada.split('\n');
const palabrasConComillas = palabras.map(palabra => `"${palabra}"`);
const resultado = palabrasConComillas.join(", ");

console.log(resultado);
