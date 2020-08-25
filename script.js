let ulList = document.querySelector(".taskList"); //task list
let inputValue = document.querySelector(".addTaskInput"); //input field value
let addButton = document.querySelector(".addBtn"); //add button
let liArray = document.getElementsByClassName("task"); //
let confirmBtnLogin = document.querySelector(".confirmLogin");

console.log(liArray);
        
let addFunc = () => {   //adding a new task to the board
    let liForTask = document.createElement("li");
    liForTask.classList.add("task");
    let textInside = document.createTextNode(inputValue.value);
    liForTask.append(textInside);
    ulList.append(liForTask);
    let closeBtn = createCloseBtn();
    liForTask.append(closeBtn);
}

//addButton.addEventListener("click", addFunc);

let closeBtns = () => { //close buttons for task that already loaded
    for (let i = 0; i < liArray.length; i++){
        let closeBtn = createCloseBtn();
        liArray[i].append(closeBtn);
    }
}

ulList.addEventListener("click", (ev) => {
    if(ev.target.className == "close"){
        ev.target.parentNode.remove();
    }
});

createCloseBtn = () => {
    let closeSpan = document.createElement("span");
    let closeSymbol = document.createTextNode("\u00D7");
    closeSpan.append(closeSymbol);
    closeSpan.className = "close";
    return closeSpan;
}
closeBtns();

function hideToDoField() {
    let field = document.querySelector(".mainToDoField");
    if (field.style.display !== "none"){
        field.style.display = "none";
    } else {
        field.style.display = "block";
    }
}

confirmBtnLogin.addEventListener("click", function(e){
    e.preventDefault();
    return false;
});

