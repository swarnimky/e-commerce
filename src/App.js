import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import BottomBar from "./components/BottomBar";

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
      <BottomBar />
    </BrowserRouter>
  );
}

export default App;
