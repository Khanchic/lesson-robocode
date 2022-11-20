function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNum = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDest = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
btnCreate.addEventListener("click", createBoxes);

console.log("Hello world");
// function createBoxes(e) {
//   console.log(boxes);
//   const childrenNum = boxes.childNodes.length;
//   let width = 30 + 10 * childrenNum;
//   let height = 30 + 10 * childrenNum;
//   for (let i = 1; i <= inputNum.value; i++) {
//     const hexColor = getRandomHexColor();
//     boxes.insertAdjacentHTML(
//       "beforeend",
//       `<div style="background-color:${hexColor}; width: ${width}px; height:${height}px;"> </div>`
//     );
//     width += 10;
//     height += 10;
//   }
// }
btnDest.addEventListener("click", (e) => {
  boxes.innerHTML = "";
});
