import prompt from 'prompt-sync';
let ler = prompt();

console.log ('Calculadora de juros simples');

console.log ('Informe o valor do capital')
let capital=Number(ler());

console.log ('Informe o valor da taxa')
let taxa=Number(ler());

console.log ('Informe o tempo em meses')
let tempo=Number(ler());

let juros= (capital * taxa * tempo )/100;
let montagem= capital + juros;

console.log (`o montante pagado pelo empréstimo de ${capital} é ${montagem}`);