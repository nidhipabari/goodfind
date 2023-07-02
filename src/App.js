// import { Home } from './Components/Home.js'
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Header } from './Components/Header.js';
// import { Product } from './Components/Product.js';
// import { Login } from './Components/Login.js';
// import { Checkout } from './Components/Checkout.js';
// // import { SignUp } from './Components/signup.js';
// import  Auth from './Components/auth.js';
import React from "react";
import "./App.css";
import { Home } from './Components/Home.js'
import { Header } from './Components/Header.js';
import { Login } from './Components/Login.js';
import {
  BrowserRouter as Router, Route,Routes
} from "react-router-dom"; /**Switch will render the first route child that matches */
import { Checkout } from './Components/Checkout.js';
// import Login from "./pages/Login";
import Auth from "./Components/auth";


function App() {
  return (
    <div className="app">
      <Header/>
      <Router>
        <Routes>

          {/* <Route path= "/auth" >
            <Auth />

          </Route> */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
  // return (
  //   <div className="App">

      
  //     <Routes>
  //     <Route path="/home" element={<Home />} />
  //       <Route path="/" element={<Home />} />
  //       <Route path="/auth" element={<Auth />} />
  //       <Route path="/checkout" element={<Checkout />} />


  //       {/* <Route path="/booknowform" element={<Home/>} />
  //     <Route path="/rooms/:zebra" element={<SingleRoom/>} /> */}

  //       {/* <Route path="/create-recipe" element={<Create/>} />
  //     <Route path="/saved" element={<Saved/>} /> */}
  //     </Routes>


  //   </div>
  // );
}

export default App;
