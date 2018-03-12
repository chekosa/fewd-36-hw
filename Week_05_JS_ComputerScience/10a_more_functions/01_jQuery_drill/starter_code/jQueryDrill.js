jQuery(document).ready(function(){

    //When the concat button is clicked, combine the two strings and output the result
jQuery("#concatButton").on('click', function(e){
	e.preventDefault();
	var inputOne = jQuery ("#concatOne").val();
	var inputTwo = jQuery ("#concatTwo").val();

	jQuery("#concatResult").text(inputOne+inputTwo);

});

    // When the add20Button is clicked, get the value of the input, add 20 and place in add20Output
   jQuery("#add20Button").on('click', function(e){
   	e.preventDefault();
   	var inputA = jQuery ("#add20Input").val();
   	var inputB = 20+ parseFloat(inputA);

   	jQuery("#add20Output").text(inputB);


   });

    // When the appendButton is clicked, get the value of the input, wrap in <p> tags and append it to the appendOutput
    jQuery("#appendButton").click(function(e){
    	e.preventDefault();
        var appendText = "<p>"+ jQuery("#appendInput").val() + "</p>";
        jQuery("#appendOutput").append(appendText);
    });

});