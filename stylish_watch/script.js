let hh=document.getElementById("hours");
let mm=document.getElementById("mins");
let ss=document.getElementById("secs");
 let getTimes=()=>{
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    hh.innerText=`${h}`;
    mm.innerText=`${m}`;
    ss.innerText=`${s}`;
    ss.classList.add("animate");

 };
 setInterval(getTimes,1000);
// getTimes();
 