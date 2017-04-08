$(document).ready(function() {

	var target = "";
	var score = "";
	var wins = 0;
	var losses = 0;
	var c_value = [];

	// calls start function on load
	window.onload = function() {
		start();
	}

	// reset, calls start function after a win or loss
	function reset () {
		start();
	}

	// start, called on load to generate target score and crystal values
 	function start () {

		var target = Math.floor(Math.random() * ( 120 - 19)) + 19;
		console.log(target);

		var values = Math.floor(Math.random() * ( 12 - 1)) + 1;

		console.log(values);

	}
});