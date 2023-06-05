import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import Search from './components/Search';
import { createContext, useState } from 'react';
import Header from './components/Header';

export const WeatherContext = createContext(null);

function App() {
  const [weatherData, setWeatherData] = useState(undefined);
  const [searchText, setSearchText] = useState('');
  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData,searchText,setSearchText }}>
      <Header/>
      <Search />
      <Weather />
    </WeatherContext.Provider>
  );
}

export default App;
