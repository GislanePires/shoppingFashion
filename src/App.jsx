import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import FashionPage from "./pages/FashionPage";
import Favourite from "./pages/Favourite";
import Lifestyle from "./pages/Lifestyle";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import './Global.scss';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}

export default App;
