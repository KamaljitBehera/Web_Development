let hours=document.querySelector(".hour");
let minutes=document.querySelector(".mintue");
let seconds=document.querySelector(".second");
let hh=0,mm=0,ss=0;
let pause=document.querySelector(".fa-circle-pause");
let play=document.querySelector(".fa-circle-play");
let reset=document.querySelector(".fa-arrow-rotate-right");
let times=null;

function executer(){
    console.log("hello there");
times=setInterval(timer,1000);
}

pause.addEventListener('click',pauseTimer)
play.addEventListener("click",executer);
reset.addEventListener('click',resetTimer);



function timer(){
    if(ss<59){
        ss++;
    }
    else if(ss==59){
        ss=0;
        if(mm<59){
            mm++;
        }
        else if(mm==59){
            mm=0;
            hh++;
        }
    }
    console.log(ss,mm,hh);
    if(ss<10){
        seconds.innerHTML=`0${ss}`;
    }
    else{
        seconds.innerHTML=ss;
    }
    if(mm<10){
        minutes.textContent=`0${mm}`;
    }
    else{
        minutes.innerHTML=mm;
    }
    if(hh<10){
        hours.textContent=`0${hh}`;
    }
    else{
        hours.textContent=hh;
    }
}

function pauseTimer(){
    clearInterval(times);
}
function resetTimer(){
    clearInterval(times);
    ss=0;
    mm=0;
    hh=0;
    seconds.innerHTML=`0${ss}`;
    minutes.innerHTML=`0${mm}`;
    hours.innerHTML=`0${hh}`;
}