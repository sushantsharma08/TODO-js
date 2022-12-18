var newTaskBTN = document.querySelector(".submitBtn");
var container = document.querySelector(".task");
var newTodoItem = document.getElementById("newTodo");
var buttons_div = document.querySelector(".buttons");
var tasksDone = document.querySelector(".TaskCount");
var saveBtn = document.querySelector(".save");
var loadBtn = document.querySelector(".load");



var counter = 0;
const arrayOfLists = [];
let taskcounter = 0;


newTaskBTN.addEventListener("click", function () {

    arrayOfLists.push(newTodoItem.value)
    console.log(arrayOfLists);

    // new div for task
    var div = document.createElement("div");
    div.className = "taskdiv";
    // div for buttons
    var buttons_div = document.createElement("div");
    buttons_div.className = 'btnDiv'
    // new input feild
    var input = document.createElement("input");
    input.className = `input${taskcounter}`;
    input.classList.add('input')
    input.type = "text";
    input.setAttribute('readonly', '');
    input.value = newTodoItem.value;
    // buttons of task
    var editBTN = document.createElement("button");
    editBTN.textContent = "Edit";
    editBTN.className = "Btn";
    editBTN.classList.add('Editbtn')
    
    var deleteBTN = document.createElement("button");
    deleteBTN.textContent = "Delete";
    deleteBTN.className = "Btn";
    deleteBTN.classList.add('Deletebtn');

    var doneBTN = document.createElement("button");
    doneBTN.textContent = "Done";
    doneBTN.className = "Btn";
    doneBTN.classList.add('Donebtn')


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


    let index = arrayOfLists.indexOf(input.value);


    editBTN.addEventListener("click", function () {
        input.removeAttribute("readonly", "");
        if (editBTN.textContent === "Edit") {
            arrayOfLists.splice(index, 1)
            console.log(arrayOfLists);
            input.style.color = "rgb(193, 100, 202)";
            editBTN.textContent = "Save";
            editBTN.style.backgroundColor = "rgb(46, 33, 46)";
        } else {
            arrayOfLists.splice(index, 0, input.value)
            console.log(arrayOfLists);
            editBTN.textContent = "Edit";
            input.style.color = "rgb(97, 110, 131)";
            input.setAttribute("readonly", "");
            editBTN.style.backgroundColor = "rgba(41, 39, 44, 0.388)";
        }
    })

    deleteBTN.addEventListener("click", function () {
        arrayOfLists.pop(input.value);
        console.log(arrayOfLists);
        alert("Are You Sure you want to delete the task?");
        setTimeout(() => {
            input.remove();
            editBTN.remove();
            deleteBTN.remove();
            doneBTN.remove();
            div.remove();
            buttons_div.remove();
        }, 400);
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
            tasksDone.textContent = counter;
        }, 1000);


    })
    taskcounter++;
    console.log(taskcounter);
}
)

saveBtn.addEventListener("click", function () {
    //html of the page goes here
    var HTML = document.querySelector(".task").innerHTML;

    localStorage.setItem("content", HTML);
    localStorage.setItem('array', JSON.stringify(arrayOfLists));
    console.log("saved");
})

loadBtn.addEventListener("click", function () {

    let innerdiv = localStorage['content'];

    let arr = JSON.parse(localStorage.getItem('array'));
    document.querySelector('.container').innerHTML = innerdiv;
    for (let i = 0; i < arr.length; i++) {
        document.querySelector(`.input${i}`).value = arr[i]
    }

    var edit = document.querySelectorAll('.Editbtn');
    var deleteButton = document.querySelectorAll('.Deletebtn');
    var done = document.querySelectorAll('.Donebtn');
    var input = document.querySelectorAll('.input');
    var Listdiv = document.querySelectorAll('.taskdiv');
    var btndiv = document.querySelectorAll('.btnDiv')

    console.log(arr);
    console.log(Listdiv);

    for (let i = 0; i < arr.length; i++) {
        let index = arr.indexOf(input[i].value);

        edit[i].addEventListener("click", function () {
            input[i].removeAttribute("readonly", "");
            if (edit[i].textContent === "Edit") {
                arr.splice(index[i], 1)
                console.log(arr);
                input[i].style.color = "rgb(193, 100, 202)";
                edit[i].textContent = "Save";
                edit[i].style.backgroundColor = "rgb(46, 33, 46)";
            } else {
                arr.splice(index[i], 0, input[i].value)
                console.log(arr);
                edit[i].textContent = "Edit";
                input[i].style.color = "rgb(97, 110, 131)";
                input[i].setAttribute("readonly", "");
                edit[i].style.backgroundColor = "rgba(41, 39, 44, 0.388)";
            }
        })

        deleteButton[i].addEventListener("click", function () {
            arr.splice(index[i], 1)
            console.log(arr);
            alert("Are You Sure you want to delete the task?");
            setTimeout(() => {
                input[i].remove();
                edit[i].remove();
                deleteButton[i].remove();
                done[i].remove();
                Listdiv[i].remove();
                btndiv[i].remove();
            }, 400);
        })

    }

    console.log("loaded");
})