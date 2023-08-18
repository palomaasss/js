import prompt from 'prompt-sync'
let ler=prompt()


console.log('Informe um número')
let num=Number(ler())


console.log('A tabuada dele é:')
let tab= 0
for(let cont=0; cont < 11; cont++){
    tab= cont*num
    console.log(tab)
}