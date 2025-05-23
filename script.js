const apiKey= "7a02d362a58c458a25706b81c4328555"
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
function onPageLoad(){
    checkWeather('Hyderabad')
}
async function checkWeather(city){
    const response = await fetch( apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
      }
    else{
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        var data = await  response.json();
        document.querySelector(".weather-desc").innerHTML = data.weather[0].description;
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=`${data.wind.speed} km/h <br> at  ${data.wind.deg} degrees`;
        document.querySelector(".pressure").innerHTML=data.main.pressure  + " hPa";
        document.querySelector(".visibility").innerHTML=data.visibility  + "m";
        document.querySelector(".feelslike").innerHTML=Math.round(data.main.feels_like)  + "°C";
       
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src= "images/clouds.png" ;
          }
          else if(data.weather[0].main == "Clear"){
              weatherIcon.src= "images/clear.png" ;
          }
          else if(data.weather[0].main == "Rain"){
              weatherIcon.src= "images/rain.png" ;
          }
          else if(data.weather[0].main == "Rizzle"){
              weatherIcon.src= "images/drizzle.png" ;
          }
          else if(data.weather[0].main == "mist"){
              weatherIcon.src= "images/mist.png" ;
          }
       
    }
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})

