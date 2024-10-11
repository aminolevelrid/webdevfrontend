const otp=document.querySelector(".ot");
let g = null;
otp.addEventListener("click",()=>{
g=Math.floor(1000 + Math.random() * 9000);
alert(`this is your otp ${g}`);
})

const join = document.querySelector(".jo");
const i = document.querySelector(".i");
const pa=document.querySelector(".pa")
const pc=document.querySelector(".pc")
const ph=document.querySelector(".ph")
const op=document.querySelector(".op")
const em=document.querySelector(".em");
const us=document.querySelector(".us");

join.addEventListener("click", () => {
    const k = i.value; 
    const l=ph.value;
    const o=op.value;
    const u=us.value;
    const es=em.value;
    if(u.length<5){
        alert("name must be minimum 5 letters")
    }
    if(!es.endsWith("@gmail.com")){
        alert("write a vaild mail id");
        return;
    }
    if (o!=g) {
        alert("Type a correct otp");
        return;  
    }
    if(l.length!=10){
        alert("type your valid mobile No.")
        return;
    } 

    if (k.trim() !== "") {  
        const p=pa.value;
        if(p.length<8){
            alert("password must be 8 digit");
            return;
        } else if (!/[a-zA-Z]/.test(p)) {
            alert("Password must contain at least one letter.");
            return;
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(p)) {
            alert("Password must contain at least one special character.");
            return
        } 
        const y=pc.value
        if (p === y && p.trim() !== "") {
        } else if (p.trim() === "" || y.trim() === "") {
            alert("Password fields cannot be empty");
            return;
        } else {
            alert("Your password and confirm password do not match");
            return;
        }
        
    } else {
        alert("One field is unfilled");  
        return;
    }
    alert("successfuly login")
});