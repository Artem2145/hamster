let counter = 0;

let title = document.createElement("h1");
title.textContent= `Ти нажал ${counter} раз`;

let button = document.createElement("button");
button.textContent = "Нажать";


button.onclick = function () {
  counter++;
  title.textContent = `Ти нажал ${counter} раз`;
};

document.body.append(title);
document.body.append(button);
