// Obtener el elemento contenedor donde se creará la tabla
const contenedor = document.getElementById("miTabla");

// Crear la tabla y agregarla al contenedor
const tabla = document.createElement("table");
contenedor.appendChild(tabla);

// Crear la fila de encabezado
const encabezado = tabla.createTHead();
const filaEncabezado = encabezado.insertRow();
const encabezadoColumna1 = filaEncabezado.insertCell();
const encabezadoColumna2 = filaEncabezado.insertCell();

// Agregar los títulos de las columnas
encabezadoColumna1.textContent = "Columna 1";
encabezadoColumna2.textContent = "Columna 2";

// Pedir al usuario que introduzca los valores para cada columna
const datosColumna1 = [5, 2, 8, 10, 1, 6, 7, 9, 3, 4];
const datosColumna2 = ["manzana", "banana", "naranja", "limón", "fresa", "melón", "piña", "uva", "sandía", "kiwi"];

const cantidadDatos = prompt("¿Cuántos datos quieres introducir?");
for (let i = 0; i < cantidadDatos; i++) {
  const datoColumna1 = prompt("Introduce el valor para la columna 1:");
  const datoColumna2 = prompt("Introduce el valor para la columna 2:");
  
  datosColumna1.push(datoColumna1);
  datosColumna2.push(datoColumna2);
}

// Crear filas de datos y agregarlas a la tabla
for (let i = 0; i < datosColumna1.length; i++) {
  const filaDatos = tabla.insertRow();
  const columna1 = filaDatos.insertCell();
  const columna2 = filaDatos.insertCell();
  
  // Agregar los datos a las columnas
  columna1.textContent = datosColumna1[i];
  columna2.textContent = datosColumna2[i];
}
