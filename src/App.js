import React from "react";
import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Next from "./components/Next/Next";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Next />
        </div>
    )
}

export default App;