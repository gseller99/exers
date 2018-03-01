// const myHeading = document.getElementById('myHeading');
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');
// const resetToBlack = document.getElementById('resetToBlack');

// myButton.addEventListener('click', () => {
// 	myHeading.style.color = myTextInput.value;
// });

// resetToBlack.addEventListener('click', () => {
// 	myHeading.style.color = 'purple';
// });

// something
function randomNumber(upper) {
	return Math.floor (Math.random() * upper) + 1;
}

var counter = 0;
while (counter < 1000) {
	var randNum = randomNumber(6);
	document.write('<p> '+ randNum + ' </p>');
	counter += 1;
};