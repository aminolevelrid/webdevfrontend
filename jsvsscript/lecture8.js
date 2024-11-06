// console.log("hiii");
// setTimeout(()=>{
//     console.log("hii");
// },2000);

// console.log("end");

// setTimeout(()=>{
//     console.log("kk");
// },2000)


const id = setInterval(() => {
    console.log("ll");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);

// promises

// to execute asynchrous functions in synchronus way

// eg:when we ask data from backend it take some time