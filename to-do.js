let arrayItems=[];

function addTask() {
    let input = document.getElementById("todo");
    let full = document.getElementById("total");
    // full.className="box";
    let tasks = input.value;
    arrayItems.push(tasks);

    localStorage.setItem('todoList',(arrayItems));
    console.log(arrayItems);
    sessionStorage.setItem('todoList',(arrayItems));
    console.log(arrayItems);

    if (tasks.trim()!== " ") {
        let store = document.createElement("div");
        full.appendChild(store);
        // console.log(tasks);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className="check";
        document.addEventListener("click",
            function () {
                if (checkbox.checked) {
                    list.style.textDecoration = "line-through black";
                    // store.style.backgroundColor = "rgb(200,200,238)";
                    store.style.backgroundColor="white";

                }
                else {
                    list.style.textDecoration = "none";
                    store.style.backgroundColor = "white";
                }
            }
        )
        store.appendChild(checkbox);

        let list = document.createElement("div");
        list.innerHTML = tasks;
        store.appendChild(list);
        store.className="box";
        // console.log(list);

        let delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.innerHTML = "del";
        delBtn.className="delbutton";
        store.appendChild(delBtn);
        delBtn.addEventListener("click",
            function () {
                if (checkbox.checked) {
                    full.removeChild(store);
                }
                else {
                    alert("Click the checkBox before you delete,,");
                }
            });
    }
    else {
        alert("Enter something");
    }
    input.value = " ";
};
