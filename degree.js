function celsius(){
    let url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`;
    fetch(url1)
    .then(response => response.json())
    .then(data => {
      document.getElementById("temperature").innerHTML=`${data.main.temp}&#176 C`;
    })
    .catch(() => {
      document.getElementById("tag").innerHTML="Check your details";
      hide();
    });
    
  }
  
  function fahrenheit(){
    let url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apikey}`;
    fetch(url1)
    .then(response => response.json())
    .then(data => {
      document.getElementById("temperature").innerHTML=`${data.main.temp} F`;
    })
    .catch(() => {
      document.getElementById("tag").innerHTML="Check your details";
      hide();
    });
  }
  
  function kelvin(){
    let url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
    fetch(url1)
    .then(response => response.json())
    .then(data => {
      document.getElementById("temperature").innerHTML=`${data.main.temp} K`;
    })
    .catch(() => {
      document.getElementById("tag").innerHTML="Check your details";
      hide();
    });
  }
  