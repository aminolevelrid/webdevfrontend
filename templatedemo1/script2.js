const buttons = document.querySelectorAll("button"); 
let count = 0; 

buttons.forEach(button => {
    button.addEventListener("click", () => {
        count += 1; 
        const inputs=document.querySelectorAll(".x");
        inputs.forEach(input=>{
            var password=input.value;
            if (password.length < 8) {
                alert("We need a minimum 8-digit password.");
                return;
            } else if (!/[a-zA-Z]/.test(password)) {
                alert("Password must contain at least one letter.");
                return;
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                alert("Password must contain at least one special character.");
                return;
            } else {
                
            }
            
        });
        alert("Successfully logged in. Click count: " + count);
    });
});

