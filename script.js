/*PARTE JAVASCRIPT
A questo punto una volta terminato il vostro layout, include un vostro file javascript e fate in modo che quando l’utente fa click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente.
Il prezzo orario per una commissione varia in questo modo:
Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti.
Mostrare il risultato del calcolo del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.*/

//array codici discount

let codici = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]



//variabile per prendere il bottone 
let buttoneSend = document.getElementById("bottone");


let print = document.getElementById("stampa");
//dare una functione al bottone quando clicca sopra
//
let infomra = document.getElementById("informazione");



buttoneSend.addEventListener("click", function () {
    let or = parseInt(document.getElementById("hours").value);
    Prezzo(or);

});




//----FUNZIONI----

//vfunzione per verificare chel'ora inserita è un numero

function Prezzo(ora) {
    let slect = document.getElementById("typework");
    let value = slect.value;
    let somma = 0;
    let valoreSconto = 0
    let sommafinale = 0;
    let sconto25 = 25/100;
    if (value == "1") {
        if (promo()) {
            somma = 20.5 * ora;
            valoreSconto = sconto25 * somma;
            sommafinale = (somma - valoreSconto);
            print.innerHTML = `
            ${sommafinale.toFixed(2)} <span>€</span>
            `;
            removeArrValue();
        } else {
            somma = 20.5 * ora;
            print.innerHTML = `
            ${somma.toFixed(2)} <span>€</span>
            `;
            infomra.innerHTML = "il codice inserito non è valido";
            discountRosso();
        }
    } else if (value == "2") {
        if (promo()) {
            somma = 15.30 * ora 
            valoreSconto = sconto25 * somma;
            sommafinale = (somma - valoreSconto);
            print.innerHTML = `
            ${sommafinale.toFixed(2)} <span>€</span>
            `;
            removeArrValue();
        } else {
            somma = 15.30 * ora;
            print.innerHTML = `
            ${somma.toFixed(2)} <span>€</span>
            
            `;
            infomra.innerHTML = "il codice inserito non è valido";
            discountRosso();
        }
    } else if (value == "3") {
        if (promo()) {
            somma = 33.60 * ora 
            valoreSconto = sconto25 * somma;
            sommafinale = (somma - valoreSconto);
            print.innerHTML = `
            ${sommafinale.toFixed(2)} <span>€</span>
            `;
            removeArrValue();
        } else {
            somma = 33.60 * ora;
            print.innerHTML = `
            ${somma.toFixed(2)} <span>€</span>
            `;
            infomra.innerHTML = "il codice inserito non è valido";
            discountRosso();
        }
    }
}
//verificare se il codice è nella lista dei codici
function promo() {
    let discount = document.getElementById("Discount").value;
    if (codici.indexOf(discount) > -1) {
        return true;
    } else {
        return false;
    }
//cambiare il colore del codice inserito in caso non è valido 
}
function discountRosso() {
    document.getElementById("Discount").style.color = "#ff0000";
}
//rimuovere codice utilizzato
function removeArrValue() {
    let discount = document.getElementById("Discount").value;
    let code = codici.indexOf(discount);
    if (code > -1) {
        codici.splice(code, 1);
    }
    return codici;
}