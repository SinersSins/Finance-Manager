import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeRoute from "./component/HomeRoute";
import AddExpense from "./component/AddExpense";
import Navbar from "./component/Navbar";
import AddIncome from "./component/Income";
import Transaction from "./component/Transaction";

function App() {
  return (
    <>
      <Navbar />{" "}
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/addIncome" element={<AddIncome/>} />
        <Route path = "/transaction" element= {<Transaction/>} />
      </Routes>
    </>
  );
}

export default App;
