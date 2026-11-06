let gameseq=[];
let userseq=[];

let btns=["pink","red","blue","yellow"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
let startBtn=document.querySelector("#start-btn");

function startGame(){
    if(started == false){
        console.log("game started");
        started = true;
        startBtn.style.display = "none";
        levelUp();
    }
}

document.addEventListener("keypress",function(){
    startGame();
});

startBtn.addEventListener("click",function(){
    startGame();
});

function gameFlash(btn) {
    btn.classList.add("flash");  
    setTimeout(function(){
            btn.classList.remove("flash");
     }, 200);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
            btn.classList.remove("userFlash");
     }, 250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let ranIdx = Math.floor(Math.random()*btns.length );
    let randColor=btns[ranIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    console.log(ranIdx);
    console.log(randColor);
    console.log(randBtn);
    
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);

   
    

}
function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length === gameseq.length){
            setTimeout(levelUp ,1000);
        }
    } else {
        h2.innerText=`GAME OVER!! YOUR SCORE WAS ${level-1} PLEASE START AGAIN`; 
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="azure";
        },200);
        reset();
    }
}





function btnpress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userseq.push(userColor);


    checkAns(userseq.length-1);

}


let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns)
{
btn.addEventListener("click",btnpress);

}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    startBtn.style.display = "inline-block";
}