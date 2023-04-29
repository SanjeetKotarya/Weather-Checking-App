const apiKey = "f6b9a5d22dcd230280574929b2f71fd1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.getElementsByClassName("weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

}
function getSelectValue(){
    var cityname = document.querySelector(".search select").value;
    checkWeather(cityname);
}

function defcity(){
    checkWeather("chennai");
}
