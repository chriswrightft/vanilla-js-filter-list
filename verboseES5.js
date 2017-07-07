var filterList = function(inputBoxID, listItemClass){
    // assign the input element to a variable
    var inputBox = document.getElementById(inputBoxID);

    // add an event listener for when users start searching
    inputBox.addEventListener("keyup", filterList);

    function filterList(event){

        // Gather all the a links within the list items
        var listLi = document.querySelectorAll('ul li.'+listItemClass+' a');

        // on each click the value in the search box will be asssigned to a variable
        var inputText = event.target.value.toLowerCase();

        // loop through the list item a tags to change the display style
        // when they match or fail to match the search term
        for(var i = 0; i < listLi.length; i++){
            // store the current list item text in a variable
            var foodItemText = listLi[i].innerHTML.toLowerCase();

            // Get the LI element of the current A tag
            var foodItemLi = listLi[i].parentNode;

            // check if the input text exists inside any of the food items
            if(foodItemText.indexOf(inputText) > -1){
                // remove the display style
                foodItemLi.style.display = '';
            }else{
                // change the display to none to remove the item from the list
                foodItemLi.style.display = 'none';
            }
        }
    }
};