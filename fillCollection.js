// not neccessary for the collection but used to fill it with names.
var ulID = document.getElementById("items");
var itemList = itemList.sort();
function checkLIs(idLetter, item){
	if(!!document.getElementById(idLetter)){
		return true;
	}else{
		ulID.innerHTML += "<li class='collection-header' id='"+idLetter+"'><h5>"+idLetter.toUpperCase()+"</h5></li>"
	}
}

function insertItem(idLetter, item){
	if(!!document.getElementById(item)){
		return true;
	}else{
		document.getElementById(idLetter).innerHTML += "<li class='collection-item "+item+"' id='"+idLetter+"'><a href='#'><h5>"+item+"</h5></a></li>"
	}
}

for (var i = 0; i < itemList.length; i++) {
	var item = itemList[i];
	if(item.length > 0){
		if(!/[a-z]/i.exec(item)){
			continue;
		}else{
			var itemLetter = /[a-z]/i.exec(item)[0].toLowerCase();
		}
		checkLIs(itemLetter, item);
		insertItem(itemLetter, item);
	}
}