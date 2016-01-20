//Code to turn on/off laser lights
$('.flash').click(function() {
	$('.brain').toggleClass('on-off-laser-eyes');
});

// When color is clicked...
$('.color').click(function() {
  // Assign each named color a random number 0-255
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);

	// Generate an RGBA value from red, green and blue
	var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
	
	// Display the RGBA values in an alert window
	//alert(randomRGBA);
	
	$("body").css("background", randomRGBA);
});

