// function addTask() {
//     const taskInput = document.getElementById('new-task');
//     const taskText = taskInput.value.trim(); 

//     if (taskText === '') {
//         alert('Please enter a task.');
//         return;
//     }

//     const taskList = document.getElementById('task-list');

//     const listItem = document.createElement('li');
//     listItem.textContent = taskText;

//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.className = 'remove-btn';
//     removeButton.onclick = function() {
//         taskList.removeChild(listItem);
//     };

//     listItem.appendChild(removeButton);
//     taskList.appendChild(listItem);

//     taskInput.value = '';
// }

let btn = document.querySelector("#button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");


btn.addEventListener("click", function(){
     
    if(input.value.trim() != ""){
        let list = document.createElement('li');
        list.innerText = input.value;
    
        ul.appendChild(list);
        input.value = "";
        let remove = document.createElement("button");
        remove.innerText = "Remove";
        remove.classList.add("Remove");
        list.appendChild(remove);
        remove.addEventListener("click",()=>{
            list.remove();
        });

    }else{
        alert("Please enter your task");
    }
   
});




