import { Compter } from "./cCompter.js"

const span = document.querySelectorAll("span")
const start = document.querySelector(".btn_start")
const stop = document.querySelector(".btn_stop")
const reset = document.querySelector(".btn_reset")

const monCompter = new Compter(100)

start.addEventListener("click",()=>monCompter.decompte(start,span))
stop.addEventListener("click",()=>monCompter.arretDecompte(start))
reset.addEventListener("click",()=>monCompter.initialiserDecompte(start,span))

