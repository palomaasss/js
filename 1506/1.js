import prompt from 'prompt-sync'
let ler = prompt()

console.log('Bem vindo, digite 5 números')
let num=[]

for(let cont=0; cont < 5; cont++){
    num[cont]= Number(ler())
}

console.log('Os números são:')
for(let item of num){
    console.log(item)
}