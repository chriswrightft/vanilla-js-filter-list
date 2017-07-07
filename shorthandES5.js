(function(d){
    d.getElementById("filterInput").addEventListener("keyup", function(e){

        var foodItemA = document.querySelectorAll('ul li.collection-item a');

        for(var i = 0; i < foodItemA.length; i++){
            foodItemA[i].parentNode.style.display = (foodItemA[i].innerHTML.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
                ? '' //true
                : 'none'; // false
        }
    });
}(window.document));