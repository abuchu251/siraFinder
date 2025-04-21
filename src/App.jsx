import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Hire from "./pages/Hire";
import Jobs from "./pages/Jobs";
import Apply from "./pages/Apply";
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hires/posts" element={<Hire />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
