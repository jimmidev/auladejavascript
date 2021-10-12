function logparams(a,b,c){
    console.log(a,b,c)
}
logparams(1,2,3,4,5)   // 123
logparams(1,2,3)        //123
logparams(1,2)        // 12 UNDEFINED
logparams(1)           //1 UNDEFINED UNDEFINED
logparams()          //UNDEFINED UNDEFINED UNDEFINED

function defaultparams(a,b,c=0){    //passei um valor de arranque para c
    console.log(a,b,c)
}

defaultparams (7,8,9)
defaultparams (7,8)  // retorna 7 8 0 - não retona undefined porque eu dei um valor de inicio para c
defaultparams (7)    // 7 undefined 0  - porque não dei valor inicial para b mas dei para c

//array na function

function logNums(nums){
    for (let n of nums){    // percorre o array no laço for 
        console.log (n)
    }
}

logNums([1,2,3,4,5,6,7,8])

// saida
//1
//2
//3
//4
//5
//6
//7
//8

// OPERADOR SPREAD /REST

function logNums(...nums){
        
        console.log (nums)
    
}

logNums(1,2,3,4,5,6)

// retorna : [1,2,3,4,5,6] retorna dessa forma pois se trata de uma array


function summall(...nums){  //captura valores 

    let total= 0
    for ( let n of nums){
        total += n     //coma + n a cada volta
    }
    return total
}
console.log (summall(1,2,3,4,5))

// retorna 15 




