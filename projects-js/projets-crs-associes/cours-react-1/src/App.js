import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* path="*" f(x)ne lorsque l'url ne correspond a rien de déclaré plus haut */}
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

  );


};

export default App;
