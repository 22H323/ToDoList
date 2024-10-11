let button = document.getElementById('add')
let toDoList = document.getElementById('toDoList')
let input = document.getElementById('input')

let todos = [];
window.onload = ()=>{
    todos= JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=' '
})

function addtodo(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    toDoList.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        toDoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
     let index = todos.indexOf(todo)
     if(index > -1){
        todos.splice(index, 1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}