function outer(){
    const x = 42;
    return function inner(){
        return x;
    }
}
let count = outer();
console.log(count());