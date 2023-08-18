import prompt from 'prompt-sync'
let ler = prompt()

console.log('Bem vindo, digite 5 nomeaa')
let nome=[]

for(let cont=0; cont < 5; cont++){
    nome[cont]= ler()
}

console.log('Os nomes são')
for(let item of nome){
    console.log(item)
}