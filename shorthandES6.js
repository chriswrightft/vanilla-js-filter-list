'use strict';
const filterList = (inputBoxID, listItemClass, defaultMessage) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    document.getElementById(inputBoxID).addEventListener("keyup", e => {
        let inputText = e.target.value.toLowerCase(),
        countHeaders = 0;
        alphabet.forEach(letter => {
            let countItems = 0,
            items = document.querySelectorAll('ul li.'+listItemClass+'#'+letter+' a');

            items.forEach(item => {
                item.innerHTML.toLowerCase().includes(inputText)
                ? item.parentNode.style.display = ""
                : (item.parentNode.style.display = "none", countItems++);
            });

            countItems === items.length
            ? (document.getElementById(letter).style.display = "none", countHeaders++)
            : document.getElementById(letter).style.display = ""
        });

        document.getElementById(defaultMessage).style.display = (countHeaders === alphabet.length) ? "" : "none";
    });
};