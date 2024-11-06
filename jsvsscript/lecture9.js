console.log("start");
const first=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num=Math.random()*10;
        if(num<5){
            resolve(num);
        }
        else{
            reject(num)
        }
    },1000);

});
// Resolve ->task complete
// Reject  -> tackle error
// pending ->

first.then((result)=>{
console.log(result,"resolved");
}).catch((error)=>{
console.log(error,"rejected");
});
console.log("end");