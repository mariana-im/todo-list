const Input = document.getElementById("new-text")
const ToDoTask = document.getElementById("tasks-box")

function addTask() {
    if(Input.value === ""){
        alert("Please write a task")
    }
    else{
        const NewBox = document.createElement('div')
        // const txt = document.createElement('a')
        // const img1 = document.createElement('img')
        // const img2 = document.createElement('img')
        // const img3 = document.createElement('img')
        
        // img1.src = "empty-circle.png"
        // img2.src = "full-circle.png"
        // img3.src = "x-icon.png"
        
        // img1.setAttribute('id', 'empty-circle')
        // img2.setAttribute('id', 'full-circle')
        // img3.setAttribute('id', 'x')
        // txt.textContent = Input.value
        NewBox.setAttribute('class', 'taskbox')
        // NewBox.setAttribute('id', 'task-box')

        document.getElementById("tasks-box").append(NewBox)
        // NewBox.append(img1,img2,txt,img3)
    }
}

//Event listeners

document.addEventListener("click", e => {
    if (e.target.matches(".taskbox")) {
        taskbox = document.querySelector(".taskbox")
        taskbox.classList.toggle("click")
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
        ToDoBox.remove();
    }
})

document.addEventListener("click", e => {
    const circle = document.getElementById("full-circle")
    const empty = document.getElementById("empty-circle")
    if (e.target === empty){
        circle.style.visibility = "visible"
    }

    if (e.target === circle){
        circle.style.visibility = "hidden"
    }
})

