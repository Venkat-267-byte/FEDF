import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true"
      );

      if (!response.ok) {
        throw new Error("Unable to fetch weather data");
      }

      const data = await response.json();
      setWeather(data.current_weather);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return <div className="weather-container"><div className="weather-card"><p className="status-message">Loading Weather Information...</p></div></div>;
  }

  if (error) {
    return <div className="weather-container"><div className="weather-card"><p className="error-message">Error: {error}</p></div></div>;
  }

  return (
    <div className="weather-container">
      <div className="weather-card">
        <header className="weather-header">
          <div>
            <h1>Weather Information System</h1>
          </div>
        </header>

        <div className="weather-summary">
          <div>
            <p className="summary-label">Location</p>
            <p className="summary-value">Hyderabad</p>
          </div>
          <div>
            <p className="summary-label">Condition</p>
            <p className="summary-value">{weather.weathercode === 0 ? "Clear" : "Partly Cloudy"}</p>
          </div>
        </div>

        <div className="weather-details">
          <div className="detail-row">
            <span>Temperature</span>
            <strong>{weather.temperature}°C</strong>
          </div>
          <div className="detail-row">
            <span>Wind Speed</span>
            <strong>{weather.windspeed} km/h</strong>
          </div>
          <div className="detail-row">
            <span>Wind Direction</span>
            <strong>{weather.winddirection}°</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
