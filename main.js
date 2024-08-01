// tack elements form html tags 
const btn = document.querySelectorAll(".box");
const winMsg = document.querySelector(".msg h2");
const msg = document.querySelector(".msg");
const reset = document.querySelector(".reset-btn");
const newGame = document.querySelector(".new-game");

let turn0 = true;

// possiable winPatten 
const winPatten = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

// click and show text 
btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }

        // disable all btn 
        box.disabled = true;
        // check winners 
        checkWinner();
    });
});

// win msg show 
const showWinner = (win) => {
    winMsg.innerText = `Winner - ${win}`;
    msg.classList.remove("hide");
    disableBtn();
}

// checkWinner function 
const checkWinner = () => {
    for (let patten of winPatten) {
        let potn1val = btn[patten[0]].innerText;
        let potn2val = btn[patten[1]].innerText;
        let potn3val = btn[patten[2]].innerText;

        if (potn1val != "" && potn2val != "" && potn3val != "") {
            if (potn1val === potn2val && potn2val === potn3val) {
                showWinner(potn1val);
            }
        }
    }
}


//disable btn
const disableBtn = () => {
    for (let box of btn) {
        box.disabled = true;
    }
}

// activet all btns 
const enableBtn = () => {
    for (let box of btn) {
        box.disabled = false;
        box.innerText = "";
    }
}

// click Reset 
reset.addEventListener("click", () => {
    turn0 = true;
    enableBtn();
});

// click new-game 
newGame.addEventListener("click", () => {
    turn0 = true;
    msg.classList.add("hide");
    enableBtn();
});