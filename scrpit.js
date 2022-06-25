var newTaskBTN = document.querySelector(".submitBtn");
var container = document.querySelector(".task");
var newTodoItem = document.getElementById("newTodo");
var buttons_div = document.querySelector(".buttons");
var tasksDone = document.querySelector(".TaskCount");
var saveBtn = document.querySelector(".save");
var loadBtn = document.querySelector(".load");
var counter = 0;

newTaskBTN.addEventListener("click", function () {
    var div = document.createElement("div");
    div.className = "taskdiv";

    var buttons_div = document.createElement("div");

    var input = document.createElement("input");
    input.type = "text";
    input.setAttribute('readonly', '');
    input.value = newTodoItem.value;

    var editBTN = document.createElement("button");
    editBTN.textContent = "Edit";
    editBTN.className = "Btn";

    var deleteBTN = document.createElement("button");
    deleteBTN.textContent = "Delete";
    deleteBTN.className = "Btn";

    var doneBTN = document.createElement("button");
    doneBTN.textContent = "Done";
    doneBTN.className = "Btn";

    if (!input.value) {
        alert("please enter a value");
        return;
    }


    div.appendChild(buttons_div);
    container.appendChild(div);
    div.appendChild(input);
    buttons_div.appendChild(editBTN);
    buttons_div.appendChild(doneBTN);
    buttons_div.appendChild(deleteBTN);

    event.preventDefault();

    editBTN.addEventListener("click", function () {
        input.removeAttribute("readonly", "");
        if (editBTN.textContent === "Edit") {
            input.style.color = "rgb(193, 100, 202)";
            editBTN.textContent = "Save";
            editBTN.style.backgroundColor="rgb(46, 33, 46)";
        } else {
            editBTN.textContent = "Edit";
            input.style.color = "rgb(97, 110, 131)";
            input.setAttribute("readonly", "");
            editBTN.style.backgroundColor="rgba(41, 39, 44, 0.388)";
        }
    })

    deleteBTN.addEventListener("click", function () {
        input.remove();
        editBTN.remove();
        deleteBTN.remove();
        doneBTN.remove();
        div.remove();
        buttons_div.remove();
        alert("Are You Sure you want to delete the task?");
    })

    doneBTN.addEventListener("click", function () {
        input.style.backgroundColor = "rgb(151, 240, 151)";
        input.style.color = "black";
        setTimeout(() => {
            input.remove();
            editBTN.remove();
            deleteBTN.remove();
            doneBTN.remove();
            div.remove();
            buttons_div.remove();
            counter++;
            tasksDone.textContent=counter;
        }, 1000);
    })

}
)

saveBtn.addEventListener("click", function(){
    var HTML = document.querySelector("html").innerHTML; //html of the page goes here
localStorage.setItem("content", HTML);
console.log("saved");
})

loadBtn.addEventListener("click", function(){
    document.write(localStorage['content']);
    console.log("loaded");
})
