const next=document.querySelector(".next");
let prev=document.querySelector(".prev");
 next.addEventListener('click',()=>{
    const items=document.querySelector(".item");
    document.querySelector(".slide").appendChild(items);
    // console.log(item[0]);
    
 });
prev.addEventListener('click',()=>{
   const items=document.querySelector(".item");
   document.querySelector(".slide").appendChild(items);
   // console.log(item[0]);
   
})