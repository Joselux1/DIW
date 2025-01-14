






document.addEventListener("DOMContentLoaded", (event) => {

const cambiarTema = document.getElementById("cambiarColor");
const body = document.getElementById("default");


cambiarTema.addEventListener("click", function () {
  
    if (body.classList.contains("modo-Claro")) {
      body.classList.remove("modo-Claro");
      body.classList.add("modo-Oscuro");
      footer.classList.add("footer-claro");

    } else {
      body.classList.remove("modo-Oscuro");
      body.classList.add("modo-Claro");
      
    }
  });








});
