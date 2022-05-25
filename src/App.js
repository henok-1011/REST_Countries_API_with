import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import Header from "./components/Header";
import Filter from "./components/Filter";
import CountryDetail from "./components/CountryDetail";
import Home from "./components/Home";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState();
  const [count, setCount] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setCountries(res.data);
        setCount(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                countries={countries}
                setCountries={setCountries}
                count={count}
                setCount={setCount}
              />
            }
          />
          <Route
            exact
            path="/detail/:index"
            element={<CountryDetail count={countries} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
