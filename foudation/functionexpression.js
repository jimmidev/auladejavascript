//funcao anonima coloca entre parenteses
(function(a,b,c){
    return a+b+c
}) 

// FUNCTION EXPRESSSION - atribuir o valor numa variavel para funcionar
const sum = function(a,b){
    return a+b
}
const result = sum (7,59) // sozinho não retorna . preciso atribuir o valor a uma variavel
console.log(result) //retona

const anotherSum = sum 
console.log(anotherSum(5,9))   // outra forma

x=sum
console.log(x(11,16)) // outra forma


