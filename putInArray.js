const entrada = `
Orégano
Romero
Laurel
Verdolaga
Espinacas
Acelgas
Lechugas
`;

const palabras = entrada.split('\n');
const palabrasConComillas = palabras.map(palabra => `"${palabra}"`);
const resultado = palabrasConComillas.join(", ");

console.log(resultado);
