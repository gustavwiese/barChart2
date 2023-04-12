"use strict";

window.addEventListener("load", start);

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 1, 2, 3, 4, 5, 6, 7, 8]

function start() {
  console.log("JavaScript Kører!");

  const bars = document.querySelectorAll(".bar");
  const firstBar = bars[0];
  const height = data[0] / 32 * 100;

  firstBar.style.height = `${height}px`;
}
