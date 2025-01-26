import React, { useContext } from "react";

const Home = () => {
  return (
    <>
      <h1>💸Finance Manager💸</h1>
      <div
        className="home-div"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          
        
        }}
      >
        <div>
          <h3>Financial Summary</h3>
          <h4>Income:</h4>
          <h4>Expense:</h4>
        </div>
        <div>
          <h3>Data Analytics</h3>
          <select name="select" id="selectdata">
            <option value="">Select Category</option>
            <option>Most Frequent Expense</option>
            <option value="">Most Expensive Expense</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Home;
