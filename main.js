//let hd = document.querySelector('h1');
//hd.textContent = 'Hello world!';
////这是注释标识
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/11.jpg') {
      myImage.setAttribute('src', 'images/firefox.png');
    } else {
      myImage.setAttribute('src', 'images/11.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
	
  myHeading.textContent = 'Hello World，' + myName;
}if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello World，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello World，' + myName;
  }
}
