const entrada = `Áfidos
Trips
Lepidoptera
Mosca Blanca
Chicharrita
Chinche
Diabroticas
Piojos harinosos
Minadores de la Hoja
`;

const palabras = entrada.split('\n');
const palabrasConComillas = palabras.map(palabra => `"${palabra}"`);
const resultado = palabrasConComillas.join(", ");

console.log(resultado);
