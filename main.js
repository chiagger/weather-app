/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const DOMIcon = document.querySelector(\"#icon\");\nconst DOMCity = document.querySelector(\"#city\");\nconst DOMDate = document.querySelector(\"#date\");\nconst DOMDesc = document.querySelector(\"#desc\");\nconst DOMTemp = document.querySelector(\"#temp\");\nconst DOMFeels = document.querySelector(\"#feels\");\nconst DOMMin = document.querySelector(\"#min\");\nconst DOMMax = document.querySelector(\"#max\");\nconst searchBtn = document.querySelector(\"#search\");\nconst errormsg = document.querySelector(\"#errormsg\");\n\nsearchBtn.style.backgroundImage = \"url('magnify.png')\";\nsearchBtn.addEventListener(\"click\", () => {\n    const typedCity = document.querySelector(\"#userCity\");\n    getWeather(typedCity.value);\n    typedCity.value = \"\"; //resets text in searchbar\n});\n\nsearchBtn.addEventListener(\"keypress\", function (e) {\n    if (13 == e.key) {\n        const typedCity = document.querySelector(\"#userCity\").value;\n        getWeather(typedCity);\n    }\n});\n\ngetWeather(\"London\");\n\n\nclass Weather {\n    constructor(city, date, desc, icon, temp, feels, min, max) {\n        this.city = city;\n        this.date = date;\n        this.desc = desc;\n        this.icon = icon;\n        this.temp = temp;\n        this.feels = feels;\n        this.min = min;\n        this.max = max;\n    }\n\n    getCity() {\n        return this.city;\n    }\n\n    getDate() {\n        return this.date;\n    }\n\n    getDesc() {\n        return this.desc;\n    }\n\n    getIcon() {\n        return this.icon;\n    }\n\n    getTemp() {\n        return this.temp;\n    }\n\n    getFeels() {\n        return this.feels;\n    }\n\n    getMin() {\n        return this.min;\n    }\n\n    getMax() {\n        return this.max;\n    }\n\n}\n\nfunction getFormattedDate(date) {\n    const day = date.getDate();\n    const month = date.toDateString().slice(4, 7);\n    const year = date.getFullYear();\n    const dayOfWeek = date.toDateString().slice(0, 3);\n    return dayOfWeek + \", \" + day + \" \" + month + \" \" + year;\n}\n\nfunction kelvinToCelsius(temp) {\n    return Math.round(temp - 273.15);\n}\n\nasync function getWeather(cityName) {\n    try {\n        errormsg.textContent=\"\";\n        const today = new Date();\n        const result = \"https://api.openweathermap.org/data/2.5/weather?q=\" + cityName + \"&APPID=71343ce8826309a49dd248efb9a6286d\";\n        const response = await fetch(result, { mode: 'cors' });\n        const weatherData = await response.json();\n        const city = weatherData.name;\n        const date = getFormattedDate(today);\n        const desc = weatherData.weather[0].description;\n        var icon = \"http://openweathermap.org/img/w/\" + weatherData.weather[0].icon + \".png\";\n        const temp = kelvinToCelsius(weatherData.main.temp);\n        const feels = kelvinToCelsius(weatherData.main.feels_like);\n        const min = kelvinToCelsius(weatherData.main.temp_min);\n        const max = kelvinToCelsius(weatherData.main.temp_max);\n        const todayWeather = new Weather(city, date, desc, icon, temp, feels, min, max);\n        displayWeather(todayWeather);\n\n\n    } catch (error) {\n        errormsg.textContent =\"There was an error in the data search. Try again!\";\n        errormsg.style.color=\"red\";\n    }\n\n}\n\nfunction displayWeather(todayWeather) {\n    DOMCity.textContent = todayWeather.getCity();\n    DOMDate.textContent = todayWeather.getDate();\n    DOMDesc.textContent = todayWeather.getDesc();\n    DOMIcon.src = todayWeather.getIcon();\n    DOMTemp.textContent = todayWeather.getTemp() + \" °C\";\n    DOMFeels.textContent = \"Feels like \" + todayWeather.getFeels() + \" °C\";\n    DOMMin.textContent = todayWeather.getMin() + \" °C\";\n    DOMMax.textContent = todayWeather.getMax() + \" °C\";\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;