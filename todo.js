const input = document.getElementById("new-text");
const erase = document.getElementById("delete");
const done = document.getElementById("done");
const add = document.getElementById("new");

const apiurl = "https://api.quotable.io/random?tags=motivational";
const quote = document.getElementById("quote");

/*
async function getquote() {
    const response = await fetch(apiurl);
    let data = await response.json();
    quote.innerHTML = data["content"];
    console.log(data);
} 

getquote();
*/

function addTask() {
    if(input.value === ""){
        alert("Please write a task");
    }
    else{
        add.play();
        const addbox = document.createElement('div');
        const txt = document.createElement('a');
        const img1 = document.createElement('div');
        const img2 = document.createElement('img');
        
        img1.setAttribute('class', 'circle');
        img2.setAttribute('class', 'x');
        img2.src = 'x-icon.png';
        txt.setAttribute('class', 'txt');
        txt.textContent = input.value;
        addbox.setAttribute('class', 'taskbox');

        document.getElementById("tasks-box").append(addbox);
        addbox.append(img1,txt,img2);

        input.value = "";
    }
}

//Event listeners

//e means event object
document.addEventListener("click", e => {
    if (e.target.matches(".circle")){
        e.target.classList.toggle("full");
        done.pause();
        done.currentTime = 0;
        done.play();
    }
});

document.addEventListener('click', e => {
    if (e.target.matches(".x")){
        e.target.parentNode.remove();
        erase.play();
    }
});
