function selectPet(petType){

    // Get the specific pet data set
    var thisPetData = petData[petType];

    // Set the title
    jQuery(".petDisplayName").text(thisPetData.displayName);

    // Empty the specification data
jQuery('.petsDataSpecs').empty();

    // Add the space required, size, weight
    var myString = "<dt>Size</dt><dd>" + thisPetData ['size']+"</dd>";
    jQuery('.petsDataSpecs').append(myString);
    myString = "<dt>Weight</dt><dd>"+thisPetData['weight']+"</dd>";
    jQuery('.petsDataSpecs').append(myString);
    myString = "<dt>Space Required</dt><dd>"+thisPetData['spaceRequired']+"</dd>";
    jQuery('.petsDataSpecs').append(myString);

    
    


    // Add logic to add the trainability and lap size images
    if(thisPetData.trainability == true){
    myString ="<dt>Trainable</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'/></dd>";
    jQuery('.petsDataSpecs').append(myString);

    }
    else{
         myString ="<dt>Trainable</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'/></dd>";
    jQuery('.petsDataSpecs').append(myString);

    }

    if(thisPetData.fitsOnLap == true){
        myString ="<dt>Fits on a lap</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'/></dd>";
    jQuery('.petsDataSpecs').append(myString);

    }
    else{
        myString ="<dt>Fits on a lap</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'/></dd>";
    jQuery('.petsDataSpecs').append(myString);
        
    }
    // Add the foods (may require loop)
    var foods = "<dt>Foods</dt><dd><ul>";
    for (var i = 0; i < thisPetData.foods.length; i++) {
        foods += "<li>"+thisPetData.foods[i]+"</li>";
    }

    jQuery(".petsDataSpecs").append(foods);



    // Update the images

        // Set the main image


        // Empty the thumbnails

        // Add the thumbnails



        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet




jQuery(document).ready(function(){

    // Initial value
    selectPet(jQuery("#petType").val());

    //Update whenever a new value is picked
    jQuery("#petType").on('change',function(){
        var petType = jQuery(this).val();
        selectPet(petType);
    });

});