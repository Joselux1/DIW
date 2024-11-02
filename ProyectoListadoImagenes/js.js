
  document.addEventListener("DOMContentLoaded", () => {

    let desplegable = document.getElementById("desplegable");
    
  
    let filas = document.getElementById("filas");
  
                        
       let contadorImg = 0;
  
       function updateImageList() {
           let numImg = parseInt(desplegable.value);
     
       
           for (let i = 1; i <= numImg; i++) {
            contadorImg++;
            
        
               let url = cacheBuster(`https://picsum.photos/200/300?random=${contadorImg}`);



               filas.innerHTML += 
                   `<tr>
                       <td><img class="img1" src="${url}" loading="lazy"  ${contadorImg}"></td>
                       <td>${contadorImg}</td>
                       <td>Descripción del elemento ${contadorImg}</td>
                   </tr>`;
           }
    }
  
    console.log("DOM fully loaded and parsed");
    desplegable.addEventListener("change", updateImageList);
  
  
    updateImageList();
  });
  
  
  function cacheBuster(url) {
    return `${url}&cb=${new Date().getTime()}`;
  }
  


