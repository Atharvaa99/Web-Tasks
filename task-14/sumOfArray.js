let arr = [1,2,3,4,5];
function sum(arr){
    let result = 0
    for( i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}
console.log(sum(arr));