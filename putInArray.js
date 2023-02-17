const entrada = `
Lepidoptera 
Áfidos
Phytomyza
Minadores de la Hoja
Orugas
Trips
Mosca Blancas
Chicharrita
Chinche
Polilla del Tomate
Diabroticas
Piojos harinosos
`;

const palabras = entrada.split('\n');
const palabrasConComillas = palabras.map(palabra => `"${palabra}"`);
const resultado = palabrasConComillas.join(", ");

console.log(resultado);
