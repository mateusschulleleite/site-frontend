import React from "react";
import Header from './components/Header/index.js';
import Home from "./components/Home/index.js";
import Contato from "./components/Contato/index.js";

function App() {
  return (
    <div className="app-portfolio">
      <Header />
      <Home />
      <Contato />
    </div>    
  )
}

export default App;
