var imgbox=document.querySelector(".imgbox");
var imgwrap=document.querySelector(".imgwrap");
var originalimg=document.getElementById("original");
var line=document.getElementById("line");

var leftSpace=imgbox.offsetLeft;
originalimg.style.width=imgbox.offsetWidth+"px";

imgbox.onmousemove=function (e){
var boxwidth=(e.pageX-leftSpace)+"px";
imgwrap.style.width=boxwidth;
line.style.left=boxwidth;
}