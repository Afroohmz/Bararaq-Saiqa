// script.js

$(document).ready(function() {
    // Function to initialize the weather dashboard
    function init() {
      // Load search history from local storage
      var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
      renderSearchHistory(searchHistory);
    }
  
    // Function to render the search history
    function renderSearchHistory(searchHistory) {
      $("#searchHistory").empty();
      for (var i = 0; i < searchHistory.length; i++) {
        var btn = $("<button>")
          .addClass("btn btn-primary btn-sm")
          .text(searchHistory[i])
          .on("click", function() {
            var city = $(this).text();
            getWeatherData(city);
          });
        var li = $("<li>").append(btn);
        $("#searchHistory").append(li);
      }
    }
  
    // Function to fetch weather data for a city
    function getWeatherData(city) {
      var apiKey = "809a42362504cdc1900e0eaa4a448474"; // Replace with your API key
      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
  
      // Perform AJAX call to OpenWeatherMap API
      $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json",
        success: function(response) {
          console.log(response);
          // Process the response and render weather data
        },
        error: function(error) {
          console.log("Error: " + error);
        }
      });
    }
  
    // Event listener for search button
    $("#searchBtn").on("click", function(event) {
      event.preventDefault();
      var city = $("#cityInput").val().trim();
      if (city !== "") {
        getWeatherData(city);
      }
    });
  
    init();
  });
  