let bodyEl=document.querySelector("body");

bodyEl.addEventListener("mousemove",(event)=>{
    let x=event.offsetX;
    console.log(x);
    let y=event.offsetY;
    
    console.log(y);
    let spanEl=document.createElement("span");
    bodyEl.appendChild(spanEl);
    console.log(spanEl);
    spanEl.classList.add("parent");
    spanEl.style.top=`${y}px`;
    spanEl.style.left=`${x}px`;
    let random=Math.random()*100;
    spanEl.style.width=`${random}px`;
    spanEl.style.height=`${random}px`;
    console.log(random) ;
    setTimeout(() => {
        spanEl.remove();
    }, 3000);



    
})