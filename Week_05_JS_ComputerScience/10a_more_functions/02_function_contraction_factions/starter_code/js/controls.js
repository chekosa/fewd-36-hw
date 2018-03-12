

// This function will get the values of the two word forms, pass them to the compare function the update the display output

function conjunctionFormChecking(){

    // Create output variables
    var contractionFound = "";
    var logEntry = "";

    // Get words from search forms
    var wordOne = jQuery("#firstWord").val();
    var wordTwo = jQuery("#secondWord").val();

    // Create phrase to test by combining wordOne and wordTwo with a space

        // Test phrase

        var testPhrase = wordOne + " " + wordTwo;


        // if Test Phrase returns false search phrase with words in reverse order
        var results = checkForConjunction(testPhrase);
        if(results == false){
            testPhrase = wordTwo + " " + wordOne;
            results = checkForConjunction(testPhrase);
            
        }


    // If return is true
        if(results != false){
            contractionFound = results;
            logEntry = "<p>"+wordOne+" "+ wordTwo+"</p>";
        }
        else { 
            contractionFound = "contractionnotFound";
            logEntry = "<p>"+wordOne+" "+ wordTwo+" Not Found</p>";

        }

            // Set the output variable to the result


            // Set the log variable to wordOne wordTwo and the contraction


            // Set the output variable to "None Found"

            // Set the log variable to wordOne wordTwo and no contraction wrapped in paragraph tags


        // Update contractionResult

        jQuery("#contractionResult").text(contractionFound);

        // Add wordOne + wordTwo + result to log
        jQuery(".playAreaResultsLog").append(logEntry);


        // Empty wordOne

        // Empty wordTwo


} // end conjunctionFormChecking





function resetAllForms(){

    //Empty Result
    jQuery("#contractionResult").empty();

    // Empty wordOne
    jQuery("#firstWord").val("");

    // Empty wordTwo
    jQuery("#secondWord").val("");

    // Empty the log
    jQuery(".playAreaResultsLog").empty();

} // resetAllForms




jQuery( document ).ready(function() {

        // Bind conjunctionFormChecking to button

        jQuery("#btnCheckConjunction").click(function(e){
            e.preventDefault();
            conjunctionFormChecking();
        });

        // Bind reset to button
        jQuery("#btnReset").click(function(e){
            e.preventDefault();
            resetAllForms();
        });



});