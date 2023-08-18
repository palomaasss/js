import prompt from "prompt-sync";
let ler = prompt ();

console.log('Programa da média');

console.log('\nDigite suas três notas e lhe informaremos a média')
console.log ('\nInforme a primeira nota');

let nota1= Number(ler());    

console.log ('\nInforme a segunda nota');
let nota2= Number(ler());   

console.log ('\nInforme a terceira nota');
let nota3= Number(ler());

let média= (nota1+ nota2 + nota3) /3;
console.log ('A média de ${nota1} com ${nota2} e ${nota3} é ${média}');
