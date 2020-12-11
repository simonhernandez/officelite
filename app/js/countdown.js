/*
    ------------------------
    ----- Countdown JS -----
    ------------------------
*/

// Set the date we're counting down to
var countDownDate = new Date("Feb 15, 2021 17:21:24").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById('days').firstElementChild.innerHTML = days;
  document.getElementById('hours').firstElementChild.innerHTML = hours;
  document.getElementById('min').firstElementChild.innerHTML = minutes;
  document.getElementById('sec').firstElementChild.innerHTML = seconds;

}, 1000);