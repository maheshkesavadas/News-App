import "./App.css";
import Navbar from "./componenets/Navbar";
import React, { Component } from "react";
import News from "./componenets/News";
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="APP">
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<News key="general" pagesize={5} country="in" title="general" category="general" />}> </Route>
              <Route exact path="/entertainment" element={<News key="entertainment" pagesize={5} title="entertainment" country="in" category="entertainment" />}></Route>
              <Route exact path="/business" element={<News key="business" pagesize={5} country="in" title="business" category="business" />}>   </Route>
              <Route exact path="/health" element={<News key="health" pagesize={5} country="in" title="health" category="health" />}>   </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
