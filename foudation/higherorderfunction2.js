function finalPrice(tax,price){
return price *(1+tax)
}

console.log(finalPrice(0.0875,25.1))

function finalPrice(tax){
    return function (price) {       //a primeira funcao recebe um parãmetro e ai sim a segunda recebe e tude é retonado

        return price *(1+tax)
    }
    }

    console.log(finalPrice(0.0875,25.1))    // ele informa que a funcao que está dentro é anônima

console.log(finalPrice(0.0875)(25.1)) // ele passa  o valor de tax e para a outra funcao em seguida


// técnica : curring

function finalPrice(tax){
    return function (price) {       //a primeira funcao recebe um parãmetro e ai sim a segunda recebe e tude é retonado

        return price *(1+tax)
    }
    }

    
    const nycFinalprice = finalPrice(0.0875) // recebe o valor de tax e ja armazena em nycfinalprice a funcao finalprice com valor 

console.log(nycFinalprice(25.1)) // passei só o segundo parãmetro
console.log(nycFinalprice(21.7)) 
console.log(nycFinalprice(107.9)) 


// funcao map - recebe outra funcao como parãmetro
//funcao map pra tranformar array em outro array

const numbers = [1,2,3,4,5,6]

const numbersv2 =numbers.map(function(el){  // funcao map recebe funcao como parâmetro - vai mapear number e passar cada elemento em (el)
return el * 2
})

const numbersv3 =numbers.map(el=>el*2)  // arrow function - mesma coisa que em cimna

console.log(numbersv2)
console.log(numbersv3)


const students = [
 { name: 'jake', score: 6.4},  
 { name: 'susan', score: 8.6},
 { name: 'ema', score: 9.4},
 { name: 'peter', score: 9.1},              
 ]

 const getScore = el=>el.score   // armazena todos os valores de score em el e passa a funcao get score
 console.log (students.map(getScore)) // mapeia todos os valores em getscore

 console.log (
           students
            .map(getScore)      // mapeia todos os valores em getscore
            .map(Math.ceil)     // mapeia e arredonda para cima (ceil)
 )




//posso armazenar numa variavel

 const result = students
.map(getScore)      // mapeia todos os valores em getscore
.map(Math.ceil)     // mapeia e arredonda para cima (ceil)

console.log(students,result)   // responde mostrando o array inteiro(students) , mostra depois oas valores arredondados (result)