import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe o  número total de eleitores');
let totale= Number(ler());

console.log('Informe o  número votos válidos');
let validos= Number(ler());

console.log('Informe o  número total de votos brancos');
let brancos= Number(ler());

console.log('Informe o  número total de votos nulos');
let nulos= Number(ler()); 

let pervalid= (validos*100) / totale;
let perbranco= (brancos*100) / totale;
let pernulos= (nulos*100) / totale;


console.log (`O percentual de votos validos é ${pervalid}%`);
console.log (`O percentual de votos brancos é ${perbranco}%`);
console.log (`O percentual de votos nulos é ${pernulos}%`);