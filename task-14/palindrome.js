let str = "radar";
function palindrome(str){
    let flag = 0;
    for(i = 0; i < str.length; i++){
        flag = str[i] != str[str.length - i -1] ? 0 : 1;
    }
    return flag != 0 ? true: false;
}
console.log(`the string is palindrome : ${palindrome(str)}`);