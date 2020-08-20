let ulList = document.querySelector(".taskList"); //task list
let inputValue = document.querySelector(".addTaskInput").value; //input field value
let addButton = document.querySelector(".addBtn"); //add button
let liArray = document.getElementsByClassName("task");

let addFunc = () => {
    let liForTask = document.createElement("li");
    liForTask.classList.add("task");
    let textInside = document.createTextNode(inputValue);
    liForTask.append(textInside);
    ulList.append(liForTask);
}

addButton.addEventListener("click", addFunc);

