
jQuery("#submit").click(function(){
	// Get values

	var a = jQuery("#a").val();
	var b = jQuery("#b").val();

	console.log(a);
	console.log(b);





 // If A > B Show >

 if(a > b){
 	jQuery("#comparison").text(">");
 }



 // If A < B show <
if (a < b){
	jQuery("#comparison").text("<");

}

 ///If A  B Show ==

 if (a == b)
 	{
	jQuery("#comparison").text("==");
  }



});