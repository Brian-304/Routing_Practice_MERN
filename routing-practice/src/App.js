import './App.css';
import React from "react";
import Home from './components/Home';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import {
  Routes, Route, Link
} from "react-router-dom";




function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Link to={"/home"}>Link to Home</Link>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:variableId" element={<PageTwo />} />
        <Route path="/:variableOne/:colorOne/:colorTwo" element={<PageThree />} />
      </Routes>
    </div>
  );
}

export default App;
