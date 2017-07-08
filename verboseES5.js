var filterList = function(inputBoxID, listItemClass){
    // assign the input element to a variable
    var inputBox = document.getElementById(inputBoxID);

    // add an event listener for when users start searching
    inputBox.addEventListener("keyup", filterListClick);

    // alphabet array
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    function filterListClick(event){

        var hiddenHeader = 0;

        // Gather all the a links within the list items
        var listLi = document.querySelectorAll('ul li.'+listItemClass+' a');

        // on each click the value in the search box will be asssigned to a variable
        var inputText = event.target.value.toLowerCase();

        // loop through the list item a tags to change the display style
        // when they match or fail to match the search term
        for(var i = 0; i < listLi.length; i++){
            // store the current list item text in a variable
            var itemText = listLi[i].innerHTML.toLowerCase();

            // Get the LI element of the current A tag
            var itemLi = listLi[i].parentNode;

            // check if the input text exists inside any of the items
            if(itemText.indexOf(inputText) > -1){
                // make the item visible
                itemLi.style.display = '';
            }else{
                // change the display to none to remove the item from the list
                itemLi.style.display = 'none';
            }
        }

        // loop through the list of items and hide the collection-header if
        // none of the list items are visible any more.
        for(var i = 0; i < alphabet.length; i++){
            // get all the items using the individual letters
            var allLi = document.querySelectorAll('li#'+alphabet[i]);
            var LiAmount = allLi.length;
            var numberHidden = 0;

            // loop through and increment the number of items hidden
            // to be used to hide the header of that letter
            for(var j = 1; j < allLi.length; j ++){
                // if the items is not visible increment the number of hidden items
                if(allLi[j].style.display == 'none'){
                    numberHidden += 1;
                }
            }

            // hide/display the header based on the visible items.
            if(numberHidden == LiAmount -1){
                document.querySelector('li#'+alphabet[i]+'.collection-header').style.display = "none";
                hiddenHeader += 1;
            }else{
                document.querySelector('li#'+alphabet[i]+'.collection-header').style.display = "";
            }
        }

        // display the default message if no headers display
        // so users know to change their search
        if(hiddenHeader == 26){
            document.getElementById('default-message').style.display = "";
        }else{
            document.getElementById('default-message').style.display = "none";
        }
    }
};