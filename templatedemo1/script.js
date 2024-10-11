const k = document.querySelectorAll(".k");

k.forEach(button => {
    let isLiked = false;

    button.addEventListener("click", () => {
        if (isLiked==true) {
            button.style.backgroundColor = "white";
            button.textContent = "Like";
            alert("you unliked it")
        } else {
            button.style.background = "linear-gradient(grey, rgb(57, 56, 56))";
            button.textContent = "Liked it";
            alert("you liked it")
        }
        isLiked = !isLiked;
    });
});


const l=document.querySelectorAll(".R")

l.forEach(button => {
    button.addEventListener("click", () => {
        const inputContainer = document.createElement("div");
        inputContainer.innerHTML = '<input type="text" placeholder="Reply here...">';
        inputContainer.style.marginTop = "10px"; 

        button.parentNode.insertBefore(inputContainer, button.nextSibling);
        button.disabled="true"
    });
});