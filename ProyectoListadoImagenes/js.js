//carga del DOM
  document.addEventListener("DOMContentLoaded", () => {

    const desplegable = document.getElementById("desplegable");
    

    const filas = document.getElementById("filas");
  

    function ActualizarImg() {
     // Obtenemos el valor actual del desplegable 
      const numImg = parseInt(desplegable.value);
  
    // bucle desde 1 hasta el número de imágenes deseado.
      for (let i = 1; i <= numImg; i++) {
    // cacheBuster  Carga de img efectiva
        const url = cacheBuster(`https://picsum.photos/200/300?random=${i}`);
        //Manipulacion de las tablas con innerHTML
        filas.innerHTML += 
                          `<tr>
                            <td><img class="img1" src="${url}" loading="lazy"></td>
                            <td>${i}</td>
                            <td>Descripción del elemento ${i}</td>
                          </tr>`;
      }
    }
  /// Mensaje en consola indicando que el DOM se ha cargado completamente.
    console.log("DOM fully loaded and parsed");
    desplegable.addEventListener("change", ActualizarImg);

    ActualizarImg();
  });
  
  // generar una URL Unica al agregar un parametro de timestamp
  function cacheBuster(url) {
    return `${url}&cb=${new Date().getTime()}`;
  }
  









