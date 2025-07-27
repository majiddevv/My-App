import React from "react";
// Imports the React library - required for JSX and React components

import { useState } from "react";
// Imports the useState hook for managing component state

import "../App.css";
// Imports CSS styles from the parent directory

import axios from "axios";
// Imports axios library for making HTTP requests to APIs

import WeatherCard from "./WeatherCard.jsx";
// Imports the WeatherCard component from the same directory

function Api1() {
  // Declares the main component function named Api1

  const [cityName, setCityName] = useState("");
  // Creates state for storing city name input, initialized as empty string

  const [data, SetData] = useState([]);
  // Creates state for storing weather data array, initialized as empty array

  let submitHandler = async (e) => {
    // Declares async function to handle form submission

    e.preventDefault();
    // Prevents default form submission behavior (page refresh)

    console.log("i am submit Handler Function");
    // Logs message to browser console for debugging

    try {
      // Starts error handling block

      let response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=211fc326e60e7e872ffb36b824cf4424&units=metric `
      );
      // Makes API call to OpenWeatherMap with city name and API key

      console.log("response", response.data.list[0]);
      // Logs first weather data item to console

      console.log("response", response.data.list[0].main.temp);
      // Logs temperature from first weather item

      SetData(response.data.list);
      // Updates state with weather forecast array
    } catch (error) {
      // Handles any errors during API call

      console.log("eror", error);
      // Logs error to console (note: typo in "eror")
    }
  };

  return (
    // Returns JSX to render the component

    <div>
      <h1>Weather App Home</h1>
      {/* Main heading */}
      <form>
        {/* Form element (though not properly handling submission) */}
        <label htmlFor="cityName">City Name:</label>
        {/* Label for input field */}
        <br></br>
        {/* Line break */}
        <input
          type="text"
          placeholder="Enter your City NAME"
          required
          name="cityName"
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        {/* Text input controlled by cityName state */}
        <br></br>
        {/* Another line break */}
        <button type="submit" className="btn-weather" onClick={submitHandler}>
          Get Weather
        </button>
        {/* Button that triggers API call when clicked */}
      </form>
      {data.map((each, index) => (
        <WeatherCard key={index} date={each.dt_txt} main={each.main.temp} />
      ))}
      {/* Maps through weather data array and renders WeatherCard for each item */}
    </div>
  );
}

export default Api1;
// Exports the component so it can be imported elsewhere
