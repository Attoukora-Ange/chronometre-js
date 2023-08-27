const span = document.querySelectorAll("span")
const start = document.querySelector(".btn_start")
const stop = document.querySelector(".btn_stop")
const reset = document.querySelector(".btn_reset")
let milliseconde = 0
let seconde = 0
let minute = 0
let heure = 0
let temps 

const enMarche = ()=>{
    milliseconde += 1;
    if(milliseconde == 10){
        milliseconde = 1;
        seconde += 1
    }
    if(seconde == 60){
        seconde = 0;
        minute += 1
    }
    if(minute == 60){
        minute = 0;
        heure += 1
    }
    if(heure == 24){
        heure = 0
        minute = 0;
        milliseconde +=1
        
    }

    span[0].innerHTML = heure + "h"
    span[1].innerHTML = minute + "min"
    span[2].innerHTML = seconde + "s"
    span[3].innerHTML = milliseconde + "ms"
}

const decompte = ()=>{
    start.disabled = true;
    temps = setInterval(enMarche,100)
}

const arretDecompte = ()=>{
    start.disabled = false;
    clearInterval(temps)
}
const initialiserDecompte = ()=>{
    start.disabled = false;
    clearInterval(temps)
    milliseconde = 0
    seconde = 0
    minute = 0
    heure = 0
    span[0].innerHTML = heure + "h"
    span[1].innerHTML = minute + "min"
    span[2].innerHTML = seconde + "s"
    span[3].innerHTML = milliseconde + "ms"
}

start.addEventListener("click",decompte)
stop.addEventListener("click",arretDecompte)
reset.addEventListener("click",initialiserDecompte)

