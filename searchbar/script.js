const spanEl=document.getElementById("search");
const inputEl=document.getElementById("input");
const micEl=document.getElementById("mic");



let vet=spanEl.addEventListener('click',()=>{
inputEl.style.display="block";
micEl.style.display="block";
}
);
spanEl.addEventListener("dblclick",()=>{
    inputEl.style.display="none";
micEl.style.display="none";
}
);