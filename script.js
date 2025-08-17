"use strict";

let timer;
let isRunning = false;
let hundredthsOfSecond = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startChronometer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
  }
}

document.getElementById("stop").disabled = true;
function stopChronometer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
  }
}

function resetChronometer() {
  stopChronometer();
  hundredthsOfSecond = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateTime() {
  hundredthsOfSecond++;
  if (hundredthsOfSecond === 100) {
    hundredthsOfSecond = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const timeString = `${hours}:${(minutes < 10 ? "0" : "") + minutes}:${(seconds < 10 ? "0" : "") + seconds}.${(hundredthsOfSecond < 10 ? "0" : "") + hundredthsOfSecond
    }`;
  document.getElementById("display").textContent = timeString;
}

document.getElementById("start").addEventListener("click", startChronometer);
document.getElementById("stop").addEventListener("click", stopChronometer);
document.getElementById("reset").addEventListener("click", resetChronometer);
