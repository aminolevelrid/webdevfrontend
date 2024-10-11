const k=document.querySelector(".i")
const l=document.querySelector(".k")
const w=document.querySelector(".r");

w.addEventListener("click",()=>{
const u=k.value;
const q=l.value;
if(u==0 && q==0){
    alert("Enter the password");
    return;
}
else if(u===q){
}
else{
    alert("your password and confirm password is unmatched")
    return;
}

alert("successfully reset your password");
})


