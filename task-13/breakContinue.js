for (let index = 0; index < 20; index++) {
    if(index == 10) break;    // This demonstrates that when the If condition is true the program flow exits the loop.
    console.log(index)
}

console.log();

for(let i = 0; i < 20; i++){
    if( i == 10 ) continue; // this demonstrates that when the If condition is true the program skips that iteration and procceds to next one.
    console.log(i);
}