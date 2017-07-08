var filterList = function(inputBoxID, listItemClass){
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    document.getElementById(inputBoxID).addEventListener("keyup", function(e){

        var foodItemA = document.querySelectorAll('ul li.'+listItemClass+' a');
        var hiddenHeader = 0;

        for(var i = 0; i < foodItemA.length; i++){
            foodItemA[i].parentNode.style.display = foodItemA[i].innerHTML.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
                ? '' //true
                : 'none'; // false
        }

            for(var i = 0; i < alphabet.length; i++){
                var allLi = document.querySelectorAll('li#'+alphabet[i]);
                var LiAmount = allLi.length;
                var numberHidden = 0;
                for(var j = 1; j < allLi.length; j ++){
                numberHidden += (allLi[j].style.display == 'none')
                    ? 1
                    : 0;
            }
            if(numberHidden == LiAmount -1){
                document.querySelector('li#'+alphabet[i]+'.collection-header').style.display = "none";
                hiddenHeader += 1;
            }else{
                document.querySelector('li#'+alphabet[i]+'.collection-header').style.display = "";
            }
        }
        document.getElementById('default-message').style.display = hiddenHeader == 26
            ? ''
            : 'none';
    });
};