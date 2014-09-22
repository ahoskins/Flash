/// START EXECUTION                   ///
///                                   ///
///                                   ///
// Initiate the timer                 ///
var timer = new Timer();

// Counter for letters displayed
var node = 0;

// Game status
var in_game = true;

// Point tracker
var total_points = 0;

// Time between
var previous_node_time;

// More time message is by default hidden
$("#more-time").hide();

// Listen for the begin button 
var begin_button = document.getElementById("begin");

begin_button.addEventListener("click", openingScreen, false);

// Listener for checking the keyentered
window.addEventListener("keypress", function(e) {
	// Compare keypressed to current character node
	var entered = String.fromCharCode(e.keyCode);
	var displayed = document.getElementsByClassName('char-on-screen');
	if (entered == displayed[node].textContent && in_game){
		// Hide the displayed node
		displayed[node].style.display = 'none';

		// Increment the node number for next time
		node++;

		if (timer.count - previous_node_time < 700) {
			timer.count = timer.count - 2000;
			$("#more-time").fadeIn("slow").fadeOut("slow");
		}
		// Cache for next time
		previous_node_time = timer.count;

		// Add points
		total_points = total_points + 5;

		// Append another if time remaining
		if (timer.count < 10000){
			appendChar();
		}
	}
	else {
		total_points = total_points - 2;
	}
}, false);

// Continuously check if timer expired
setInterval(function(){
	if (timer.count > 10000 && in_game) {
		// Stop updating timer
		clearInterval(in_game_timer);
		
		// hide timer
		$("#clock").hide();

		// Display results
		displayPoints();
		displayCharactersGiven();

		in_game = false;
	}
}, 10);

// Business logic for timer
var in_game_timer = setInterval(function() {
	document.getElementById("clock").textContent = Math.round((10 - (timer.count / 1000)) * 10) / 10;
}, 100)

