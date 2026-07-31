const apikey = "4e1e6e1f365c8ad328131e9c9ff40138";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`);
    const data = await response.json();

    console.log(data.weather[0].main); // ✅ HERE
    console.log(data);

    if (data.cod === "404") {
        alert("City not found");
        return;
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

const condition = data.weather[0].main.toLowerCase();

if (condition === "clouds") {
    weatherIcon.src = "images/clouds.png";

} else if (condition === "clear") {
    weatherIcon.src = "images/clear.png";

} else if (condition === "drizzle") {
    weatherIcon.src = "images/drizzle.png";

} else if (condition === "rain") {
    weatherIcon.src = "images/rain.png";

} else if (condition === "mist") {
    weatherIcon.src = "images/mist.png";
}




document.querySelector(".weather").style.display = "block";

}

// Button click
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Press Enter
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});