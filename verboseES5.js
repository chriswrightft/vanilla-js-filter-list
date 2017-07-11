var filterList = function(inputBoxID, listItemClass){
    // assign the input element to a variable
    var inputBox = document.getElementById(inputBoxID);

    // add an event listener for when users start searching
    inputBox.addEventListener("keyup", filterListClick);

    // alphabet array
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    function filterListClick(event){
        // on each click the value in the search box will be asssigned to a variable
        var inputText = event.target.value.toLowerCase();
        var countHeaders = 0;

        // Start a loop through each letter
        for(var i = 0; i < alphabet.length; i++){
            var countItems = 0;

            // Gather all the a links within the list items for each letter
            var items = document.querySelectorAll('ul li.'+listItemClass+'#'+alphabet[i]+' a');

            // determine how many items are in this letter
            var itemsAmount = items.length;

            // loop through the list item a tags to change the display style
            // when match or fail to match the input field
            for(var j = 0; j < itemsAmount; j++){
                // Check if the search term exists in any of the items
                if(items[j].innerHTML.toLowerCase().indexOf(inputText) > -1){
                    // keep the items visible
                    items[j].parentNode.style.display = "";
                }else{
                    // change the display to none so they disapear
                    // and are removed from the DOM
                    items[j].parentNode.style.display = "none";
                    // incrament how many items have been made invisible
                    countItems++;
                }
            }

            // if all the items for this letter are invisible
            // make the header letter invisible and removed from the DOM
            if(countItems == itemsAmount){
                document.getElementById(alphabet[i]).style.display = "none";
                countHeaders++;
            }else{
                document.getElementById(alphabet[i]).style.display = "";
            }
        }

        // If all the headers are invisible
        // make the default mesage visible
        if(countHeaders == 26){
            document.getElementById('default-message').style.display = "";
        }else{
            document.getElementById('default-message').style.display = "none";
        }
    }
};