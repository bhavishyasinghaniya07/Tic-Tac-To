let btn = document.querySelectorAll(".Btn");
let reset = document.querySelector(".reset");
let winner = document.querySelector(".winner");
let neww = document.querySelector(".newx");
let msg = document.querySelector(".msg");


let turnO = true;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

btn.forEach((Btn) => {
    Btn.addEventListener("click", () => {
        if(turnO) 
        {
            Btn.innerText = "O";
            turnO = false;
        }
        else{
            Btn.innerText = "X";
            turnO = true;
        }
        Btn.disabled = true;

        checkwin();
        
    }
);
});

const dis =() => {
    for(let Btn of btn) {
        Btn.disabled = true;

    }
}

const ena =() => {
    for(let Btn of btn) {
        Btn.disabled = false;
        Btn.innerText ="";
    }
}

const resetGame = () => {
    turnO = true;
    ena();
    winner.classList.add("hide");
}

const show = (winn) => {
    msg.innerText = `Congratulations , Winnner is ${winn}`
    winner.classList.remove("hide");
    dis();

};

const checkwin = () => {
    for(let pattern of win) {
        let p1 = btn[pattern[0]].innerText;
        let p2 = btn[pattern[1]].innerText;
        let p3 = btn[pattern[2]].innerText;
    

    if(p1 != "" && p2 != "" && p3 != "")
    {
        if(p1===p2 && p2===p3)
        {
           show(p1);
        }
    }
}
};

neww.addEventListener("click", resetGame);
reset.addEventListener("click",resetGame);