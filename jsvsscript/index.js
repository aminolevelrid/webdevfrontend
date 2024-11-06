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
// console.log(map(a,cube));
// console.log(a.map(cube));

// console.log(map(a,square));

// let y=5;

// const newArr=a.map((x,y)=>{
//     return x**y;
// }) 
// console.log(newArr);

// function cd(x){
//     return x%2;
// }
// let oddarr=a.filter(cd);
// console.log(oddarr);


// let evenArr=a.filter((ele)=>{
//     return !ele%2;
// })

let students = [
    {
        name: "student 1",
        year: 3,
        age: 21,
        gender: "male",
        cgpa: 8,
        backlogs: false
    },
    {
        name: "student 2",
        year: 2,
        age: 20,
        gender: "female",
        cgpa: 7.5,
        backlogs: false
    },
    {
        name: "student 3",
        year: 1,
        age: 19,
        gender: "male",
        cgpa: 6.8,
        backlogs: true
    },
    {
        name: "student 4",
        year: 4,
        age: 22,
        gender: "female",
        cgpa: 8.5,
        backlogs: false
    },
    {
        name: "student 5",
        year: 3,
        age: 21,
        gender: "male",
        cgpa: 7.2,
        backlogs: false
    },
    {
        name: "student 6",
        year: 2,
        age: 20,
        gender: "female",
        cgpa: 6.5,
        backlogs: true
    },
    {
        name: "student 7",
        year: 4,
        age: 22,
        gender: "male",
        cgpa: 9.0,
        backlogs: false
    },
    {
        name: "student 8",
        year: 1,
        age: 19,
        gender: "female",
        cgpa: 7.8,
        backlogs: false
    },
    {
        name: "student 9",
        year: 3,
        age: 21,
        gender: "female",
        cgpa: 7.1,
        backlogs: true
    },
    {
        name: "student 10",
        year: 2,
        age: 20,
        gender: "male",
        cgpa: 8.2,
        backlogs: false
    }
];

// let result1=students.filter((student)=>{
//     return student.cgpa>=7.5;
// })
// console.log(result1);

// let result2=students.filter((student)=>{
//     return student.year===3;
// })
// console.log(result2);

// let result=students.filter((student)=>{
//     return student.cgpa>=7.5 && !student.backlogs && student.year===3;
// })
// console.log(result);


// let arr=[{
// name:"hill",points:400,quantity:2},{name:"hiii",points:200,quantity:1}
// ]

// let sum=arr.reduce((accumulator,ele)=>{
// return accumulator+(ele.points*ele.quantity);
// },0)
// console.log(sum);

// let foundstudent=students.find((student) => {
//         return student.age === 20;
//     });
// console.log(foundstudent);
                             
                                 // Async js
            


