"use strict";

window.addEventListener("load", start);

function start() {
  console.log("JavaScript Kører!");

  const bars = document.querySelectorAll(".bar");
  const firstBar = bars[0];
  const height = 50

  firstBar.style.height = `${height}px`

}
