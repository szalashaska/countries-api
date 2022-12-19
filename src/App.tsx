import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import "./styles.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:code" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
