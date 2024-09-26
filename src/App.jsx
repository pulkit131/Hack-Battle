import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from "./components/Footer";
import DivSlider from "./components/DivSlider";
import Register from '../src/pages/Register';
import Dashboard from '../src/pages/Dashboard';
import Products from '../src/pages/Product';
import Layout from "./components/shared/Layout";
import Xray from "./components/Xray";
import DeepFake from "./components/DeepFake";
function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="/xray" element={<Xray />} />
          <Route path="/deepfake" element={<DeepFake />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
      
      {/* Conditionally render DivSlider only on the Dashboard page */}
      {location.pathname === "/" && <DivSlider />}

      <Footer />
      {/* <DeepFake/> */}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
