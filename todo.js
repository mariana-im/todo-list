const Input = document.getElementById("new-text")
const ToDoTask = document.getElementById("tasks-box")

function addTask() {
    if(Input.value === ""){
        alert("Please write a task")
    }
    else{
        const NewBox = document.createElement('div')
        const txt = document.createElement('a')
        const img1 = document.createElement('div')
        const img2 = document.createElement('div')
        
        img1.setAttribute('class', 'circle')
        img2.setAttribute('id', 'x')
        txt.textContent = Input.value
        NewBox.setAttribute('class', 'taskbox')
        NewBox.setAttribute('id', 'task-box')

        document.getElementById("tasks-box").append(NewBox)
        NewBox.append(img1,txt,img2)

        Input.value = "";
    }
}

//Event listeners

document.addEventListener("click", e => {
    if (e.target.matches(".taskbox")) {
        taskbox = document.querySelector(".taskbox")
        e.target.classList.toggle("click")
    }
})


document.addEventListener("mouseover", e => {
    const x = document.getElementById("x")
    if (e.target.matches(".task-box")) {
        x.style.visibility = "visible"
    }
})

document.addEventListener("click", e => {
    const x = document.getElementById("x")
    const ToDoBox = document.getElementById("task-box");
    if (e.target === x) {
        e.target.remove();
    }
})

document.addEventListener("click", e => {
    if (e.target.matches(".circle")){
        e.target.classList.toggle("full")
    }
})

