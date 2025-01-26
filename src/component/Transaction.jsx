import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Transaction = () => {
  let [data, setData] = useState([]);
  let [totalExpense, setTotalExpense] = useState(0);
  let [Income, setIncome] = useState([]);
  let [totalIncome, setTotalIncome] = useState(0);
  async function showData() {
    let res = await axios.get(
      "https://sprint2-6d269-default-rtdb.asia-southeast1.firebasedatabase.app/financemanager.json"
    );
    let arr = [];
    for (let key in res.data) {
      arr.push({ id: key, ...res.data[key] });
    }
    setData([...arr]);

    let total = 0;
    arr.map((ele) => {
      total += parseInt(ele.amount);
    });

    setTotalExpense(total);
  }
  useEffect(() => {
    showData();
  }, []);

  async function IncomeData() {
    let result = await axios.get(
      " https://sprint2-6d269-default-rtdb.asia-southeast1.firebasedatabase.app/Income.json"
    );
    let arr = [];
    for (let key in result.data) {
      arr.push({ id: key, ...result.data[key] });
    }
    setIncome([...arr]);

    let totalIncome = 0;
    arr.map((ele) => {
      totalIncome += parseInt(ele.amount);
    });

    setTotalIncome(totalIncome);
  }

  useEffect(() => {
    IncomeData();
  }, []);

  return (
    <>
      <h1 style={{backgroundColor:"lightgoldenrodyellow",padding:"10px"}} >Transactions</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h2 style={{backgroundColor:"lightgreen"}} >Income</h2>
          <div  >
            {Income.map((ele) => (
              <div key={ele.id}>
                <ul
                  style={{
                    display: "flex",
                    padding: "20px",
                    justifyContent: "space-around",
                  }}
                >
                  <li>
                    <b>Amount: </b>
                    {ele.amount}
                  </li>
                  <li>
                    <b>Description: </b>
                    {ele.description}
                  </li>
                </ul>
              </div>
            ))}
            <h4 style={{ padding: "10px", color: "blue" }}>
              <b>Total Income :</b>
              {totalIncome}
            </h4>
          </div>
        </div>
        <div>
          <h2 style={{backgroundColor:"lightcoral"}}>Expense</h2>
          <div>
            {data.map((ele) => (
              <div
                key={ele.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",

                  justifyContent: "space-around",
                }}
              >
                <p>
                  <b>Amount: </b>
                  {ele.amount}
                </p>
                <p>
                  <b>Description: </b>
                  {ele.description}
                </p>
              </div>
            ))}
            <h4 style={{ padding: "10px", color: "blue" }}>
              <b>Total Expenses :</b>
              {totalExpense}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
