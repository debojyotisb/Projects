const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');



setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString()); //this print only in the console, but not in the page so i need to use innerHTML

    clock.innerHTML = date.toLocaleTimeString();
}, 1000)


// pending

// const time = document.querySelector('#time');
// let intervalId;  // Declare a global variable to store the interval ID

// const dateNow = function() {
//     time.innerHTML = `${Date()}`
// }
// // Start the interval initially
// intervalId = setInterval(dateNow, 1000);

// // using button to stop setInterval and re start the interval (homeWork)

// // To stop
// document.getElementById('stop').addEventListener('click', function (){
//     clearInterval(intervalId);
//     console.log("Stopped");
// });

// // To start again
// document.getElementById('start').addEventListener('click', function(){
//       // Clear any existing interval to prevent multiple intervals from running
//     clearInterval(intervalId);
//     // Start a new interval and store its ID in the global variable
//     intervalId = setInterval(dateNow, 1000)
//     console.log("restarted");
// });