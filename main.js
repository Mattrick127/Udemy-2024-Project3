

// Menu section

document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting Section

const greetingText = "Good morning!";
const weatherCondition = "sunny";
const userLocation = "San Antonio";
let temperature = 22.8673;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it\’s ${temperature.toFixed(1)}° outside.`;

document.querySelector("#greeting").innerHTML = greetingText;

document.querySelector("#weather").innerHTML = weatherText;
