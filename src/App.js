import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import Account from './components/Account/Account';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <NavBar />
      <Account />
    </div>
  );
}

export default App;
