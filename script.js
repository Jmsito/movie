"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", handleNoClick);

function handleYesClick() {
  titleElement.innerHTML = "YAYYY, I'LL CALL U LATURR :)";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function handleNoClick() {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;
  
  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Baby please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "IIYAK AKO CGE...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  if (typeof image === "string") {
    console.log(`Changing image to img/cat-${image}.jpg`);
    catImg.src = `img/cat-${image}.jpg`;
  } else {
    console.log(`Changing image to img/cat-${image}.jpg`);
    catImg.src = `img/cat-${image}.jpg`;
  }
}

function updateNoButtonText() {
  const message = generateMessage(noCount);
  console.log(`Updating no button text to: ${message}`);
  noButton.innerHTML = message;
}
