var filterList = function(inputBoxID, listItemClass){
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    document.getElementById(inputBoxID).addEventListener("keyup", function(e){
        var inputText = e.target.value.toLowerCase(),
            countHeaders = 0;
        for(var i = 0; i < alphabet.length; i++){
            var countItems = 0,
                items = document.querySelectorAll('ul li.'+listItemClass+'#'+alphabet[i]+' a');

            for(var j = 0; j < items.length; j++){
                items[j].innerHTML.toLowerCase().indexOf(inputText) > -1
                    ? items[j].parentNode.style.display = ""
                    : (items[j].parentNode.style.display = "none", countItems++);
            }

<<<<<<< HEAD
            countItems == items.length
=======
            countItems === items.length
>>>>>>> e260bd7... pulling to seperate computer
                ? (document.getElementById(alphabet[i]).style.display = "none", countHeaders++)
                : document.getElementById(alphabet[i]).style.display = ""

        }

        document.getElementById('default-message').style.display = (countHeaders == 26) ? "" : "none";
    });
};