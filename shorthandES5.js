var filterList = function(inputBoxID, listItemClass){
    document.getElementById(inputBoxID).addEventListener("keyup", function(e){

        var foodItemA = document.querySelectorAll('ul li.'+listItemClass+' a');

        for(var i = 0; i < foodItemA.length; i++){
            foodItemA[i].parentNode.style.display = (foodItemA[i].innerHTML.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
                ? '' //true
                : 'none'; // false
        }
    });
};