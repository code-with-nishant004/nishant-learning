import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "admin-lte/dist/css/adminlte.css";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Seller from "./pages/Sellers";
import Orders from "./pages/Orders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sellers" element={<Seller />} />
        <Route path="/orders" element={<Orders />} />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
