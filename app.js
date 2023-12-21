const apikey="0d1c5873169919852e87725e1d4975e4";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".sear input");
const searchBtn=document.querySelector(".sear button");
weatherImg=document.querySelector(".weather img");



async function cheakWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apikey}`);
    var data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".windSpeed").innerHTML=data.wind.speed+"km/h";

    if(response.status=="404"){
        document.querySelector(".city").innerHTML=console.log("Invalid city name");
        document.querySelector(".temp").innerHTML= console.log("invalid")+"°C";
        document.querySelector(".humidity").innerHTML=console.log("invalid")+"%";
        document.querySelector(".windSpeed").innerHTML=console.log("invalid")+"km/h";
    }
    else{
           
    if(data.weather[0].main=="Clouds"){
        weatherImg.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherImg.src="images/clear.png";
    }
   else if(data.weather[0].main=="Drizzle"){
        weatherImg.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Humidity"){
        weatherImg.src="images/humidity.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherImg.src="images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherImg.src="images/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherImg.src="images/snow.png";
    }
    }


    //  document.querySelector(".weather").style.display="block";
    // document.querySelector(".details").style.display="contents";
}
searchBtn.addEventListener("click",()=>{
    console.log(searchBox.value);
    cheakWeather(searchBox.value);
});
