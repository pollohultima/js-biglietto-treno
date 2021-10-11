//Chiedo all'utente età e chilometraggio da percorrere
let user_km = parseInt(prompt('Inserisci la lunghezza della tratta (km)'));
let user_age = parseInt(prompt('Inserisci la tua età'));
let price = user_km * 0.21;

//Organizzo le casisitche di sconto
if (user_age < 18) {
    var minor = price * 0.8;
    var final_price = minor.toFixed(2);
} else if (user_age >= 65) {
    var over = price * 0.6;
    var final_price = over.toFixed(2);
} else {
    var final_price = price.toFixed(2);
}

//Visualizzo a schermo il prezzo finale
document.getElementById('text').innerHTML = 'Il costo del biglietto è di: € ' + final_price;
