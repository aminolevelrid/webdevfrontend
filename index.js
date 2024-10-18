// function first(){
//     console.log("hii");
// }
// first();
// function fun(x,y,z=10){
//     console.log(x+y+z);
// }
// fun(5,6)

// function fun1(x,y){
//     return x-y<0;
// }
// const result=fun1(6,"8");
// console.log(result);

let a=[1,2,3,4,5,6,7,8,9,10]
function square(x){
   return x*x; 
}
// const squarearr=[]
// for(let ele of a){
//     squarearr.push(square(ele));
// }
// console.log(squarearr);
const map=(arr,fun)=>{
    const squarearr=[]
    for(let ele of arr){
        squarearr.push(fun(ele));
    }
    return squarearr
}
function cube(x){
    return x*x*x
}
console.log(map(a,cube));
console.log(a.map(cube));

console.log(map(a,square));