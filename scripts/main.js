// Image Switcher Code

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/x-symbol.png') {
        myImage.setAttribute('src', 'images/o-symbol.png');
    } else {
        myImage.setAttribute('src', 'images/x-symbol.png');
    }
}

// Welcome Message Code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Give me a name, pussball');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = `You're fuckin dead, ` + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = `You're fuckin dead, ` + myName;
}

myButton.onclick = function() {
    setUserName();
}
