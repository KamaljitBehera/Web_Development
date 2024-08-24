let qrInput=document.getElementById("qrtext");
let qrBox=document.getElementById("qrbox");
let qrImage=document.getElementById("qrimg");
let qrbutton=document.getElementById("qrbutton");
qrbutton.addEventListener('click',qrGenerate);

function qrGenerate(){
    let qrText=qrInput.value;
   
    
    if(qrText.length>0){
        console.log(qrText);
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data="+qrText;
        qrBox.style.display="block";
        
    }
    else{
        qrInput.classList.add("error");
        console.log("hey");
        
        setTimeout(() => {
            qrInput.classList.remove("error");
            
        }, 1000);
    }
}
