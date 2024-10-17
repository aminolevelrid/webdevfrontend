function first(){
    console.log("hii");
}
first();
function fun(x,y,z=10){
    console.log(x+y+z);
}
fun(5,6)

function fun1(x,y){
    return x-y<0;
}
const result=fun1(6,"8");
console.log(result);