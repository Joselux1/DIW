let arrayTabla = []; // Array vacio para insertar datos

let arrayCompletadas =[]//Array completdas

let arrayPenditentes = [];

function crearTabla() {
  let cuerpo = $('#cuerpoTabla')[0]; // Usamos el tbody con jquery.

  cuerpo.innerHTML = ""; // Limpiamos la tabla antes de generarla.

  for (let i = 0; i < arrayTabla.length; i++) {    // Recorremos el array.

    cuerpo.innerHTML += `<tr> 
                   <td id="tarea-${i}">${arrayTabla[i]}</td>
                   <td>
                        <button class="btn btn-success btn-sm py-2" onclick="btnCompletar(${i})">Completar</button>
                        <button class="btn btn-warning btn-sm text-white py-2 m-1" onclick="btnEditar(${i})">Editar</button>
                        <button class="btn btn-danger btn-sm py-2 m-1" id="${i}" onclick="btnEliminar(${i})">Eliminar</button>
                   </td>
                  </tr>`;
  }
}
function btnCompletadas() {
  let cuerpo = $('#cuerpoTabla')[0]; // Usamos el tbody con jquery.

  cuerpo.innerHTML = ""; // Limpiamos la tabla antes de generarla.

  for (let i = 0; i < arrayCompletadas.length; i++) {    // Recorremos el array.

    cuerpo.innerHTML += `<tr> 
                   <td id="tarea-${i}">${arrayCompletadas[i]}</td>
                   <td>
                        <button class="btn btn-success btn-sm py-2" onclick="btnCompletar(${i})">Completar</button>
                        <button class="btn btn-warning btn-sm text-white py-2 m-1" onclick="btnEditar(${i})">Editar</button>
                        <button class="btn btn-danger btn-sm py-2 m-1" id="${i}" onclick="btnEliminar(${i})">Eliminar</button>
                   </td>
                  </tr>`;
  }
}
function btnPendientes() {
  let cuerpo = $('#cuerpoTabla')[0]; // Usamos el tbody con jquery.

  cuerpo.innerHTML = ""; // Limpiamos la tabla antes de generarla.

  for (let i = 0; i < arrayyPendientes.length; i++) {    // Recorremos el array.

    cuerpo.innerHTML += `<tr> 
                   <td id="tarea-${i}">${arrayPenditentes[i]}</td>
                   <td>
                        <button class="btn btn-success btn-sm py-2" onclick="btnCompletar(${i})">Completar</button>
                        <button class="btn btn-warning btn-sm text-white py-2 m-1" onclick="btnEditar(${i})">Editar</button>
                        <button class="btn btn-danger btn-sm py-2 m-1" id="${i}" onclick="btnEliminar(${i})">Eliminar</button>
                   </td>
                  </tr>`;
  }
}


function btnCompletar(id) {
  $(`#tarea-${id}`).toggleClass("tachado");

  // Agregamos o eliminamos la tarea de arrayCompletadas
  if (!arrayCompletadas.includes(arrayTabla[id])) {
    arrayCompletadas.push(arrayTabla[id]); // Agrega la tarea si no está
  } else {
    arrayCompletadas = arrayCompletadas.filter((tarea) => tarea !== arrayTabla[id]); // Elimina si ya está
  }

  console.table(arrayCompletadas); // Mostramos el array actualizado en consola
}


function btnEliminar(id) {
  if (confirm("¿Estás seguro que quieres eliminar esta tarea?")) {

    arrayTabla.splice(id, 1); // Eliminamos el elemento del array.
    crearTabla(); // Actualizamos  la tabla.

  } else {
    alert("No se ha podido eliminar.");
  }
}

function btnEditar(id) {

  let nuevaTarea = prompt("Edita la tarea:", arrayTabla[id]); // Pedimos el nuevo valor.

  if (nuevaTarea !== null && nuevaTarea.trim() !== "") { //usamos el .trim para los espacios en blancos
    arrayTabla[id] = nuevaTarea; // Actualizamos el valor en el array.
    crearTabla(); // Volvemos a generar la tabla.
  } else {
    alert("No se realizaron cambios.");
  }
}


$(document).ready(function () {
  let guardarDatos = $('#guardarDatos');

  guardarDatos.click(function () {
    let añadir = $('#añadirTarea').val(); // Obtenemos el valor del input.

    if (añadir.trim()) { //trim para los espacios en blanco
      arrayTabla.push(añadir.trim()); // Añadimos tarea al array.
      crearTabla(); // Actualizamos la tabla.
    } else {
      alert(" ingresa una tarea valida");
    }
  });



  let completadas1 = $('#Completadas'); //le pasamos el id del html
  completadas1("click", btnCompletadas); // aqui cuando clickeamos en completadas nos saldra la lista completadas.


  let todas1= $('#Todas');
  todas1("click",crearTabla());

  let pendientes = $('#Pendientes');

  pendientes("click",btnPendientes());

  console.log("DOM CARGADO PAPÁ");
});
