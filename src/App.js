import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
