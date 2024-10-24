const p=document.getElementById("p")
const url="https://catfact.ninja/fact";
const btn=document.getElementById("btn");
async function call(){
    const response =await fetch(url);
    const data=await response.json();
    p.value=data.fact;
    p.style.color="blue";
    p.style.fontSize = "20px";
    console.log(data);
}
btn.addEventListener('click',()=>{
    console.log("btn clicked");
    call();
})

