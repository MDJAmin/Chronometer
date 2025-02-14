"use strict";

let timer;
let isRunning = false;
let centiseconds = 0;
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
  centiseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateTime() {
  centiseconds++;
  if (centiseconds === 100) { 
    centiseconds = 0;
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
  const timeString = `${hours}:${(minutes < 10 ? "0" : "") + minutes}:${
    (seconds < 10 ? "0" : "") + seconds}.${(centiseconds < 10 ? "0" : "") + centiseconds
  }`;
  document.getElementById("display").textContent = timeString;
}

document.getElementById("start").addEventListener("click", startChronometer);
document.getElementById("stop").addEventListener("click", stopChronometer);
document.getElementById("reset").addEventListener("click", resetChronometer);

// const startEl = document.querySelector("#start");
// const stopEl = document.querySelector("#stop");
// const restartEl = document.querySelector("#reset");
// const saveEl = document.querySelector("#save");

// let ss = "00";
// let s = "00";
// let m = "00";

// const stopWatch = () => {
//   h1El.textContent = `${m}:${s}:${ss}`;
//   ss++;
//   if (ss == 99) {
//     s++;
//     ss = 0;
//     if (s == 59) {
//       m++;
//       s = 0;
//     }
//   }
// };

// let z;

// startEl.addEventListener("click", () => {
//   z = setInterval(() => {
//     stopWatch();
//   }, 10);
// });
// stopEl.addEventListener("click", () => {
//   clearInterval(z);
// });

// restartEl.addEventListener("click", () => {
//   ss = "00";
//   s = "00";
//   m = "00";
//   h1El.textContent = `${m}:${s}:${ss}`;
//   h3El.textContent = null;
// });

// saveEl.addEventListener("click", () => {
//   h3El.innerHTML += `<h2>${m}:${s}:${ss}</h2>`;
// });

// const inpEl=document.querySelector('#inp')
// const btnEl=document.querySelector('#btn')

// btnEl.addEventListener('click',()=>{
//     document.body.style.backgroundColor=inpEl.value
// })
