//Root URL for the open weather app api
const api_root_url = "http://api.openweathermap.org/data/2.5/weather?zip="
const api_key = "350fc3800bcdd53633d0aace94a0b74c"

//Select all elements in the html by using querySelector and putting them in variables.
const body = document.querySelector("body")
const city = document.querySelector(".city")
const zip = document.querySelector(".zip")
const weather = document.querySelector(".weather")
const temperature = document.querySelector(".temperature")
const humidity = document.querySelector(".humidity")
const image = document.querySelector(".image")
const convert = document.querySelector(".convert")
const changeDeg = document.querySelector(".change-deg")

const groups = [
  {
    condition: "Clear",
    icon: "img/sun.png",
    background: "img/clear-sky.jpg",
  },
  {
    condition: "Snow",
    icon: "img/snow.png",
    background: "img/snowing.jpg",
  },
  {
    condition: "Rain",
    icon: "img/rain.png",
    background: "img/raining.jpg",
  },
  {
    condition: "Sunny",
    icon: "img/sun.png",
    background: "img/sunny.jpg",
  },
  {
    condition: "Thunderstorm",
    icon: "img/thunderstorm.png",
    background: "img/thunderstorm.jpg",
  },
  {
    condition: "Clouds",
    icon: "img/cloudy.png",
    background: "img/cloudy.jpg",
  },
]

//This is where our converter functions will be
function kelvinToFar(kelvin) {
  return Math.round(kelvin  * 9/5 - 459.67);
}

//Converts Farhenheit to Celsius
function farToCelsius() {
  let value = parseInt(temperature.textContent)
  return Math.round((value - 32) * 5/9);
}

//Ajax function
function getWeather(zipCode) {
  $.ajax({
      type: "GET",
      url: `${api_root_url}${zipCode},us&appid=${api_key}`,
      dataType: "json",
      success: function(data){
        console.log(data);
        temperature.textContent = kelvinToFar(data.main.temp);
        city.textContent = data.name;
        weather.textContent = data.weather[0].main;
        humidity.textContent = data.main.humidity;

        for(var i = 0 in groups){
          // console.log(groups[i].condition);
          if (groups[i].condition === data.weather[0].main) {
            image.setAttribute("src", groups[i].icon);
            document.body.style.backgroundImage = `url(${groups[i].background}
            )`;
          }
        }
      },
      error: function(error){
          console.log("Something went wrong");
      }
  })
}

getWeather("33184");

zip.addEventListener("keypress", function(event){
  // console.log(event);
  if (event.key === "Enter") {
    getWeather(zip.value)
  }
})

//Adds a click event to toggle converting the temperature from Farhenheit to Celsius
convert.addEventListener("click", function () {
  if (convert.textContent === "Convert to °C") {
    temperature.textContent = farToCelsius();
    convert.textContent = "Convert to °F"
    changeDeg.textContent = "°C"
  } else {
    temperature.textContent = Math.floor(temperature.textContent * 1.8) + 32;
    convert.textContent = "Convert to °C"
    changeDeg.textContent = "°F"
  }
})
