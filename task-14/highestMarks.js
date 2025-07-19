let marks = [1,2,3,4,5,6];
function highest(marks){
    let largest = 0 ;
    for(i = 0; i < marks.length; i++){
        largest < marks[i]? largest = marks[i]:largest;
    }
    return largest;
}
console.log(highest(marks));