import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Allimages from './Allimages'


function App() {

  

  return (
    <div className="App">
      <h1>
        Nasa Images
      </h1>
      <Allimages />

    </div>
  );
}

export default App;
