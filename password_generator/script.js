const length = document.getElementById("number_taker");
const butt = document.querySelector(".btn");
let parent=document.querySelector(".container");

butt.addEventListener("click", generatePassword);
const display=document.createElement('div');
display.classList.add('disPass');
function generatePassword() {



  let strUcas = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let strArr = [
    // Lowercase letters
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",

    // #Uppercase letters
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",

    // #Digits
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",

    // #Special characters
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
    "\\",
    "|",
    "`",
    "~",
  ];

  let passLength = parseInt(length.value);

  let passWord = "";
  IndexForStrUcas = Math.floor(Math.random() * strUcas.length);

  passWord = passWord + strUcas[IndexForStrUcas];
  console.log(passWord.length);

  while (passWord.length < passLength) {
    IndexForStrarr = Math.floor(Math.random() * strArr.length);
    passWord = passWord + strArr[IndexForStrarr];
  }
  console.log(passWord);
    display.innerText=passWord;
    parent.appendChild(display);
}

display.addEventListener('click',()=>{
  navigator.clipboard.writeText(display.innerText);
  alert("text copied succesfully");
});
