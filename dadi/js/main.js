// Creo due costanti in grado di generare 2 numeri Randomici compresi tra 1 e 6
const numberRandom = Math.floor(Math.random() * 6) + 1;
console.log("Dado del giocatore: ", numberRandom);
const numberRandomCPU = Math.floor(Math.random() * 6) + 1;
console.log("Dado della Cpu: ", numberRandomCPU);

// Controllo chi ha vinto
if(numberRandom > numberRandomCPU){
    console.log("Il vincitore è l'utente con: ", numberRandom, "punti!" );
}
else if(numberRandom < numberRandomCPU){
    console.log("Il vincitore è la CPU con: ", numberRandomCPU, "punti!" );
}
else{
    console.log("I giocatori hanno fatto lo stesso punteggio!");
}

// Applico un semplice bottone refresh per ricaricare la pagina
btnRefresh.addEventListener('click', function() {
    window.location.reload();
})