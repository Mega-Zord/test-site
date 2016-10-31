var myImage = document.querySelector('img');

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/dharma-wheel.png') {
		myImage.setAttribute ('src','images/flor-del-loto.png');
	} else {
		myImage.setAttribute ('src','images/dharma-wheel.png');
	}
}

var myButton = document.querySelector('button');

var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Buddhism is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Buddhism is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}