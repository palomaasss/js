import prompt from 'prompt-sync'
let ler = prompt()

console.log('Bem vindo, digite a quantidade de números desejada')
let qtd=Number(ler())


console.log('Informe um número para cada posição')
let num=[]
for(let cont=0; cont < qtd; cont++){
    num[cont]= Number(ler())
}


console.log('Média:')
let soma=0
let div=0
for( let media of num){
    soma= soma+media
}

let x= soma/qtd
console.log(x)
