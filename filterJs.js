(function(d){
    var inputText = d.getElementById("filterInput");

    inputText.addEventListener("keyup", filterList);

    function filterList(event){

        var listLi = document.querySelectorAll('ul li.collection-item a');

        for(var i = 0; i < listLi.length; i++){
            if(listLi[i].innerHTML.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1){
                listLi[i].parentNode.style.display = '';
            }else{
                listLi[i].parentNode.style.display = 'none';
            }
        }

    }
}(window.document));