let leftSide = document.querySelector("#left");
let rightSide = document.querySelector("#right");

leftSide.addEventListener("dragstart", function (e) {
  let selected = e.target;
  rightSide.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  rightSide.addEventListener("drop", function (e) {
    rightSide.appendChild(selected);
    leftSide.removeChild(selected);
    selected = null;
  });
});

rightSide.addEventListener("dragstart", function (e) {
  let selected = e.target;
  leftSide.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  leftSide.addEventListener("drop", function (e) {
    leftSide.appendChild(selected);
    rightSide.removeChild(selected);
    selected = null;
  });
});