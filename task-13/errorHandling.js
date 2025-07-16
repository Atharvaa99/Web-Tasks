let num1 = 10;
let num2 = 0;
let result;

try{
    if(num2 == 0 ){
        throw new Error("Cannot divide by Zero.")
    }
    result = num1/num2;
}
catch(error){
    console.log(error.message)
}
finally{
    console.log(`Use correct input for Divison.`);
}

