let apikey="apikey";

function hide(){
  document.getElementById("name").innerHTML="";
  document.getElementById("weather").innerHTML="";
  document.getElementById("desc").innerHTML="";
  document.getElementById("icon").style.display="none";
  document.getElementById("temperature").innerHTML="";
  document.getElementById("wind").innerHTML="";
  document.getElementById("humidity").innerHTML="";
  document.getElementById("flex-container-degree").style.display="none";
  document.getElementById("flex-container").style.visibility="hidden";
}

function weather(){
  let cityname = document.getElementById("city").value;
  let countrycode = document.getElementById("countrycode").value;
  if (cityname.length == 0 && countrycode.length == 0){
    document.getElementById("tag").innerHTML="Enter the details";
    hide();
  }
  else if (cityname.length == 0){
    document.getElementById("tag").innerHTML="Enter the city name";
    hide();
  }
  else if (countrycode.length == 0){
    document.getElementById("tag").innerHTML="Enter the countrycode";
    hide();
  }
  else{
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+","+countrycode+"&appid="+apikey;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      latitude = data.coord.lat;
      longitude = data.coord.lon;
      let url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`;
      fetch(url1)
      .then(response => response.json())
      .then(data => {
        document.getElementById("tag").innerHTML="";
        document.getElementById("name").innerHTML=data.name;
        wea = data.weather[0].main;
        document.getElementById("weather").innerHTML=wea;
        document.getElementById("desc").innerHTML=data.weather[0].description;
        document.getElementById("icon").src=`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.getElementById("icon").style.display=null;
        document.getElementById("temperature").innerHTML=`${data.main.temp}&#176 C`;
        document.getElementById("wind").innerHTML= `Wind Speed ${data.wind.speed}%`;
        document.getElementById("humidity").innerHTML=`Humidity ${data.main.humidity}km/h`;
        document.getElementById("flex-container-degree").style.display=null;
        document.getElementById("flex-container").style.visibility=null;
      })
      .catch(() => {
        document.getElementById("tag").innerHTML="Check your details";
        hide();
      });
    })
    .catch(() => {
      document.getElementById("tag").innerHTML="Check your details";
      hide();
    });
  }
};
