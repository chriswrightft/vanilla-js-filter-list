// not neccessary for the collection but used to fill it with names.

var ulID = document.getElementById("foods");
foodList = foodList.sort();
function checkLIs(idLetter, item){
	if(!!document.getElementById(idLetter)){
		return true;
	}else{
		ulID.innerHTML += "<li class='collection-header' id='"+idLetter+"'><h5>"+idLetter.toUpperCase()+"</h5></li>"
	}
}

function insertFoodItem(idLetter, item){
	if(!!document.getElementById(item)){
		return true;
	}else{
		document.getElementById(idLetter).innerHTML += "<li class='collection-item "+item+"' id='"+idLetter+"'><a href='#'><h5>"+item+"</h5></a></li>"
	}
}

for (var i = 0; i < foodList.length; i++) {
	var foodItem = foodList[i];
	if(foodItem.length > 0){
		if(!/[a-z]/i.exec(foodItem)){
			continue;
		}else{
			var foodItemLetter = /[a-z]/i.exec(foodItem)[0].toLowerCase();
		}
		checkLIs(foodItemLetter, foodItem);
		insertFoodItem(foodItemLetter, foodItem);
	}
}