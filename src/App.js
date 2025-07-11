import "./App.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Archive from "./pages/archive";
import Trash from "./pages/trash";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/trash" element={<Trash />} />
    </Routes>
  );
}

export default App;
