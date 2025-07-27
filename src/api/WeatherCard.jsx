import React from "react";

let WeatherCard = ({ date, main }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{date}</td>
            <td>{main}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherCard;
