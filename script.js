/*======================================================
1. Musica 
======================================================*/


const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");


btn.addEventListener("click", () => {


    if(music.paused){

        music.play();

        btn.innerHTML="🔊";

    }else{

        music.pause();

        btn.innerHTML="🎵";

    }
});


/*======================================================
2. CUENTA REGRESIVA
======================================================*/

const fechaEvento = new Date("May 15, 2027 17:00:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador,1000);





/*======================================================
FORMULARIO CONFIRMACION
======================================================*/


const URL_SCRIPT = 
"https://script.google.com/macros/s/AKfycbw_65kN-G90iiJZoKFlf2oCr1_h8EIBHNYopB48QHFA3znY8smUH8xk_FexOcJHKbjO0w/exec";




const formulario =
document.getElementById(
"formConfirmacion"
);



formulario.addEventListener(
"submit",
async function(e){


e.preventDefault();



const datos={


nombre:
document.getElementById("nombre").value,


invitados:
document.getElementById("invitados").value,


asistencia:
document.getElementById("asistencia").value,


mensaje:
document.getElementById("mensaje").value


};



await fetch(URL_SCRIPT, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(datos)
});

alert("¡Gracias por confirmar tu asistencia! 💕");

formulario.reset();



});


/*======================================================
lUCIERNADAGAS
======================================================*/

const stars = document.querySelector('.stars');

for(let i=0;i<160;i++){
    const s = document.createElement('div');
    s.classList.add('star');

    s.style.left = Math.random()*100 + '%';
    s.style.animationDuration = (Math.random()*8 + 5) + 's';
    s.style.animationDelay = (Math.random()*5) + 's';
    s.style.width = (Math.random()*3 + 1) + 'px';
    s.style.height = s.style.width;

    stars.appendChild(s);
}