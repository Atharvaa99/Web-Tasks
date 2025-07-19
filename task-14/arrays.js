const marks = [30,40,25,20,45]
const bonus = marks.map(n=>n+5);
function marksFilter(x){
    return x >= 35;
}
console.log(bonus.filter(marksFilter));