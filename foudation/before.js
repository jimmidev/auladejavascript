function sayHello(){
    console.log ('Hello !')
}
sayHello()

// nao retona nada

functionn sayHelloTo(nome){
    console.log('Hello ${nome}!')  // interpola a string pode ser assim : console.log('Hello'+nome)
}
sayHelloTo ('Mike')

// não retorna nada mas recebe parãmetro

function returnHI(){
    return 'Hi!'
}
// retona o valor literas string 'Hi' a seguir eu posso pegar esse valor
let greeting = returnHI()
console.log(greeting)  // retorna hi
console.log(returnHI())  // também funcona (outro método)

// não recebe parãmetro mas retorna valor

function returnHiTo(name){
    return 'Hi ${name} !'
}
console.log(returnHiTo('jhon'))
//recebe parametro e retona valor




