window.addEventListener("DOMContentLoaded", function () {
    const apiKey = "b4c4b5a9734a5e39b362f3bfeb9c2f8a";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather? units=metric&q=";
    const serachInput = this.document.querySelector('.search input')
    const searchBtn = this.document.querySelector('.search button')
    const weatherIcon = document.querySelector('.weather_icon')

            // Loader
            const loader = document.querySelector('.loader')
    
            setTimeout(()=> {
            loader.style.opacity = '0'
                     setTimeout(()=> { 
                     loader.style.display = 'none'
                     }, 5000)
                   }, 2000)
            // Loader

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status === 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }else{
            var data = await response.json();
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    
    
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "/images/clouds.png";
            }else if (data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }else if (data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            }else if (data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }else if (data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }
    
            document.querySelector('.weather').style.display = "block"
            document.querySelector(".error").style.display = "none";
        }
    }

    searchBtn.addEventListener("click", ()=> {
        checkWeather(serachInput.value);
    })
})