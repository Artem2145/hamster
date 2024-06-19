let counter = 0;
let clicksPerMinute = 0;
const maxClicksPerMinute = 50;

let title = document.createElement("h1");
title.textContent = `Ти нажал ${counter} раз`;

let level = 1;

let para = document.createElement("p");
para.textContent = `Уровень ${level}`;

let button = document.createElement("button");
button.textContent = "Нажать";

button.onclick = function () {
  counter++;
  title.textContent = `Ти нажал ${counter} раз`;
  if (clicksPerMinute < maxClicksPerMinute) {
    clicksPerMinute++;
    if (counter >= 10) {
      document.body.classList.add("new-class");
      level = 2;
      para.textContent = `Уровень ${level}`;
    }
    if (counter >= 30) {
      level = 3;
      para.textContent = `Уровень ${level}`;
    }
    if (counter >= 50) {
      level = 4;
      para.textContent = `Уровень ${level}`;
    }
    if (counter >= 100) {
      level = 5;
      para.textContent = `Уровень ${level}`;
    }
    if (counter >= 150) {
      level = 6;
      para.textContent = `Уровень ${level}`;
    }
  }
  else{
    alert("Вы превысили лимит нажатий в пол минуту!");
  }
};

document.body.append(title);
document.body.append(para);
document.body.append(button);

setInterval(() => {
  clicksPer30Seconds = 0;
}, 30000);
