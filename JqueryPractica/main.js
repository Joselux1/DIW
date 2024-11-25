



$(document).ready(function() { //ejecuta la funcion para que se carge el DOM
    const arrayTabla = [];

    let guardarDatos =$('#guardarDatos');
    let cuerpo = $('#cuerpoTabla').get(0);//metodo .get(0) devuelve un elemento DOM devolveria el tbody le asignamos el 0 como primer elemento .

    
guardarDatos.click(function(){
  
    let añadir = $('#añadirTarea').val();// añadimos el valor con jquery .val();

    if(añadir){
    arrayTabla.push(añadir);//añadimos tarea ala tabla
    crearTabla();//actualizamos tabla
    }else{
        alert("Por favor, ingresa una tarea.");
      }
    

});




function btnEliminar(id){

  if(btnEliminar){
  arrayTabla.splice(id,1);
  crearTabla();

  }else{

  alert("No se ha podido Eliminar Papá") 

}
}


function crearTabla() {
 
    cuerpo.innerHTML = ""; 
  
    for (let i = 0; i < arrayTabla.length; i++) {
  
      cuerpo.innerHTML += `<tr>
                     
                        <td>${arrayTabla[i]}</td>
                          <td>
                          <button class="btn btn-success btn-sm py-2" id="completar">Completar</button>
                          <button class="btn btn-warning btn-sm text-white py-2">Editar</button>
                          <button class="btn btn-danger btn-sm py-2 data-id="${i}"" >Eliminar</button>
                        </td>
                    </tr>`;
    }
  }

  console.log("DOM CARGADO PAPÁ")

  });


