function oneToFifty() {
    for (let i = 0; i < 50; i++) {
        console.log(i + 1);
    }
}
function odd(){
    for(let i = 0; i < 50; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
}
function even(){
       for(let i = 1; i <= 50; i++){
        if(i%2 == 0){
            console.log(i);
        }
    }
}
console.log(`Numbers from 1 to 50 are as follows:`)
oneToFifty();
console.log(`Odd Numbers from 1 to 50 are as follows:`)
odd();
console.log(`Even Numbers from 1 to 50 are as follows:`)
even();