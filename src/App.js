import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  const basePath = "/products";

  return (
    <div className="main-container">
      <BrowserRouter>
        <div className="inner-content">
          <Header basePath={basePath} />
          <Route path="/" exact component={Homepage} />
          <Route path={"/:basePath"} exact component={Products} />
          <Route path={"/:basePath/:id"} exact component={ProductDetail} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
