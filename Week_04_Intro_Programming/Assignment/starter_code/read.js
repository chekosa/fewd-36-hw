jQuery(document).ready(function(){


// What needs to happen
//jQuery('readmore').hide();


// When Read More is clicked show more
function readmore(){
	jQuery('#show-this-on-click').slideDown();
	jQuery('.readmore').hide();
    jQuery('.readless').show();
}


//When Read less is clicked show less
function readless(){
	jQuery('#show-this-on-click').slideUp();
	jQuery('.readless').hide();
    jQuery('.readmore').show();
}

// Bind functions to clicks
jQuery(".readmore").click(readmore);
jQuery(".readless").click(readless);

});