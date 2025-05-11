async function getWeather(city){
    const API_KEY = "530085b01810851417f492d6d989b3a0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log("city:", data.name);
        console.log("temp:", data.main.temp);
        console.log("humidity:", data.main.humidity);
        console.log("wind speed:", data.wind.speed);
        console.log("weather:", data.weather[0].description);
        console.log("icon:", data.weather[0].icon);
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

getWeather(window.prompt("Enter city name"));