function getWeather(){
  $.ajax({
           url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + $("#cityInput").val() + "&mode=json&APPID=3bbe627365ecd26f9c073d80753aa61b" ,
           type: 'GET',
           dataType: 'jsonp',
           success: function (data) {
               var wrapper = $("#weatherWrapper");
               wrapper.empty();
               wrapper.append("<h2>City: "+data.city.name+", "+data.city.country+"</h2>")
               for(var i =0; i<40;i=i+8){
              wrapper.append(createWeatherWidg(data.list[i]));

               }

           },
           error: function () {
               alert('Failed!');
           }

       });
        function createWeatherWidg(data) {
          var date = new Date(data.dt_txt);
          var day = date.getDate();
          var month = date.getMonth();
          var year = date.getFullYear();

          var currentDate = day+"-"+month+"-"+year;
        return "<div class='weatherData'><div class='data'> <p>Date: " + currentDate +"</p></div>" +
        "<div class='pressure'> <p>Temperature: " + (data.main.temp - 273.15).toFixed(2) + " C</p></div>"+
                "<div class='description'> <p>Title: " + data.weather[0].main + "</p></div>" +
                "<div class='description'> <p>Description: " + data.weather[0].description + "</p></div>" +
                "<div class='wind'> <p>Wind Speed: " + data.wind.speed + "</p></div>" +
                "<div class='humidity'> <p>Humidity: " + data.main.humidity + "%</p></div>" +
                "<div class='pressure'> <p>Pressure: " + data.main.pressure + " hpa</p></div></div><hr>";
    }
}
