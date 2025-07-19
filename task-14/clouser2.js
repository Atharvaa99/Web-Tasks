function outer(){
    let x = 0;
    return function inner(){
        x++;
        return x;
    };
}
const counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());