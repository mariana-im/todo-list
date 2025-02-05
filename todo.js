const INPUT = document.getElementById("new-text")
const DELETE = document.getElementById("delete")
const DONE = document.getElementById("done")
const NEW = document.getElementById("new")

function addTask() {
    if(INPUT.value === ""){
        alert("Please write a task")
    }
    else{
        NEW.play()
        const NEWBOX = document.createElement('div')
        const TXT = document.createElement('a')
        const IMG1 = document.createElement('div')
        const IMG2 = document.createElement('img')
        
        IMG1.setAttribute('class', 'circle')
        IMG2.setAttribute('class', 'x')
        IMG2.src = 'x-icon.png'
        TXT.setAttribute('class', 'txt')
        TXT.textContent = INPUT.value
        NEWBOX.setAttribute('class', 'taskbox')

        document.getElementById("tasks-box").append(NEWBOX)
        NEWBOX.append(IMG1,TXT,IMG2)

        INPUT.value = ""
    }
}

//Event listeners

//e means event object
document.addEventListener("click", e => {
    if (e.target.matches(".circle")){
        e.target.classList.toggle("full")
        DONE.pause()
        DONE.currentTime = 0
        DONE.play()
    }
})

document.addEventListener('click', e => {
    if (e.target.matches(".x")){
        e.target.parentNode.remove()
        DELETE.play()
    }
})
