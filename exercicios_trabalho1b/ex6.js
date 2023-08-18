import prompt from 'prompt-sync';
let ler = prompt ();

console.log('Calcularemos o valor total de sua compra \n Informe quantos açaís pequenos você comprou:');
let peq= Number(ler());

console.log('Informe quantos açaís médios você comprou:');
let med=Number(ler());

console.log('Informe quantos açaís grandes você comprou:');
let grand=Number(ler());

let totalp= peq*13.50
let totalm= med*15
let totalg= grand*17.50

let total= totalp + totalm + totalg

console.log (`Valor total da sua compra ${total}`);