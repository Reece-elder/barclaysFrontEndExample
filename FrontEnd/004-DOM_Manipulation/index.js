// Stops some of the shenanigans: initialising variables without declaring them etc
'use strict';

// Alert Function creates a popup, so you know page has been set up
// alert("helloWorld");

// Creating a new variable called newStr which is a string when it is ran
let newStr = "newStr";

// Console logging out the variable 
console.log(newStr);

// Using alert to print out the new string
// alert(newStr);


// Using Query Selector to find the HTML elements
let header = document.querySelector('h1');
console.log(header);
console.log(header.textContent);

let subHeader = document.querySelector('.subHead');
console.log(subHeader);
console.log(subHeader.innerHTML);

let titleForm = document.querySelector('#titleForm');
console.log(titleForm);
console.log(titleForm.value);

let userIDForm = document.querySelector('#userIDForm');
let bodyForm = document.querySelector('#bodyForm');
console.log(userIDForm);
console.log(bodyForm);

// Shows that nothing is grabbed as input doesnt have value yet 

// Creating a function called getFormData that console logs out titleContent (global var) .value
// let getFormData = function () {
//     console.log("Function invoked");
//     console.log(titleForm);
//     console.log(titleForm.value);
//     // Resets the form back to blank when function ran
//     titleForm.value = "";
// }

// Finding the new button Created
let submitButton = document.querySelector('#submitButton');
console.log(submitButton);




// New Function Created as an arrow function, console logging out the form values
let getFormData = () => {
    console.log(titleForm.value);
    console.log(userIDForm.value);
    console.log(bodyForm.value);

    console.log(`My ID is ${userIDForm.value}, the title of my post is ${titleForm.value} and the body is ${bodyForm.value}`);
}

// Adding an event listener to new button. Takes in two arguments, what event and what to do when event occurs
submitButton.addEventListener('click', getFormData);


// Finding new Card Button
let newCardBtn = document.querySelector('#newCardBtn');
console.log(newCardBtn);

// Finding new Card Div 
let newCardDiv = document.querySelector('#newCardDiv');
console.log(newCardDiv);



let addNewCard = () => {
    let newCard = document.createElement('div');
    let newCardBody = document.createElement('div');
    let newCardTitle = document.createElement('h5');
    let newCardBodyText = document.createElement('p');
    let newCardID = document.createElement('small');

    let idValue = userIDForm.value;
    let titleValue = titleForm.value;
    let bodyValue = bodyForm.value;

    newCard.className = "card m-3";
    newCardBody.className = "card-body";
    newCardTitle.className = "card-title";
    newCardBodyText.className = "card-text";
    newCardID.className = "text-muted";

    // newCardTitle.textContent = "This is the title";
    // newCardBodyText.textContent = "this is the body";
    // newCardID.textContent = "This is the ID";

    newCardTitle.textContent = titleValue;
    newCardBodyText.textContent = bodyValue;
    newCardID.textContent = idValue;

    newCardDiv.appendChild(newCard);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newCardTitle);
    newCardBody.appendChild(newCardBodyText);
    newCardBody.appendChild(newCardID);
}

newCardBtn.addEventListener('click', addNewCard);