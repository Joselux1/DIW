//hacemos las variables con los ID para interactuar con ellos.
const play = document.getElementById("play");
const muted = document.getElementById("muted");
const upVolume= document.getElementById("subir");
const lowVolume = document.getElementById("bajar");
const musicInteracion = document.getElementById('music');
let changeofText = document.getElementById('cambiodetexto');








let arrayCanciones = ["/video/Coldplay2.mp3","/video/Coldplay1.mp3","/video/Coldplay3.mp3"];
let arraychangeofText = ["soy_el_Text1","soy_el_Text2","soy_el_Text3"];



function changeofMusic(src){ 
//funcion para llamar  al src  (url para video o musica) donde tenemos Onload que es para la carga y play para que ejecute la musica al ser cambiada

            musicInteracion.src=src;
            musicInteracion.onload;
            musicInteracion.play;
}
function cambiodetext(){
    
    let textRamdon = Math.floor(Math.random() * arraychangeofText.length); //hacemos un ramdon para que nos de un texto alternativo
    console.log(arraychangeofText[textRamdon]);
     changeofText.textContent = arraychangeofText[textRamdon];   
       

}

setInterval(cambiodetext, 2000);




  window.addEventListener("keydown", (event) => {
    console.log(event);
    
    
    
    //hacemos un switch para interactuar con las teclas segun el caso.
        switch (event.key) {
         
         //subir Volumen
            case "ArrowUp":

            musicInteracion.volume += 0.1;
       
            break;
            case  "ArrowDown":  

            musicInteracion.volume -= 0.1;
           
            break;

            case  "ArrowRight":
            
           src = arrayCanciones[Math.floor(Math.random()* arrayCanciones.length)];//le pasamos el array y con el metodo math ramdon reproduce cualquier cancion
            changeofMusic(src);

            break;
        
            case "ArrowLeft":

            src = arrayCanciones[Math.floor(Math.random()* arrayCanciones.length)];
            changeofMusic(src);
 
            break;

            case  " ":
            musicInteracion.muted = !musicInteracion.muted;
            break;

        }
 });
