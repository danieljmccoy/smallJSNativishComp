let elem = document.getElementById('target');
let text = "Hope you have a colorful day";

let curr = 0;

function colorWords(){

    let randomChars = document.createElement("span");

    randomChars.textContent = randomChars.textContent + text.charAt(curr);
    randomChars.style.fontSize = "40px";
    randomChars.style.color += randomColor();

    elem.appendChild(randomChars);

    curr++;


    if (curr < text.length)
        window.setTimeout(colorWords, 100);
};

colorWords() 

function randomColor(){
	//pick a "red" from 0 - 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}