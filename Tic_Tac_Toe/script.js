let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newbtn = document.querySelector(".btn");
let msg = document.querySelector(".msg");
let msg2 = document.querySelector(".msg2");
let main = document.querySelector(".main");
let countbtn = document.querySelector(".count");

let turn_O = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  msg2.classList.add("hide");
  main.classList.remove("hide");
  turn_O = true;
  enableboxes();
  msg.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn_O === true) {
      //player0
      box.classList.add("color");
      box.innerText = "O";
      turn_O = false;
    } else {
      box.classList.remove("color");
      box.innerText = "X";
      turn_O = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkwinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (count != 9) {
      if (pos1val != "" && pos2val != "" && pos3val != "") {
        if (pos1val === pos2val && pos2val === pos3val) {
          showwinner(pos1val);
        } else if (pos1val != pos2val && pos2val != pos3val) {
          countbtn.classList.remove("hide");
          count++;
          resetgame();
        }
      }
    } else {
      main.classList.add("hide");
      msg2.classList.remove("hide");
    }
  }
};

const showwinner = (winner) => {
  msg.innerText = "Congratulations, winner is " + winner;
  main.classList.add("hide");
  msg.classList.remove("hide");
  disableboxes();
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
