import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const AddIncome = () => {
  let [Income, setIncome] = useState({ amount: "", description: "", date: "" });
  let [data, setData] = useState([]);
    let [totalIncome, setTotalIncome] = useState(0)

  async function handleAdd() {
    await axios.post(
      " https://sprint2-6d269-default-rtdb.asia-southeast1.firebasedatabase.app/Income.json",
      Income
    );
    alert("Expense added successfully");
    setIncome({ amount: "", description: "", category: "", date: "" });
    showData();
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setIncome({ ...Income, [name]: value });
  }
  async function showData() {
    let res = await axios.get(
      " https://sprint2-6d269-default-rtdb.asia-southeast1.firebasedatabase.app/Income.json"
    );
    let arr = [];
    for (let key in res.data) {
      arr.push({ id: key, ...res.data[key] });
    }
    setData([...arr]);

    let total = 0
    arr.map((ele) => {   
      total += parseInt(ele.amount);
    })
   
    setTotalIncome(total)
  }

  useEffect(() => {
    showData();
  }, []);
  return (
    <>
      <div>
        <h1>Add Income</h1>
        <input
          name="amount"
          onChange={handleChange}
          placeholder="Enter the Amount"
          value={Income.amount}
        />
        <input
          name="description"
          onChange={handleChange}
          placeholder="Description"
          value={Income.description}
        />

        <input
          name="date"
          onChange={handleChange}
          placeholder="Enter Date"
          value={Income.date}
        />
        <button onClick={handleAdd}>➕ Add</button>
      </div>
      <div>
        <h2>List Of Incomes</h2>

        {data.map((ele) => (
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

              <li>
                <b>Credited On: </b>
                {ele.date}
              </li>
            </ul>
          </div>
        ))}
        <h4 style={{ padding: "10px", color: "blue" }}>
          <b>Total Income :</b>
          {totalIncome}
        </h4>
      </div>
    </>
  );
};

export default AddIncome;
