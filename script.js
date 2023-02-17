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

// Obtener los datos para las columnas
const datosColumna1 = ["Dato 1", "Dato 2", "Dato 3"];
const datosColumna2 = ["Valor 1", "Valor 2", "Valor 3"];

// Crear filas de datos y agregarlas a la tabla
for (let i = 0; i < datosColumna1.length; i++) {
  const filaDatos = tabla.insertRow();
  const columna1 = filaDatos.insertCell();
  const columna2 = filaDatos.insertCell();
  
  // Agregar los datos a las columnas
  columna1.textContent = datosColumna1[i];
  columna2.textContent = datosColumna2[i];
}
