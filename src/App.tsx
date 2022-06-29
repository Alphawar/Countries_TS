import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CountryDetails from './pages/CountryDetails/CountryDetails';
import { ICountry } from './types';

function App() {

  const [countries, setCountries] = useState<ICountry[]>([])

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage countries={countries} setCountries={setCountries}/>} />
          <Route path="/country/:name" element={<CountryDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div> 
    </>
  );
}

export default App;

