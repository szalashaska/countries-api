import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attribution from "./components/Attribution";
import Header from "./components/Header";
import { CountriesProvider } from "./contexts/CountriesContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import "./styles.scss";

function App() {
  return (
    <BrowserRouter>
      <CountriesProvider>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/:code" element={<Country />} />
          </Routes>
          <Attribution />
        </ThemeProvider>
      </CountriesProvider>
    </BrowserRouter>
  );
}

export default App;
