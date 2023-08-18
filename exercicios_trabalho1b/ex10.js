import prompt from 'prompt-sync';
let ler = prompt();

console.log ('Convertemos os graus em fahrenheint em graus celsius');
console.log ('Informe os graus em fahrenheit');
let fa1= Number(ler());

let celsius= ((fa1 - 32) /9) *5 ;

console.log(`Resultado ${celsius}`);
