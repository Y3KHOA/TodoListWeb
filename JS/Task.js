let btnAddTaskEl= document.querySelector('button')
let taskNameEl= document.querySelector('#content')

btnAddTaskEl.addEventListener('click', function() {
    if(!taskNameEl.value) {
        alert('Vui lòng nhập task name')
        return false
    }

    let tasks = []
    tasks.push ({name: taskNameEl.value})
    taskNameEl.value = ''

    renderTasks(tasks)
})

function renderTasks(tasks=[]) {
    let content = '<ul>'

    tasks.forEach((task)=>{
        content += `<li>
                <div class="task-name">${task.name}</div>
                <a href="#">Edit</a>
                <a href="#">Delete</a>                
            </li>`
    })

    content +='</ul>'

    document.querySelector('#result').innerHTML = content
}