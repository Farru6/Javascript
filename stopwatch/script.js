let hour = document.querySelector("#hr");
let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");
let counts = document.querySelector("#count");
const button = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
let stopwatch;
let count = 0;
let second = 0;
let minute = 0;
let hr = 0;

button.innerText = "START";

function startWatch() {
  stopwatch = setInterval(() => {
    count++;
    counts.innerText = count;

    if (count % 100 === 0) {
      count = 0;
      second++;
      seconds.innerText = second;
      if (second % 59 === 0) {
        second = 0;
        minute++;
        minutes.innerText = minute;
        if (minute % 59 === 0) {
          minute = 0;
          hr++;
          hour.innerText = hr;
        }
      }
    }
  }, 10);
}

function stopWatch() {
  clearInterval(stopwatch);
}

function resetWatch() {
  clearInterval(stopwatch);
  count = 0;
  second = 0;
  minute = 0;
  hr = 0;

  counts.innerText = "00";
  seconds.innerText = second + "0";
  minutes.innerText = minute + "0";
  hour.innerText = hr + "0";
}

button.addEventListener("click", () => {
  if (button.innerText === "START") {
    button.innerText = "STOP";
    startWatch();
  } else if (button.innerText === "STOP") {
    button.innerText = "START";
    stopWatch();
  }
});

resetButton.addEventListener("click", () => {
  button.innerText = "START";
  resetWatch();
});
