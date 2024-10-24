const addbutton = document.getElementById("add");
const del = document.getElementById("delete");
const root = document.getElementById("root");
const taskname = document.getElementById("name");
const taskdisc = document.getElementById("disc");

function create(name, disc) {
    if (name !== "" && disc !== "") {
        const newTask = document.createElement("div");
        newTask.innerText = `Name of the task: ${name}\nDescription of the task: ${disc}`;
        newTask.classList.add("note");
        root.appendChild(newTask);

        const deleteTaskButton = document.createElement("button");
        deleteTaskButton.innerText = "Delete";
        deleteTaskButton.classList.add("deleteTaskButton");
        newTask.appendChild(deleteTaskButton);

        deleteTaskButton.addEventListener("click", () => {
            root.removeChild(newTask);
            adjustRootHeight();
        });

        adjustRootHeight();
    } else {
        console.log("The fields are empty, fill them first");
    }
}

function adjustRootHeight() {
    const taskCount = root.childElementCount;
    root.style.height = `${taskCount * 50 + 50}px`; 
}

addbutton.addEventListener("click", () => {
    create(taskname.value, taskdisc.value);
    taskname.value = "";
    taskdisc.value = "";
});

del.addEventListener("click", () => {
    root.innerHTML = "";
    adjustRootHeight();
});
