// range (5)    ->[1,2,3,4,5]
//range (6,11)  -> [6,7,8,9,10,11]
//range (10,19,2) -> [10,12,14,16,18]
//range (6,2)-> [6,5,4,3,2]
//range(8,-3,4)->[8,4,0]




// resposta  1

function range (a,b,s){  // valor inicial,fival, ppasso (s) step
    const nums =[]  // define nums como array 
    for (let i=1 ; i<=a;i++){
        nums.push(i) // push insere campo no array
    }
    return nums
}

console.log(range(5))  


// resposta 2  eu fiz)

function range (a,b,s){  // valor inicial,fival, ppasso (s) step
    const nums =[]  // define nums como array 
    for (let i=a ; i<=b;i++){
        nums.push(i) // push insere campo no array
    }
    return nums
}

console.log(range(6,11))  


const n1 = b === undefined ? 1: 2 // n1 vai depender do valor de b se b for undefined n1 vai vale 1 , caso contrário b vai valer 2

// na funcao eu posso passar valores iniciais (s=1,b) - se s não obtiver valor ele terá valor de 1
