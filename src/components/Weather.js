

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { WeatherContext } from "../App";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {LoadingOutlined} from '@ant-design/icons';


const Weather = () => {
  const { weatherData, setWeatherData } = useContext(WeatherContext);
  const { searchText, setSearchText } = useContext(WeatherContext);
  const [loading, setLoading] = useState(false);
  const appId = 'b1c28ee5cbb89209c444b383bf6162d4';
  const location = searchText;

  useEffect(() => {
    const fetchData = async () => {
        try {
          if (location === '') {
            setWeatherData(null);
            return;
          }
      
          setLoading(true);
          const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=1635890035cbba097fd5c26c8ea672a1`
          );
          setWeatherData(response.data);
          setLoading(false);
          console.log(response.data.list.slice(0, 5));
        } catch (error) {
          console.error('Error fetching data', error);
          setWeatherData(null);
          setLoading(false);
        }
      };
      
    fetchData();
  }, [setWeatherData, location, appId]);

  const renderWeatherData = () => {
    if (loading) {
      return (
        <div className="text-center">
          
          <LoadingOutlined size="3x" />
          <p>Loading...</p>
        </div>
      );
    } else if (weatherData && weatherData.list) {
      const weatherList = weatherData.list.slice(0, 5);

      return (
        <div className="row">
          {weatherList.map((weatherItem, index) => (
            <div className="col-md-2" key={index}>
              <table className="table table-bordered">
              <tbody>
                <tr className="table-secondary">
                  <th colSpan="2">Date: {weatherItem.dt_txt.split(' ')[0]}</th>
                </tr>
                
                <tr>
                  <th colSpan="2" className="table-secondary">Temperature</th>
                </tr>
                
                <tr>
                  <th>Min</th>
                  <th>Max</th>
                </tr>
                <tr>
                  <td>{weatherItem.main.temp_min}</td>
                  <td>{weatherItem.main.temp_max}</td>
                </tr>
                <tr>
                  <th>Humidity</th>
                  <td>{weatherItem.main.humidity}</td>
                </tr>
                <tr>
                  <th>Pressure</th>
                  <td>{weatherItem.main.pressure}</td>
                </tr>
              </tbody>
            </table>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return <div>{renderWeatherData()}</div>;
};

export default Weather;