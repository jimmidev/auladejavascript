// uma função pode ser argumento para outra e /ou retornar outra função


function run (fn){
fn()
}

function sayhello(){
    console.log('hello !!!')
}

run(sayhello)  // uma função passa a outra por referência

run (function (){
    console.log('run')     // passei uma função anomina dentro de outra
})