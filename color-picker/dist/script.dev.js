"use strict";

var title = document.querySelector('h1');
var body = document.body;

function generateRandomColor() {
  var symbols = '0123456789abcdef';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * symbols.length);
    color += symbols[index];
  }

  return color;
}

function setRandomColor() {
  title.innerHTML = generateRandomColor();
  body.style.background = generateRandomColor();
}

body.style.background = generateRandomColor();
title.innerHTML = generateRandomColor();
document.querySelector('button').addEventListener('click', setRandomColor);