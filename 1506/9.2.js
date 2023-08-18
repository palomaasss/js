import prompt from 'prompt-sync'
let ler = prompt()

console.log('Bem vindo, digite a quantidade de números desejada')
let qtd=Number(ler())


console.log('Informe um número para cada posição')
let num=[]
for(let cont=0; cont < qtd; cont++){
    num[cont]= Number(ler())
}


console.log('Os números são:')
for(let item of num){
    console.log(item)
}


for(let item of num){
    process.stdout.write('-' + item)
}


console.log()
console.log()
console.log()


let maior = num[0];

for(let i = 1; i < qtd; i++){
    if(num[i] > maior){
      maior = num[i];
    }
}

console.log('A maior nota é: ' + maior)