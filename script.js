let nodeList = document.querySelectorAll(".task"); //task list
let inputValue = document.querySelector(".addTaskInput").value; //input field value
let addButton = document.querySelector(".addBtn"); //add button

addButton.addEventListener("click", addFunc(nodeList, inputValue));


function addFunc (list, value) {
    let liForTask = document.createElement("LI");
    let textInside = document.createTextNode(value);
    liForTask.appendChild(textInside);
    list.appendChild(liForTask);
}



console.log(nodeList);