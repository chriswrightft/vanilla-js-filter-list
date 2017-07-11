var filterList = function(inputBoxID, listItemClass){
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    document.getElementById(inputBoxID).addEventListener("keyup", function(e){
        var inputText = e.target.value.toLowerCase(),
            countHeaders = 0;
        for(var i = 0; i < alphabet.length; i++){
            var countItems = 0,
                items = document.querySelectorAll('ul li.'+listItemClass+'#'+alphabet[i]+' a');

            for(var j = 0; j < items.length; j++){
                if(items[j].innerHTML.toLowerCase().indexOf(inputText) > -1){
                    items[j].parentNode.style.display = "";
                }else{
                    items[j].parentNode.style.display = "none";
                    countItems++;
                }
            }

            if(countItems == items.length){
                document.getElementById(alphabet[i]).style.display = "none";
                countHeaders++;
            }else{
                document.getElementById(alphabet[i]).style.display = "";
            }

        }

        document.getElementById('default-message').style.display = (countHeaders == 26) ? "" : "none";
    });
};