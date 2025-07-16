function scope(){
    let x = 10; // declared a variable in a function.
    if(true){
        let y = 30; // declared a variable in an IF block.
    }
    console.log(x);
    console.log(y); // throw refrence error.
}
scope();