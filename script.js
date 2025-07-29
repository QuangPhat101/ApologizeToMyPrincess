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

noButton.addEventListener("click", function () {
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
});

function handleYesClick() {
  titleElement.innerHTML = 
    "Anh thương em bé của anh nhiều lắm, dù bây giờ mình hong còn quen nữa nhma bé lúc nào cũng là người quan trọng của anh hết nên anh sẽ nghe lời em bé<br>" +
    "Anh chỉ đáng ghét thui chứ anh chưa bao giờ làm gì gian dối với em bé hết, anh hứa sẽ hong làm gì cho em bé hong vui nữa đouuu <3";
  
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Hong thèm tha cho người hong nghe lời",
    "Nhma anh biết anh hong nghe lời em bé là anh sai òi :((",
    "Anh là đồ mập đáng ghét hong nghe lời em bé nói",
    "Mong em bé tha lỗi choo anhh lần này :((",
    "Anh sẽ hong làm những thứ mà em bé hong cho nữa đâu",
    "Anh iu bé nhắm nhắm ",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
