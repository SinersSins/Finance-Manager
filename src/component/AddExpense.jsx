import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/input.css";

const AddExpense = () => {
  let [Expense, setExpense] = useState({
    amount: "",
    description: "",
    category: "",
    date: "",
  });
  let [data, setData] = useState([]);
  let [totalExpense, setTotalExpense] = useState(0);

  async function handleAdd() {
    await axios.post(
      "https://sprint2-6d269-default-rtdb.asia-southeast1.firebasedatabase.app/financemanager.json",
      Expense
    );
    alert("Expense added successfully");
    setExpense({ amount: "", description: "", category: "", date: "" });
    showData();
  }
  function handleChange(e) {
    let { name, value } = e.target;
    setExpense({ ...Expense, [name]: value });
  }

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
  return (
    <>
      <div className="input-div">
        <h1>Add Expense</h1>
        <input
          name="amount"
          onChange={handleChange}
          placeholder="Enter the Amount"
          value={Expense.amount}
        />
        <input
          name="description"
          onChange={handleChange}
          placeholder="Description"
          value={Expense.description}
        />
        <input
          name="category"
          onChange={handleChange}
          placeholder="Enter Category"
          value={Expense.category}
        />
        <input
          name="date"
          onChange={handleChange}
          placeholder="Enter Date"
          value={Expense.date}
        />
        <button onClick={handleAdd}>➕ Add</button>
      </div>
      <h2>List Of Expenses</h2>
      <div className="expense">
        <h4
          style={{
            padding: "10px",
            color: "blue",
            border: "1px dashed",
            width: "20%",
            margin: "50px auto 10px auto",
          }}
        >
          <b>Total Expenses :</b>
          {totalExpense}
        </h4>

        {data.map((ele) => (
          <div key={ele.id} className="expense-list">
          
              <ul>
                <li>
                  <b>Amount: </b>
                  {ele.amount}
                </li>
                <li>
                  <b>Description: </b>
                  {ele.description}
                </li>
                <li>
                  <b>Category: </b>
                  {ele.category}
                </li>
                <li>
                  <b>Purchased On: </b>
                  {ele.date}
                </li>
              </ul>
           
          </div>
        ))}
      </div>
    </>
  );
};

export default AddExpense;
