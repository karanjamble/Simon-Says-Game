let gameSeq=[];
let userSeq=[];

let btns=["red","green","yellow","purple"];

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;

        levelUp();
    }

})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}


function levelUp(){
    userSeq = [];
    level++;
    h3.innerText=`Level ${level}`

    let randIdx=Math.floor(Math.random()*4);
    let randCol=btns[randIdx];
    let randBtn=document.querySelector(`.${randCol}`)

     gameFlash(randBtn);

     gameSeq.push(randCol);
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    let userCol=btn.getAttribute("id");
    userSeq.push(userCol);
    checkAns();
}

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function checkAns(){
    let idx = userSeq.length - 1;

    if(userSeq[idx] !== gameSeq[idx]){
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> press any key to restart game`;
        document.querySelector("body").style.color = "red";
        setTimeout(function(){
            document.querySelector("body").style.color = "";
        },150);
    }
    else if(userSeq.length === gameSeq.length){
        setTimeout(levelUp,1000);
    }
}