// Chiedo email all'utente
const usermail = prompt("Inserisci la tua mail: ");
// Array mails salvate nel server
const mails = ["paolonapoli@live.it", "labandadeibassotti@gmail.com", "vendettaveranonfiniròingalera@live.it", "nonhounaferrarimapossosognarla@virgilio.com"];
// Inizializzo e pongo una variabile da usare per verificare se la mail sia presente o no
let element = 0; 

// Inizializzo un cilco di controllo finito
for (let i = 0; i < mails.length; i++) {
    element = mails[i];
    if( element === usermail){
        console.log("La tua email è stata verificata");
        alert("La tua email è stata verificata");
        // Chiudo il ciclo per evitare calcoli inutili
        break;
    }
}

// Notifico all'utente che l'email non è riconosciuta
if( element !== usermail){
    console.log("La tua email non è riconosciuta");
    alert("La tua email non è riconosciuta");
}