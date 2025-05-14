// src/App.js
import React from 'react';
import useHello from './hooks/useHello';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";

function App() {
  const hello = useHello();

  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<h1>HOME</h1>} />
                <Route path="/profile" element={<h1>ABOUT</h1>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
