import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ChartPage from "./pages/ChartPage";
import Intro from "./pages/Intro";
import Exercises from "./pages/Exercises";
import Foods from "./pages/FoodNutrients";
import MyWork from "./pages/MyWork";
import Home from "./pages/Home";
import NavigationBar from "./components/NavBar.js";

function App() {
  return (
  
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/food" element={<Foods />} />
          <Route path="/MBT" element={<MyWork />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      {/* <Intro />
      <ChartPage /> */}
    </div>
  );
}

export default App;
