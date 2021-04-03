import React, {Component, useState} from "react";
import "./../styles/App.css";



function App() {

  const[data,setData]=useState(false)
  function fun(){
    setData(true)
  }
  return (
    <div id="main">
      {/* // Do not alter the main  */}
      {data && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>}
      <button id="click"onClick={fun}>Update</button>
    </div>
  );
}


export default App;
