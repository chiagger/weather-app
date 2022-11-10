const DOMIcon = document.querySelector("#icon");
const DOMCity = document.querySelector("#city");
const DOMDate = document.querySelector("#date");
const DOMDesc = document.querySelector("#desc");
const DOMTemp = document.querySelector("#temp");
const DOMFeels = document.querySelector("#feels");
const DOMMin = document.querySelector("#min");
const DOMMax = document.querySelector("#max");
const searchBtn = document.querySelector("#search");
const errormsg = document.querySelector("#errormsg");

searchBtn.style.backgroundImage = "url('magnify.png')";
searchBtn.addEventListener("click", () => {
    const typedCity = document.querySelector("#userCity");
    getWeather(typedCity.value);
    typedCity.value = ""; //resets text in searchbar
});

searchBtn.addEventListener("keypress", function (e) {
    if (13 == e.key) {
        const typedCity = document.querySelector("#userCity").value;
        getWeather(typedCity);
    }
});

getWeather("London");


class Weather {
    constructor(city, date, desc, icon, temp, feels, min, max) {
        this.city = city;
        this.date = date;
        this.desc = desc;
        this.icon = icon;
        this.temp = temp;
        this.feels = feels;
        this.min = min;
        this.max = max;
    }

    getCity() {
        return this.city;
    }

    getDate() {
        return this.date;
    }

    getDesc() {
        return this.desc;
    }

    getIcon() {
        return this.icon;
    }

    getTemp() {
        return this.temp;
    }

    getFeels() {
        return this.feels;
    }

    getMin() {
        return this.min;
    }

    getMax() {
        return this.max;
    }

}

function getFormattedDate(date) {
    const day = date.getDate();
    const month = date.toDateString().slice(4, 7);
    const year = date.getFullYear();
    const dayOfWeek = date.toDateString().slice(0, 3);
    return dayOfWeek + ", " + day + " " + month + " " + year;
}

function kelvinToCelsius(temp) {
    return Math.round(temp - 273.15);
}

async function getWeather(cityName) {
    try {
        errormsg.textContent="";
        const today = new Date();
        const result = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=71343ce8826309a49dd248efb9a6286d";
        const response = await fetch(result, { mode: 'cors' });
        const weatherData = await response.json();
        const city = weatherData.name;
        const date = getFormattedDate(today);
        const desc = weatherData.weather[0].description;
        var icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
        const temp = kelvinToCelsius(weatherData.main.temp);
        const feels = kelvinToCelsius(weatherData.main.feels_like);
        const min = kelvinToCelsius(weatherData.main.temp_min);
        const max = kelvinToCelsius(weatherData.main.temp_max);
        const todayWeather = new Weather(city, date, desc, icon, temp, feels, min, max);
        displayWeather(todayWeather);


    } catch (error) {
        errormsg.textContent ="There was an error in the data search. Try again!";
        errormsg.style.color="red";
    }

}

function displayWeather(todayWeather) {
    DOMCity.textContent = todayWeather.getCity();
    DOMDate.textContent = todayWeather.getDate();
    DOMDesc.textContent = todayWeather.getDesc();
    DOMIcon.src = todayWeather.getIcon();
    DOMTemp.textContent = todayWeather.getTemp() + " °C";
    DOMFeels.textContent = "Feels like " + todayWeather.getFeels() + " °C";
    DOMMin.textContent = todayWeather.getMin() + " °C";
    DOMMax.textContent = todayWeather.getMax() + " °C";
}

