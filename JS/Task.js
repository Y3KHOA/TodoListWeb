let btnAddTaskEl= document.querySelector('button')
let taskNameEl= document.querySelector('#content')

let tasks = getTaskFromLocalStorage()

renderTasks(tasks)

// localStorage.removeItem('test')
// alert (localStorage.getItem('test'))
btnAddTaskEl.addEventListener('click', function() {
    if(!taskNameEl.value) {
        alert('Vui lòng nhập task name')
        return false
    }

    let taskId = this.getAttribute('id')
    let tasks = getTaskFromLocalStorage()
    let task = {name: taskNameEl.value}
    
    if(taskId == 0 || taskId) {
        tasks[taskId] = task
        this.removeAttribute('id')
    } else {
    tasks.push (task)
    }
    taskNameEl.value = ''

    //sau khi push task thông tin ta vừa thêm đồng thời lưu trữ vào localStorage
    //nhưng ta sẽ ko lưu trữ cả mảng đó vào. mà ta sẽ chuyển sang string bằng Json --> để dễ convert mảng sang string
    localStorage.setItem('tasks', JSON.stringify(tasks))

    renderTasks(tasks)
})

function renderTasks(tasks=[]) {
    let content = '<ul>'

    tasks.forEach((task,index)=>{
        content += `<li>
                <div class="task-name">${task.name}</div>
                <a href="#" onclick="editTask(${index})">Edit</a>
                <a href="#" onclick="deleteTask(${index})">Delete</a>                
            </li>`
    })

    content +='</ul>'

    document.querySelector('#result').innerHTML = content
}

function getTaskFromLocalStorage(){
    //để tránh ghi đè thì ta sẽ đọc từ localStorage ra trước
    //kiểm tra xem có thông tin nếu có thì in ra nếu ko có trả về mảng rỗng []
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
}

function editTask(id) {
    let tasks= getTaskFromLocalStorage()

    if(tasks.length > 0) {
        console.log(tasks[id])
        taskNameEl.value=tasks[id].name
        btnAddTaskEl.setAttribute('id',id)
    }
}

function deleteTask(id) {
    if(confirm('Did you really delete it?')) {
        // alert('Do it')
        let tasks = getTaskFromLocalStorage()
        tasks.splice(id,1)
        localStorage.setItem('tasks',JSON.stringify(tasks))

        renderTasks(getTaskFromLocalStorage())
    }
}