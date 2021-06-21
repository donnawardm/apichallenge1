// // const baseurl = "https://ghibliapi.herokuapp.com";

// // const result = fetch(baseurl + "/rockets", {
// //   method: "GET",
// // });

// Promise are boxes that hold values which might take a lone time to compute
// /or come back from a server
// So, we can't do anything directly with a value inside a box (a promise)
//because it might not exist yet
//KEY POINT: How do we "tell" the promise what to do with its result?
//  We give it a *function.

// // function parsedRockets(r) {
// //   return r.json();
// // }

// // function processParsedRockets(rockets) {
// //   for (let rocket of rockets) {
// //     console.log(rocket);
// //   }
// // }

// // // result.then(parsedRockets).then(processParsedRockets); //method of every promise that takes a function.

// // //More commonly written like this...
fetch("https://ghibliapi.herokuapp.com/films", {
  method: "GET",
})
  .then((r) => r.json())
  .then((filmsArray) => {
    displayFilms(filmsArray);
  });

function displayFilms(filmsArray) {
  for (let films of filmsArray) {
    // bring in table from html
    let filmsTable = document.getElementById("filmsTable");

    // create new row in table
    let newRow = document.createElement("tr");

    // create new elements for our information received
    let title = document.createElement("td");
    let director = document.createElement("td");
    let release_date = document.createElement("td");
    let running_time = document.createElement("td");

    // insert api information into our new elements
    title.innerText = films.title;
    director.innerText = films.director;
    release_date.innerText = films.release_date;
    running_time.innerText = films.running_time;

    // append table data to our new row
    newRow.appendChild(title);
    newRow.appendChild(director);
    newRow.appendChild(release_date);
    newRow.appendChild(running_time);

    // append new row to our table
    filmsTable.appendChild(newRow);
  }
}

// fetch("https://ghibliapi.herokuapp.com/films", {
//   method: "GET",
// })
//   .then((r) => r.json())
//   .then((filmsArray) => {
//     displayFilms(filmsArray);
//   });

// function displayFilms(filmsArray) {
//   for (let films of filmsArray) {
//     let filmsTable = document.getElementById("filmsTable");
//     let newRow = document.createElement("p");
//     let title = document.createElement("p");
//     console.log(title);
//     let director = document.createElement("p");
//     let release_date = document.createElement("p");
//     let running_time = document.createElement("p");
//     title.innerText = films.title;
//     director.innerText = films.director;
//     release_date.innerText = films.release_date;
//     running_time.innerText = films.running_time;
//     filmsTable.appendChild(title);
//     filmsTable.appendChild(director);
//     filmsTable.appendChild(release_date);
//     filmsTable.appendChild(running_time);
//   }
// }

// function displayFilms(filmsArray) {
//   filmsArray.map((films) => {
//     let filmsTable = document.getElementById("filmsTable");
//     let newRow = document.createElement("p");
//     let title = document.createElement("p");
//     let director = document.createElement("p");
//     let release_date = document.createElement("p");
//     let running_time = document.createElement("p");
//     title.innerText = films.title;
//     director.innerText = films.director;
//     release_date.innerText = films.release_date;
//     running_time.innerText = films.running_time;
//     filmsContainer.appendChild(title);
//     filmsContainer.appendChild(director);
//     filmsContainer.appendChild(release_date);
//     filmsContainer.appendChild(running_time);
//   });
// }

// fetch("https://ghibliapi.herokuapp.com/people", {
//   method: "GET",
// })
//   .then((r) => r.json())
//   .then((peopleArray) => {
//     console.log(peopleArray);

//     // displayPeople(peopleArray);
//   });

// function displayPeople(peopleArray) {
//   peopleArray.map((people) => {
//     let peopleTable = document.getElementById("peopleTable");
//     let newRow = document.createElement("p");
//     let title = document.createElement("p");
//     let director = document.createElement("p");
//     let release_date = document.createElement("p");
//     let running_time = document.createElement("p");
//     title.innerText = films.title;
//     director.innerText = films.director;
//     release_date.innerText = films.release_date;
//     running_time.innerText = films.running_time;
//     peopleContainer.appendChild(title);
//     peopleContainer.appendChild(director);
//     peopleContainer.appendChild(release_date);
//     peopleContainer.appendChild(running_time);
//   });
