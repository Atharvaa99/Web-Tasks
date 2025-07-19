let arr = ['a','b','c','d'];
function iterator(arr){
    let i = 0;
    return{
        next:function(){
            if(i<arr.length){
                return arr[i++];
            }
        }
    }
}
const it = iterator(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());