/**
 * Permet de realiser un chronomètre
 */
export class Compter{
    #milliseconde = 0
    #seconde = 0
    #minute = 0
    #heure = 0
    #intervalTemps
    #temps

    /**
     * @constructor
     * @param {number} intervalTemps - Définir le temps d'intervalle
     */
    constructor(intervalTemps){
        this.#intervalTemps = intervalTemps
    }

    #enMarche = ([...span])=>{
        this.#milliseconde += 1;
        if(this.#milliseconde == 10){
            this.#milliseconde = 1;
            this.#seconde += 1
        }
        if(this.#seconde == 60){
            this.#seconde = 0;
            this.#minute += 1
        }
        if(this.#minute == 60){
            this.#minute = 0;
            this.#heure += 1
        }
        if(this.#heure == 24){
            this.#heure = 0
            this.#minute = 0;
            this.#milliseconde +=1        
        }
        span[0].innerHTML = this.#heure + "h"
        span[1].innerHTML = this.#minute + "min"
        span[2].innerHTML = this.#seconde + "s"
        span[3].innerHTML = this.#milliseconde + "ms"
    }
    /**
     * Methode permetant de demarrer le chronomètre
     * @param {HTMLElement} btnStart 
     * @param {HTMLElement[]} param1 
     */
    decompte(btnStart, [...span]){
        btnStart.disabled = true;
        this.#temps = setInterval(()=>this.#enMarche([...span])
                    ,this.#intervalTemps)
    }
    /**
     * Methode permetant d'arreter le chronomètre
     * @param {HTMLElement} btnStart 
     */
    arretDecompte(btnStart){
        btnStart.disabled = false;
        clearInterval(this.#temps)
    }
    /**
     * Methode permetant d'initialiser le chronomètre
     * @param {HTMLElement} btnStart 
     * @param {HTMLElement[]} param1 
     */
    initialiserDecompte(btnStart,[...span]){
        btnStart.disabled = false;
        clearInterval(this.#temps)
        this.#milliseconde = 0
        this.#seconde = 0
        this.#minute = 0
        this.#heure = 0
        span[0].innerHTML = this.#heure + "h"
        span[1].innerHTML = this.#minute + "min"
        span[2].innerHTML = this.#seconde + "s"
        span[3].innerHTML = this.#milliseconde + "ms"
    }
    
}