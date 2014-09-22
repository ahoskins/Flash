// FUNCTIONS
//
//
//
function openingScreen() {
	//change background to random color
	var color_array = ["C5AAF5","A3CBF1","79BFA1","F5A352","FB7374","423C40"];
	var random_color = color_array[Math.floor(Math.random() * 6)];
	document.body.style.background = '#' + random_color;

	//remove elements from the welcome page
	var textList = document.querySelectorAll(".Welcome");
	var containerEl = textList[0].parentNode;
	for (var i = 0; i < textList.length; i++) {
		containerEl.removeChild(textList[i]);
	}

	//append instructions
	var instructions = document.createElement("span");
	instructions.style.fontSize = "40px";
	instructions.style.fontFamily = "Courier New";
	instructions.textContent = "Keep the characters off the screen.  You have 10 seconds.  Missed key pushes reduce points."
	document.body.appendChild(instructions);

	in_game = true;

	setTimeout(function(){
		document.getElementById("clock").style.display = "inline";
		timer.Start();
		instructions.style.display = 'none';
		appendChar();
	}, 3000);
	
}

// Append char to random spot on screen
function appendChar() {
	var fullWidth = window.innerWidth * 0.95;
	var fullHeight = window.innerHeight * 0.95;

	// Create node for char
	var elem = document.createElement("span");
	elem.className = "char-on-screen";
	elem.style.fontSize = '40px';

	// Generate random char
	elem.textContent = possibleChar();

	// Append char to node
	elem.style.position = "absolute";
	elem.style.left = Math.round(Math.random() * fullWidth) + "px";
	elem.style.top = Math.round(Math.random() * fullHeight) + "px";
	elem.style.color = 'white';
	document.body.appendChild(elem);

	var color_array = ["C5AAF5","A3CBF1","79BFA1","F5A352","FB7374","423C40"];
	var random_color = color_array[Math.floor(Math.random() * 6)];
	document.body.style.background = '#' + random_color;
}

function possibleChar() {
	var possibilities = "abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ23456789!@#%&";
	var selection = "";
	selection = possibilities[Math.floor(Math.random() * possibilities.length)];
	return selection; 
}