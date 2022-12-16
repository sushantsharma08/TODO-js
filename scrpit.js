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
    // new input feild
    var input = document.createElement("input");
    input.className= `input${taskcounter}`
    input.type = "text";
    input.setAttribute('readonly', '');
    input.value = newTodoItem.value;
    // buttons of task
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


    let index = arrayOfLists.indexOf(input.value);


    editBTN.addEventListener("click", function () {
        input.removeAttribute("readonly", "");
        if (editBTN.textContent === "Edit") {
            arrayOfLists.splice(index,1)
            console.log(arrayOfLists);
            input.style.color = "rgb(193, 100, 202)";
            editBTN.textContent = "Save";
            editBTN.style.backgroundColor = "rgb(46, 33, 46)";
        } else{         
            arrayOfLists.splice(index,0,input.value)
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
    // document.write(localStorage['content']);
   innerdiv= localStorage['content'];
//    let arr=localStorage[[array]];
   let arr=JSON.parse(localStorage.getItem('array'));
   console.log(typeof(arr));
    document.querySelector('.container').innerHTML=innerdiv;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        console.log(typeof(arr[i]));
        console.log(`input${i}`);
        document.querySelector(`.input${i}`).value=arr[i]
    }
    // document.querySelector(`.input0`).style.backgroundColor="red"
    console.log("loaded");
})
