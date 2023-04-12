"use strict";

window.addEventListener("load", start);

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8,
  7, 6, 5, 4, 3, 2, 1, 1,
];

function start() {
  console.log("JavaScript Kører!");
  displayData();
}

function displayData() {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < 40; i++) {
    const currentBar = bars[i];
    const height = (data[i] / 32) * 100;

    currentBar.style.height = `${height}px`;
  }
}
