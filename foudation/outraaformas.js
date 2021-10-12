
//função imediatamente invocada IIFE 
(function(a,b,c){
    console.log(a+b+c)
    console.log('result ${a+b+c}')
}) (1,2,3)      // passa logo no fim o valor e a função é invocada imediatamente

// a função tem escopo . a variavel so tem valor na função

(function(){
    let x=300;
    console.log('x')
}) ()      // sem parâmetro e invocada imediatamente


(()=>{
    console.log ('arrow')      
}
)()  // imediatamente invocada arrow


(()=>console.log('arrow2'))();  // arrow imediatamente invocada de uma linha


