/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km) va applicato uno sconto del 20 % per i minorenni va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

//Chiedo all'utente età e chilometraggio da percorrere
let user_km = parseInt(prompt('Inserisci la lunghezza della tratta (km)'));
let user_age = parseInt(prompt('Inserisci la tua età'));

/* console.log(user_km, user_age); */

let price = user_km * 0.21;

/* console.log(price); */

if (user_age < 18) {
    let discount = price * 0.8;
    console.log(discount);
} else if (user_age > 65) {
    let discount = price * 0.6;
    console.log(discount);
} else {
    console.log(price);
}
