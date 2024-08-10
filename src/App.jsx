import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import FashionPage from "./pages/FashionPage";
import Favourite from "./pages/Favourite";
import Lifestyle from "./pages/Lifestyle";
import Signup from "./pages/Signup";

function App() {

  return (
    <Router>
      <Home/>
      <Routes>
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="fashion" element={<FashionPage />} />
        <Route path="favourite" element={<Favourite />} />
        <Route path="lifestyle" element={<Lifestyle />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;
