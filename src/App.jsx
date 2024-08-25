import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import FashionPage from "./pages/FashionPage";
import Favourite from "./pages/Favourite";
import Signin from "./pages/Signin";
import Lifestyle from "./pages/Lifestyle";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import './Global.scss';

const Private = ( { Item }) => {
  const signed = false;
  return signed > 0 ? <Item /> : <Signin />
  
}

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Private Item={Home} />} />
        <Route path="/" element={<Signin />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route exact path="/favourite" element={<Private Item={Favourite} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}

export default App;
