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
        
        img1.setAttribute('class', 'circle')
        txt.setAttribute('class', 'txt')
        txt.textContent = Input.value
        NewBox.setAttribute('class', 'taskbox')

        document.getElementById("tasks-box").append(NewBox)
        NewBox.append(img1,txt)

        Input.value = "";
    }
}

//Event listeners


document.addEventListener("mouseover", e => {
    if  (e.target.matches(".taskbox")) {
        const xicon = document.createElement('img')
        xicon.src = 'x-icon.png'
        xicon.setAttribute('class','x')
        e.target.append(xicon)
    }
})

document.addEventListener("mouseout", e => {
    if (e.target.matches(".taskbox")) {
        e.target.removeChild(e.target.lastElementChild)
    }
})

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
