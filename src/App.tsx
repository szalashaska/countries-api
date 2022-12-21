import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import "./styles.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:code" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
