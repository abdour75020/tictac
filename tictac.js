var chrono = document.querySelector("#chrono");
var number = document.querySelector("#number");
var dDisplay = document.querySelector("#dDisplay");
var hDisplay = document.querySelector("#hDisplay");
var mDisplay = document.querySelector("#mDisplay");
var sDisplay = document.querySelector("#sDisplay"); 
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var stop = false;
var hTime = 0;
var mTime = 0;
var sTime = 0;
var timeOver = false;

var countDownDate = new Date("Aug 19, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("dDisplay").innerHTML = days
    document.getElementById("hDisplay").innerHTML = hours;
    document.getElementById("mDisplay").innerHTML = minutes;
    document.getElementById("sDisplay").innerHTML = seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


