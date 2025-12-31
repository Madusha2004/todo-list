const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === "") {
        alert("You must Write Something!");

    } else {

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";/*cross icon*/
        li.appendChild(span);
    }
    inputBox.value = "";/* input value wont display in the search bar after that value added to the todo list */
    saveDate();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDate();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); /*parent Element is the List element */
        saveDate();
    }


}, false);

function saveDate() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {/*to display save data when the browser is opened */
    listContainer.innerHTML = localStorage.getItem("data");/* this will give all the content that was saved in the browser in the name of "data".*/
}
showTask();

