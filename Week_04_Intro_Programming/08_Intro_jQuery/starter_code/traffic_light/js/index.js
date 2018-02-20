//Implement the red light using jQuery. Don't forget to add the script tags.


// Clear All Lights


// Red
function illuminateRed() {

	// Clear all Lights
	jQuery(".bulb").css("background","black");
	//Light Red
	jQuery("#stopLight").css("background","red");

}	

// Yellow
function illuminateYellow() {

	// Clear all Lights
	jQuery(".bulb").css("background","black");
	//Light Yellow
	jQuery("#slowLight").css("background","Yellow");

}	

// Green
function illuminateGreen() {

	// Clear all Lights
	jQuery(".bulb").css("background","black");
	//Light Green
	jQuery("#goLight").css("background","Green");

}	


// Green
jQuery("#stopButton").click(illuminateRed);
jQuery("#slowButton").click(illuminateYellow);
jQuery("#goButton").click(illuminateGreen);