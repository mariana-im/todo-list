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
        const img2 = document.createElement('img')
        
        img1.setAttribute('class', 'circle')
        img2.setAttribute('class', 'x')
        img2.src = 'x-icon.png'
        txt.setAttribute('class', 'txt')
        txt.textContent = Input.value
        NewBox.setAttribute('class', 'taskbox')

        document.getElementById("tasks-box").append(NewBox)
        NewBox.append(img1,txt,img2)

        Input.value = "";
    }
}

//Event listeners

//e means event object
document.addEventListener("click", e => {
    if (e.target.matches(".circle")){
        e.target.classList.toggle("full")
    }
})

document.addEventListener('click', e => {
    if (e.target.matches(".x")){
        e.target.parentNode.remove()
    }
})
