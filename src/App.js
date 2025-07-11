import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Archive from "./pages/archive";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>
  );
}

export default App;
