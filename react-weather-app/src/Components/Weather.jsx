import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [data, setData] = useState(null);
  const [cityName, setCityName] = useState("Baku");
  const [query, setQuery] = useState("Baku");

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=0e2b3a010d6e4facb5573926242012&q=${query}&aqi=no`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error("error:", err));
  }, [query]);

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName.trim() !== "") {
      setQuery(cityName); 
    } else {
      alert("duzgun data daxil edin!");
    }
  };

  return (
    <div className="container" style={{ backgroundColor: "blue", width: "300px", height: "350px", padding: "10px", color: "white", borderRadius: "10px" }}>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={cityName}
            onChange={handleChange}
            style={{ width: "80%",borderRadius: "5px" }}
          />
          <button type="submit" style={{ marginLeft: "10px", borderRadius: "5px" }}>
            Search
          </button>
        </form>
      </div>

      <div className="main" style={{ marginTop: "20px" }}>
        {data ? (
          <>
            <h3>{data.location.name}, {data.location.region}</h3>
            <p>{data.location.country}</p>
            <img src={`https:${data.current.condition.icon}`} />
            <p>{data.current.condition.text}</p>
            <p>{data.current.temp_c}°C</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
