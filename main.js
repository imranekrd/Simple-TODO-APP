const searchBar = document.getElementById('additem')
const addButton = document.getElementById('add')
const todoItemList = document.getElementById('todoitems')

addButton.addEventListener('click',(e)=>{
    
    let searchbarValue = searchBar.value 
    if(searchbarValue.length > 0){
        const todoElements = document.createElement('p')
    todoElements.append(searchbarValue)
    todoElements.style.color = 'black'
    todoItemList.appendChild(todoElements)
    searchBar.value = ""
    todoElements.addEventListener('click',()=>{
        todoElements.style.textDecoration = 'line-through'
        todoElements.style.color = 'green'
    })
    todoElements.addEventListener('dblclick',()=>{
        todoItemList.removeChild(todoElements)
    })
    }

    
})
