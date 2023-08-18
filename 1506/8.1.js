import prompt from 'prompt-sync'
let ler = prompt()

console.log('Bem vindo, digite a quantidade de nomes desejada')
let qtd=Number(ler())


console.log('Informe um nome para cada posição')
let nome=[]

for(let cont=0; cont < qtd; cont++){
    nome[cont]= ler()
}



console.log('Os nomes após o filtro são:')


for(let item of nome){
    if( item.charAt(0) == 'l' ||  item.charAt(0) == 'L'){
        console.log(item)
    }
}


