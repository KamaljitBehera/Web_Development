        let bt1=document.getElementById("btn1");
        let bt2=document.getElementById("btn2");
        let div1=document.querySelector(".div");
        let hex1="#008000";
        let hex2="#0000ff";
        let handleEvent=()=>{
            let Nums="0123456789abcdef";
            let hexNums="#";
            for(let i=0;i<6;i++){
                hexNums=hexNums+Nums[Math.floor(Math.random()*16)];
            }
          return hexNums;
        };
        let handleEvents=()=>{
            hex1=handleEvent();
            bt1.textContent=`${hex1}`;
            document.body.style.backgroundImage=`linear-gradient(to right,${hex1},${hex2})`;
            div1.innerHTML=`background-image: linear-gradient(to right ,${hex1},${hex2})`;

        };
        let handlesEvents=()=>{
            hex2=handleEvent();
            bt2.textContent=`${hex2}`;
            document.body.style.backgroundImage=`linear-gradient(to right,${hex1},${hex2})`;
            div1.innerHTML=`background-image: linear-gradient(to right ,${hex1},${hex2})`;

        };
        bt1.addEventListener('click',handleEvents);
        bt2.addEventListener('click',handlesEvents);


        

        div1.addEventListener('click',()=>{
            navigator.clipboard.writeText(div1.innerText);
            alert("text copied succesfully");
        });
