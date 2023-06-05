import React, { createContext, useState } from 'react'

export const WeatherContext = createContext({});


//const WeatherContext = createContext({});
/*
const WeatherProvider = ({children})=>{
    const [weatherData, setWeatherData] = useState(null);

    return (
        <WeatherContext.Provider value={[weatherData, setWeatherData]}>{children}</WeatherContext.Provider>
    );
};

export {WeatherContext, WeatherProvider};
*/