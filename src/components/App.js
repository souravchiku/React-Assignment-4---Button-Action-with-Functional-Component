import React, {Component, useState} from "react";
import "./../styles/App.css";



function App() {

  const[data,setData]=useState("")
  function fun(){
    setData("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.")
  }
  return (
    <div id="main">
      {/* // Do not alter the main  */}
      <p id="para">{data}</p>
      <button id="click"onClick={()=>fun()}>Update</button>
    </div>
  );
}


export default App;
