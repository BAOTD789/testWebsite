let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    let div = document.getElementById("div");
    let text = "";
    
    if(mySrc === 'images/ludwig-face.jpg'){
        myImage.setAttribute('src', 'images/lud2.jpg');
        text += "That's not very pogChamp. Click on me again.";
    } else {
        myImage.setAttribute('src', 'images/lud1.jpg'); 
        text += "Better... Good Job";
    }
    div.innerHTML = text;
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter a title.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName;
}

myButton.onclick = function() {
    setUserName();
}