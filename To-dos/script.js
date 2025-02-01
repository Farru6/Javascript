let userText = document.querySelector(".user-text");
let submitButton = document.querySelector(".btn");
let toDos = document.getElementById("todos");
let toDo = document.getElementById("todo");
let check = document.getElementById("checkbox");
let deletebtn = document.querySelector(".dltbtn");

function cloneDiv(text) {
  //cloning existing div
  let clonedDiv = toDo.cloneNode(true);
  clonedDiv.style.display = "block";

  let clonedText = clonedDiv.querySelector(".text");
  clonedText.innerText = text;

  let clonedCheck = clonedDiv.querySelector("#checkbox");
  clonedCheck.addEventListener("change", () => {
    //if(clonedCheck.checked === true){
    //clonedCheck.disabled = true;
    //}
    clonedText.classList.toggle("completed");
  });

  //each clone has its delete button
  let clonedDeleteBtn = clonedDiv.querySelector(".dltbtn");
  clonedDeleteBtn.addEventListener("click", () => {
    toDos.removeChild(clonedDiv);
    clonedText.innerText = "";
  });
  toDos.appendChild(clonedDiv);
}

submitButton.addEventListener("click", () => {
  if (userText.value === "") {
    alert("Please enter your ToDo first.");
  } else {
    let text = userText.value;
    userText.value = "";
    cloneDiv(text);
  }
});
