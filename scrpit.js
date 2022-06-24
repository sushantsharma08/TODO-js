const newTaskBTN = document.querySelector(".submitBtn");
const container = document.querySelector(".task");
const newTodoItem = document.getElementById("newTodo");

newTaskBTN.addEventListener("click", function () {
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

    container.appendChild(input);
    container.appendChild(editBTN);
    container.appendChild(doneBTN);
    container.appendChild(deleteBTN);
    event.preventDefault();

    editBTN.addEventListener("click", function(){
        input.removeAttribute("readonly", "");
        if (editBTN.textContent==="Edit") {
            editBTN.textContent = "Save";
        } else {
            editBTN.textContent = "Edit";
            input.setAttribute("readonly", "");
        }
    })
    
    deleteBTN.addEventListener("click" , function(){
        input.remove();
        editBTN.remove();
        deleteBTN.remove();
        doneBTN.remove();
    })
    
    doneBTN.addEventListener("click" , function(){
        input.style.backgroundColor="rgb(151, 240, 151)";
        input.style.color = "black";
        setTimeout(() => {
            input.remove();
            editBTN.remove();
            deleteBTN.remove();
            doneBTN.remove();
        }, 1000);
    })

}
)