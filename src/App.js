import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Contents from "./components/Contents";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Contents />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
