let units = "metric";
let apikey="af7d09c961691d7b61782b2f8296d1f4";

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

function fn(){
  let url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apikey}`;
  fetch(url1)
      .then(response => response.json())
      .then(data => {
      console.log(data);
      document.getElementById("tag").innerHTML="";
      console.log(data.name);
      document.getElementById("name").innerHTML=data.name;
      document.getElementById("weather").innerHTML=data.weather[0].main;
      wea = data.weather[0].main;
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
          document.getElementById("tag").innerHTML="Unable to Show Details. Try again later";
          hide();
      });
      };

function weatherlocation(){
    const successCallback = (position) => {
        console.log(position);
        let ctr = position.coords;
        latitude = ctr.latitude;
        longitude = ctr.longitude;
        fn();
      };
      
      const errorCallback = (error) => {
        window.alert(error);
        document.getElementById("tag").innerHTML="Unable to Show Details. Try again later"
      };
      
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};
weatherlocation()