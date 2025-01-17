

function Saludar(){

  const tiempo = new Date(); //para determinar la hora del dia que estamos getHours metodo del objeto date.
  const horas = tiempo.getHours();
  
  if(horas >= 6 && horas < 12){
    return "Buenos Días ";

  }else if(horas >= 12 && horas < 20){

   return  "Buenas Tardes";

  }else{

    return "Buenas Noches";

  }


}


function generarColorAleatorio() {
  let letras = "0123456789ABCDEF";// caracteres validos de un formato  hexadecimal
  let color = "#";//prefijo

  for (let i = 0; i < 6; i++){//recorremos el bucle hasta 6 que es el maximo para la conversion

      color += letras[Math.floor(Math.random() * 16)];//a la variable color que es el prefijo, le añadimos las letras ramdon y numeros para la conversion del color.

  }
  return color;
}

function ocultarBtn() {
  const btnScroll = document.getElementById("btnScroll");

  if(btnScroll){
    
      if(window.scrollY > 250) {//pasaria cuando baje mas de 250px

        btnScroll.style.display = "block"; // muestra cuando haya desplazamiento
      }else{
        btnScroll.style.display = "none"; // lo oculta cuando este arriba
      }
  }
}
function txtVoz(){
  const body = document.getElementById("default");
  const synth =window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(body.textContent);

  synth.speak(utterThis);
 


}



document.addEventListener("DOMContentLoaded", (event) => {

const cambiarTema = document.getElementById("cambiarColor");
const body = document.getElementById("default");
const aumentarTxt = document.getElementById("aumentarTxt");
const seccionColor= document.getElementById("seccion-Color");
const contenido = document.getElementById("contenido");
const btnContador= document.getElementById("btnContador");
const contador= document.getElementById("contador");
const cambioTxt =document.getElementById("cambioTxt");
const progresoBarra=document.getElementById("progresobarra");
const btnScroll = document.getElementById("btnScroll");
const btnVoz =document.getElementById("voz");

let temaGuardado = localStorage.getItem("temaGuardado"); 
if (temaGuardado) {

  body.classList.add(temaGuardado); // guardamos el tema

}



cambiarTema.addEventListener("click", function () {

  const verificar = body.classList.contains("modo-Claro");//verificamos que tiene la clase 


    if(verificar){

      body.classList.remove("modo-Claro");
      body.classList.add("modo-Oscuro");
      localStorage.setItem("temaGuardado","modo-Oscuro");//guardamos en el localstorage

    }else{

      body.classList.remove("modo-Oscuro");
      body.classList.add("modo-Claro");
      localStorage.setItem("temaGuardado","modo-Claro");
    
    }
   
  });

  aumentarTxt.addEventListener("click",function () {

     body.classList.toggle("aumento-Text")//Aumenta el texto o lo alterna para dismunirlo.

  });

  seccionColor.addEventListener("click", function () {
    
    contenido.style.backgroundColor =  generarColorAleatorio();//Le pasamos la funcion para que realize el cambio en el div.
    console.log("Entramos")
});

btnContador.addEventListener("click", function(){
  contador.value = parseInt(contador.value)+1 //parseInt para redondear los numero entero

});


cambioTxt.textContent = Saludar();//lo pasamos al DOM para mostrarlo

window.onscroll = function () {
  ocultarBtn();//le pasamos la funcion de ocultar el btn para cuando desplaze
  let scrollTop = document.documentElement.scrollTop;//devuelve la cantidad de px que se ha desplazado
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;//altura total desplazable
  let progress = (scrollTop / scrollHeight) * 100;//formula para el %
  progresoBarra.style.width = progress + "%";//le pasamos el id y ajustamos el ancho con porcentaje calculado
};

btnScroll.addEventListener("click", function(){

window.scrollTo(0,0)


});
btnVoz.addEventListener("click",function(){
txtVoz();


});

});
