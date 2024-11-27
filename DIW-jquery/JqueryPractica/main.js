let arrayTabla = []; // Array vacio para insertar datos .


function crearTabla() {

  let cuerpo = $('#cuerpoTabla')[0]; //aqui le pasamos el id con jquery del tbody para crear la tabla y la posicion 

 
 
  cuerpo.innerHTML = ""; //limpiamos la tabla antes de llamarla

  



  for(let i = 0; i < arrayTabla.length; i++) { //recorremos el array 

    cuerpo.innerHTML += `<tr> 
                  
                   <td id="tarea">${arrayTabla[i]}</td>
                        <td>
                        <button class="btn btn-success btn-sm py-2" id="btnCompletar" >Completar</button>
                        <button class="btn btn-warning btn-sm text-white py-2 m-1">Editar</button>
                        <button class="btn btn-danger btn-sm py-2 m-1 id="${i}" onclick = btnEliminar(${i}) >Eliminar</button>
                      </td>
                  </tr>`; //aqui creamos las filas de las tablas.
  }

  
$("#btnCompletar").click(function() { 

  console.log("Entramos")
          
  $("#tarea").toggleClass("tachado");


  });
 

}

function btnEliminar(id){

  if (confirm("Estas seguro que quieres eliminar esta tarea")){ //aqui hacemos la condicion que si pulsammos en el boton eliminar le pasa  el id de la fila  entonces entramos en el if .
  arrayTabla.splice(id,1);  
  crearTabla();

  }else{

  alert("No se ha podido Eliminar ") 

}
}







$(document).ready(function() { //ejecuta la funcion para que se carge el DOM
   

   let guardarDatos =$('#guardarDatos');
 
guardarDatos.click(function(){
  
    let añadir = $('#añadirTarea').val();// añadimos el valor con jquery .val();

    if(añadir){
    arrayTabla.push(añadir);//añadimos tarea ala tabla
    crearTabla();//actualizamos tabla
    }else{
        alert("Por favor, ingresa una tarea.");
      }
    

});




  console.log("DOM CARGADO PAPÁ")

  });


