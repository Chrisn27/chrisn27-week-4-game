$(document).ready(function() {

	var score = 0;
	var wins = 0;
	var losses = 0;
	var target = [];
	var pups = ["assets/images/pup1.jpg", "assets/images/pup2.jpg", "assets/images/pup3.jpg", "assets/images/pup4.jpg"]
	
	// calls start function on load
	window.onload = function() {
		start();
	}

	// resets score to 0, rerolls puppy values, empties puppy div
	function reset () {
		score = 0;
		target = [];
		$("#puppies").empty();
		$("#current_score").empty();
		$("#current_score").html("Your total score is: 0");
		start();
	}

// starts the game, called on page load the first time
function start() {

		// selects a number between? 19-120
		var random = Math.floor(Math.random() * ( 121 - 19)) + 19;
		target.push(random);
		$("#target_score").html("Target Score: " + target[0]);
		$("#target_score").css("font-weight", "bold");
		$("#wins").html("Wins: " + wins)
		$("#losses").html(" Losses: " + losses)

		// console.log(target);

	// creates 4 images of the same dang puppy and prints 4 different values for the puppys
 
		for (var i = 0; i < pups.length; i++) {

		var pupImage = $("<img>");

		pupImage.addClass("puppy_image");

		var c_value = Math.floor(Math.random() * ( 12 - 1)) + 1;

		pupImage.attr("src", pups[i]);

		pupImage.attr("puppy_value", c_value);

		$("#puppies").append(pupImage);

	}

		// onclick for the puppy, adds to score
		$(".puppy_image").on("click", function() {

		var puppyValue = ($(this).attr("puppy_value"));
	    puppyValue = parseInt(puppyValue);
	    score += puppyValue;
	    $("#current_score").html("Your total score is: " + score);
	    
	    // win condition
	    if (score === target[0]) {
	    	alert("You win!");
	    	wins++;
	    	reset();
	    }

	    if (score >= target[0]) {
	    	alert("You lose!");
	    	losses++;
	    	reset();
	    }
	    	
    })
}

});



