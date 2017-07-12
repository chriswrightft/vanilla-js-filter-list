'use strict';
const filterList = (inputBoxID, listItemClass, defaultMessage) => {
    // assign the input element to a variable
    const inputBox = document.getElementById(inputBoxID);

    // alphabet array
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    const filterListClick = event => {
        // on each click the value in the search box will be asssigned to a variable
        let inputText = event.target.value.toLowerCase();
        let countHeaders = 0;

        // Start a loop through each letter
        alphabet.forEach(letter => {
         let countItems = 0;

            // Gather all the a links within the list items for each letter
            let items = document.querySelectorAll('ul li.'+listItemClass+'#'+letter+' a');

            // determine how many items are in this letter
            let itemsAmount = items.length;

            // loop through the list item a tags to change the display style
            // when match or fail to match the input field
            items.forEach(item => {
                if(item.innerHTML.toLowerCase().includes(inputText)){
                    // keep the items visible
                    item.parentNode.style.display = "";
                }else{
                   // change the display to none so they disapear
                   // and are removed from the DOM
                   item.parentNode.style.display = "none";
                   // incrament how many items have been made invisible
                   countItems++;
               }
           });

            // if all the items for this letter are invisible
            // make the header letter invisible and removed from the DOM
            if(countItems === itemsAmount){
                document.getElementById(letter).style.display = "none";
                countHeaders++;
            }else{
                document.getElementById(letter).style.display = "";
            }
        });

        // If all the headers are invisible
        // make the default mesage visible
        if(countHeaders === alphabet.length){
            document.getElementById(defaultMessage).style.display = "";
        }else{
            document.getElementById(defaultMessage).style.display = "none";
        }
    };

    // add an event listener for when users start searching
    inputBox.addEventListener("keyup", filterListClick);
};