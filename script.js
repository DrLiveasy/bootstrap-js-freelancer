/*PARTE JAVASCRIPT
A questo punto una volta terminato il vostro layout, include un vostro file javascript e fate in modo che quando l’utente fa click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente.
Il prezzo orario per una commissione varia in questo modo:
Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti.
Mostrare il risultato del calcolo del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.*/

//array codici 

//variabile per prendere il bottone 
let buttoneSend = document.getElementById("bottone");

let oreInseriti = parseInt(document.getElementById("hours"));
let print = document.getElementById("stampa");
//dare una functione al bottone quando clicca sopra
//



buttoneSend.addEventListener('click', function () {
    Prezzo(oreInseriti);

});





//----FUNZIONI----

//vfunzione per verificare chel'ora inserita è un numero

function Prezzo(ora) {
    let slect = document.getElementById("typework");
    let value = slect.value;
    let somma = 0;
    if (value == "1") {
        somma = 20.50 * ora;
        print.innerHTML = `
        ${somma} <span>€</span>
    `
    }
    else if (value == "2"){
        somma = 15.30 * ora;
        print.innerHTML = `
        ${somma} <span>€</span>
        `
    }else if (value == "3"){
        somma = 33.60 * ora;
        print.innerHTML = `
        ${somma} <span>€</span>
        `
    }
}