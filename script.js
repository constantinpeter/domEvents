var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
function inputLength() {
    return input.value.length;
}
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    //------------------New Code added--------------------------

    // We add for the new element the click event for toggle
    li.addEventListener("click",addToggleAfterClick);

    // We add the delete button next to the new item
    addButton(li);
    
    console.log(li.childNodes[1]);
    
    //We add for the new button the click delete event
    //The new button is the childNodes[1] of the li
    li.childNodes[1].addEventListener("click",deleteElement);

    //----------------------------------------------------------
}
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//------------------------New Code added-----------------------


//querySelectorAll returns a node list, not an array
var li = document.querySelectorAll("li");

//The Array.from() method transfrom the node list "li " to an array
// After we use the forEach method to loop over the Array
// The forEach() method executes a provided function once for each array element (callback function that has acces to the current element)
Array.from(li).forEach(function(currentElement){

    //We add for each already existing array element (li) the click event 
    currentElement.addEventListener("click",addToggleAfterClick);

    //We add for each existing li element the button
    addButton(currentElement);

});


// This function add button to the currentElement
function addButton(currentElement){

    // The HTML element to be inserted into the tree after the li 
    var buttonHTML = '<button class="btn">Delete</button>';

    //The insertAdjacentElement() method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon
    //'beforeend': Just inside the targetElement, after its last child.
    currentElement.insertAdjacentHTML('beforeend',buttonHTML);

}


// This function toggles the class .done on element 
function addToggleAfterClick(event){

    var element = event.target;
    element.classList.toggle("done");

}

//querySelectorAll returns a node list, not an array
var btn = document.querySelectorAll(".btn");

//The Array.from() method transfrom the node list "btn " to an array
// After we use the forEach method to loop over the Array
// The forEach() method executes a provided function once for each array element (callback function that has acces to the current element)
Array.from(btn).forEach(function(currentElement){

    //We add for each button the click event
    currentElement.addEventListener("click",deleteElement);

});


// This function delete the element of the button that was clicked
function deleteElement(event){

    //The event.target is the button, therefore the parentNode is the li, that will be removed with the remove method
    event.target.parentNode.remove();

}

//--------------------------------------------------------------------
