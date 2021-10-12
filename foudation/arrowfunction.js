const increment1=function(n) {
    return n+1
}

// toda arrow function é anonima  no lugar da palavra function eu coloco = e depois do parametro =>
const increment2 =(n)=>{
    return n+1
}

console.log(increment1(1)); // retorna 2
console.log(increment2(5)); // retorna 6

const increment3 = n =>{   // outra forma pode tirar o ( )
    return n+1

}

console.log(increment3(24));  // retona 25

const increment4 = n => n + 1   // em uma linha tudo sera retonado automaticamente sem o par de chaves a palavra retun é desnecessaria

console.log(increment4(199))

const sum = (a,b) => a+b  //coloco par de parenteses porque a função recebe dois parametros







