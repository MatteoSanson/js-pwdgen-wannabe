'use strict';


const nomeUtente = prompt ('Inserisci il tuo nome');
console.log ('Nome:', nomeUtente);
const cognomeUtente = prompt ('Inserisci il tuo cognome');
console.log ('Cognome:', cognomeUtente);
const coloreUtente = prompt ('Inserisci il tuo colore preferito');
console.log ('Colore Preferito:', coloreUtente);

let numeroCasuale = Math.floor(Math.random() * 101);
console.log('Numero Casuale:', numeroCasuale);

const password = nomeUtente + cognomeUtente + coloreUtente + numeroCasuale;
console.log ('password generata:', password);

generata.innerHTML = nomeUtente + cognomeUtente + coloreUtente + numeroCasuale;




