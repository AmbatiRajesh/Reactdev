import React from "react";
import "./App.css";

function App() {
  let name = "Sri Mani B";
  let num = 92928347587467389;
  let blueColor = false;
  let safeColor = false;

  let arr = [1, 2, 34, 48, 87, 938745, 873647];
  let strArray = ["sanmara", "sriMani", "rahul", "surendra", "madhavi"];
  let arrObj = [
    { name: "Sri", role: "dev" },
    { name: "samara", role: "enmgineer" },
    { name: "Madhavi", role: "Manager" },
  ];

  return (
    <div className="App">
      <h1 className={blueColor ? "header" : safeColor ? "safe" : "error"}>
        Heading
        <p>this are new changes</p>
      </h1>
      <h1>{name}</h1>
<<<<<<< HEAD
      <p> user details</p>
      <p>password</p>
=======
      <p>lorem20</p>
      <p>samrasimha</p>
>>>>>>> def8eb48afb52e483eac4a0bdf5a0d093da57193
      {false ? <h3>{num}</h3> : <h3>No number</h3>}
      {arr.map((value, index) => {
        return <h3>{value}</h3>;
      })}

      {arrObj.map((value, index) => {
        return (
          <div className="user-item">
            <h3>Name : {value.name}</h3>
            <h3>Role : {value.role}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
