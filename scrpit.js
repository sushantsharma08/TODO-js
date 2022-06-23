const newTaskBTN = document.querySelector(".submitBtn");
const container = document.querySelector(".task");
const newTodoItem = document.getElementById("newTodo");

newTaskBTN.addEventListener("click" , function() {
    var input = document.createElement("input");
    input.type = "text";
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
container.appendChild(input);
container.appendChild(editBTN);
container.appendChild(doneBTN);
container.appendChild(deleteBTN);
input.setAttribute('readonly','');
event.preventDefault();
}
)
