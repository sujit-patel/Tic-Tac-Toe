const btn = document.querySelectorAll(".box");
const reset = document.querySelector(".reset-btn");

let turn0 = true;
// const winPatten = [
//     [0,1,2],[3,4,5],[6,7,8],
//     [0,3,6],[1,4,7],[2,5,8],
//     [0,4,8],[2,4,6],
// ];

btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled =true;
    });
});
