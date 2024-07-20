let dob=document.getElementById("input_filed1");
dob.max=new Date().toISOString().split("T")[0];

let button=document.querySelector(".btn");

let res=document.querySelector(".result");
function contDay(y1,m1){
return new Date(y1,m1,0).getDate();
}
button.addEventListener("click",()=>{
   let userDate=new Date(dob.value);
   let y1,m1,d1;
   d1=userDate.getDate();
   m1=userDate.getMonth()+1;
   y1=userDate.getFullYear();
   contDay(y1,m1);
   let y2,m2,d2;
   
   let curDate=new Date();
   d2=curDate.getDate();
   m2=curDate.getMonth()+1;
   y2=curDate.getFullYear();
   let y3,m3,d3;
   y3=y2-y1;
   if(m2>=m1){
    m3=m2-m1;
   }
   else{
    y3--;
    m3=m2-m1+12;
   }
   if(d2>=d1){
    d3=d2-d1;
   }
   else{
    m3--;
    d3=d2-d1+contDay(y1,m1);
   }
   res.innerHTML=`You Age is ${y3}year ${m3}months and ${d3}days`;
});
