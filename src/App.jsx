import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import DivSlider from "./components/DivSlider";
import Register from '../src/pages/Register'
import Dashboard from '../src/pages/Dashboard'
import Products from '../src/pages/Product'
import Layout from "./components/shared/Layout";

function App() {
  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
      <DivSlider/>
      <Footer/>
     
    </>
  );
}

export default App;