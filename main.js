

// Menu section

document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting Section


function celsiusToFahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

const greetingText = "Good morning!";
const weatherCondition = "sunny";
const userLocation = "San Antonio";
let temperature = 25;

let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it\’s ${celsiusToFahr(temperature).toFixed(1)}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it\’s ${celsiusToFahr(temperature).toFixed(1)}°F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("#weather").innerHTML = celsiusText;

document.querySelector(".weather-group").addEventListener("click", function(e){
    if (e.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
    }   else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrText;
    }
});

let localTime = new Date();

document.querySelector("span[data-time=hours]").textContent = localTime.getHours();
document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes();
document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds();
