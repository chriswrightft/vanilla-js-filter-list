var filterList=function(inputBoxID,listItemClass,defaultMessage){var alphabet="abcdefghijklmnopqrstuvwxyz".split("");document.getElementById(inputBoxID).addEventListener("keyup",function(e){var inputText=e.target.value.toLowerCase(),countHeaders=0;for(var i=0;i<alphabet.length;i++){var countItems=0,items=document.querySelectorAll('ul li.'+listItemClass+'#'+alphabet[i]+' a');for(var j=0;j<items.length;j++){items[j].innerHTML.toLowerCase().indexOf(inputText)>-1?items[j].parentNode.style.display="":(items[j].parentNode.style.display="none",countItems++)}
<<<<<<< HEAD
    countItems===items.length?(document.getElementById(alphabet[i]).style.display="none",countHeaders++):document.getElementById(alphabet[i]).style.display=""}
<<<<<<< HEAD
<<<<<<< HEAD
    document.getElementById(defaultMessage).style.display=(countHeaders===alphabet.length)?"":"none"})};
=======
    document.getElementById(defaultMessage).style.display=(countHeaders===alphabet.length)?"":"none"})};
>>>>>>> 0bdb5e1... resolving merge conflicts
=======
    document.getElementById(defaultMessage).style.display=(countHeaders===alphabet.length)?"":"none"})};
>>>>>>> 07300c9... resolving merge conflicts
=======
  countItems===items.length?(document.getElementById(alphabet[i]).style.display="none",countHeaders++):document.getElementById(alphabet[i]).style.display=""}
  document.getElementById(defaultMessage).style.display=(countHeaders===alphabet.length)?"":"none"})};
>>>>>>> 636923a... re-indenting all lines to make it uniform
