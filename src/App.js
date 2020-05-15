import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/Products";
import ShoppingList from "./components/pages/shoppingList/ShoppingList";
import Access from "./components/pages/Access";

import "./app.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/shopping-list" component={ShoppingList} />
          <Route path="/access" component={Access} />
        </Switch>
        <Footer />
      </>
    );
  }
}
export default App;
