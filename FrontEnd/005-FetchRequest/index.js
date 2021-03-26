// Stops some of the shenanigans: initialising variables without declaring them etc
"use strict";

// Alert Function creates a popup, so you know page has been set up
alert("helloWorld");

// Creating a new variable called newStr which is a string when it is ran
let newStr = "newStr";

// Console logging out the variable
console.log(newStr);

// Using alert to print out the new string
alert(newStr);


// Using Query Selector to find the HTML elements
let header = document.querySelector("h1");
console.log(header);
console.log(header.textContent);

let subHeader = document.querySelector(".subHead");
console.log(subHeader);
console.log(subHeader.innerHTML);

let titleForm = document.querySelector("#titleForm");
console.log(titleForm);
console.log(titleForm.value);

let userIDForm = document.querySelector("#userIDForm");
let bodyForm = document.querySelector("#bodyForm");
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
let submitButton = document.querySelector("#submitButton");
console.log(submitButton);

// New Function Created as an arrow function, console logging out the form values
let getFormData = () => {
  console.log(titleForm.value);
  console.log(userIDForm.value);
  console.log(bodyForm.value);

  console.log(
    `My ID is ${userIDForm.value}, the title of my post is ${titleForm.value} and the body is ${bodyForm.value}`
  );
};

// Adding an event listener to new button. Takes in two arguments, what event and what to do when event occurs
// submitButton.addEventListener("click", getFormData);

// Finding new Card Button
let newCardBtn = document.querySelector("#newCardBtn");
console.log(newCardBtn);

// Finding new Card Div
let newCardDiv = document.querySelector("#newCardDiv");
console.log(newCardDiv);

// Takes data object and creates a paragraph with text content of object.title
let printTitleHTML = (data) => {
  let newPara = document.createElement("p");
  newPara.textContent = data.title;

  newCardDiv.appendChild(newPara);
};

let addNewCard = (data) => {
  let newCard = document.createElement("div");
  let newCardBody = document.createElement("div");
  let newCardTitle = document.createElement("h5");
  let newCardBodyText = document.createElement("p");
  let newCardID = document.createElement("small");

  newCard.className = "card m-3";
  newCardBody.className = "card-body";
  newCardTitle.className = "card-title";
  newCardBodyText.className = "card-text";
  newCardID.className = "text-muted";

  newCardTitle.textContent = data.title;
  newCardBodyText.textContent = data.body;
  newCardID.textContent = data.userId;

  newCardDiv.appendChild(newCard);
  newCard.appendChild(newCardBody);
  newCardBody.appendChild(newCardTitle);
  newCardBody.appendChild(newCardBodyText);
  newCardBody.appendChild(newCardID);
};

newCardBtn.addEventListener("click", addNewCard);

// * Fetch Request

// CRUD:
// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

// * Basic Use case for a Get request

fetch(`https://jsonplaceholder.typicode.com/posts`) // 1
  .then((response) => {
    if (response.status !== 200) {
      //  2
      console.error(`status: ${reponse.status}`);
      return;
    }
    response
      .json() // 3
      .then((data) => console.info(data)); // 4
  })
  .catch((err) => console.error(`${err}`)); // 5

// 1 - Start using the fetch method and give it a target
// 2 - Check if request is anything but status code of 200. If true log status code and continue to execute
// 3 - Take the response from the fetch and convert to JSON using .json ()
// 4 - Log the data to the console as console.info
// 5 - Fifth line will execute if there is an error

// fetch(`https://jsonplaceholder.typicode.com/posts`) // 1
//     .then((response) => {
//         if (response.status !== 200) {  //  2
//             console.error(`status: ${reponse.status}`);
//             return;
//         }
//         response.json() // 3
//         .then((data) => {
//             for (let i of data){
//                 console.log(i);
//                 console.log(i.title);
//                 addNewCard(i);
//             }
//         }).catch((err)=> console.error(`${err}`))
//     });

// Putting Fetch Read all within a function
let readAllFunc = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`) // 1
    .then((response) => {
      if (response.status !== 200) {
        //  2
        console.error(`status: ${reponse.status}`);
        return;
      }
      response
        .json() // 3
        .then((data) => {
          for (let i of data) {
            printTitleHTML(i);
            // console.log(i);
            // console.log(i.title);
            // addNewCard(i);
          }
        })
        .catch((err) => console.error(`${err}`));
    });
};

// Finding New Button and making it 'readAll' when clicked
let readAllBtn = document.querySelector("#readAll");
readAllBtn.addEventListener("click", readAllFunc);

let readByIdFunc = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
    if (response.status !== 200) {
      console.error(`status: ${response.status}`);
      return;
    }
    response
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(`${error}`));
  });
};

let readByIdBtn = document.querySelector("#readIdBtn");

let readByIdForm = document.querySelector("#readIdForm");

readByIdBtn.addEventListener("click", function () {
  let readByIdValue = readByIdForm.value;
  readByIdFunc(readByIdValue);
});

// Create Function

let myObject = {
  userId: 100,
  title: "this is a test",
  body: "This is the test body",
};

let createFunc = () => {
  fetch(`http://jsonplaceholder.typicode.com/posts`, {
    method: `POST`, // Declaring the method
    headers: {
      "Content-type": "application/json", // Header
    },
    body: JSON.stringify(myObject), // What data to post
  }).then((response) => {
    if (response.status !== 201) {
      // Status code of 201
      console.log(`Status ${response.status}`);
      return;
    } else {
      console.log(`All good! ${response.status}`);
    }
    response
      .json()
      .then((data) =>
        console.log(`Request succesful with JSON response ${data}`)
      )
      .catch((error) => console.log(error));
  });
};

createFunc();

console.log(titleForm.value);
console.log(userIDForm.value);
console.log(bodyForm.value);

myObject = {
    userId: userIDForm.value,
    title: titleForm.value,
    body: bodyForm.value, 
};

console.log(myObject);
createFunc();

let createObject = () => {
    myObject = {
        userId: userIDForm.value,
        title: titleForm.value,
        body: bodyForm.value, 
    };
    createFuncData(myObject);
}

let createFuncData = (object) => {
    console.log(object);
    fetch(`http://jsonplaceholder.typicode.com/posts`, {
      method: `POST`, // Declaring the method
      headers: {
        "Content-type": "application/json", // Header
      },
      body: JSON.stringify(object), // What data to post
    }).then((response) => {
      if (response.status !== 201) {
        // Status code of 201
        console.log(`Status ${response.status}`);
        return;
      } else {
        console.log(`All good! ${response.status}`);
      }
      response.json()
        .then((data) =>
          console.log(`Request succesful with JSON response ${data}`)
        )
        .catch((error) => console.log(error));
    });
  };

  submitButton.addEventListener("click", createObject);


// Object being passed to the backend
