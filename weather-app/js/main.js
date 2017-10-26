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

const groups = {
  "Rain": "img/rain.png",
  "Clear": "img/sun.png",
  "Clouds": "img/cloudy.png",
}

//This is where our converter functions will be
function kelvinToFar(kelvin) {
  return Math.round(kelvin  * 9/5 - 459.67);
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
        image.setAttribute("src", groups[data.weather[0].main])
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
