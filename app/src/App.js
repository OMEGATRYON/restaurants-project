import React from "react";
import Header from "./components/Landingpage";
import "./App.css";
import About from "./components/Landabout";
import BasicExample from "./components/Navbar";
import Appetizers from "./components/appetizers";
import Takeout from "./components/Takeout";
import Footer from "./components/Footer";
import Breaks from "./components/Middlebreak";
import Dinner from "./components/Dinner";



function App() {
    return (
      <div className="App">
        <BasicExample />
        <Header />
        <About />
        <Takeout />
        <Appetizers />
        <Breaks />
        <Dinner />
        <Footer />
      </div>
    );
  }
  
  export default App;