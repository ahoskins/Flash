function displayPoints() {
	// Display score
		var score = document.createElement("span");

		// Don't display negative total points
		if (total_points < 0) {
			total_points = 0;
		}

		score.textContent = 'Score: ' + total_points;
		score.style.fontSize = "40px";
		score.style.fontFamily = "Courier New";
		//score.style.position = "absolute";
		document.body.appendChild(score);

}

function displayCharactersGiven() {
		// Display characters given
		var characters_given = document.createElement("ul");
		characters_given.style.fontSize = '40px';
		characters_given.style.fontFamily = "Courier New";
		var all_displayed = document.getElementsByClassName('char-on-screen');
		for (var i = 0; i < node; i++) {
			characters_given.innerHTML += '<li>' + all_displayed[i].textContent + '</li>';
		}
		document.body.appendChild(characters_given);
}