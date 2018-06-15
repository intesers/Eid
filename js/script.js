let countdown = document.querySelector('.countdown');

//Set Eid Date

let eidDate = new Date('Jun 16, 2018 11:00:00').getTime();


let interval = setInterval(() => {

	//Current Time

let currentTime = new Date().getTime();

//Difference between Eid and current time

let difference = eidDate - currentTime;


// Time calculation
let days = Math.floor(difference / (1000 * 60 * 60 * 24));

let hours = Math.floor(
	(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);

let mins = Math.floor(
	(difference % (1000 * 60 * 60)) / (1000 * 60)
	);

let seconds = Math.floor(
	(difference % (1000 * 60)) / (1000)
	);

// Display Results
countdown.innerHTML = `
  <div>${days}<span>Days</span></div> 
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;



}, 1000);
