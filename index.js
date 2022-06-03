import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import Shop from "./Shop"

function App() {
  const [log, setLog] = useState(false)
  function LogIn(){
    setLog(true)
  }
  function LogOut(){
    setLog(false)
  }
  const isLoged = <>
    <div className="ui-container">
      <h2 className = "ui-title">Здравствуйте</h2>
      <button className="ui-button" onClick = {LogOut}>Выйти</button>
      <Shop />
    </div>
  </>
  const isNotLoged = <>
    <div className="ui-container">
      <h2 className="ui-title">Нужно залогиниться!</h2>
      <button className="ui-button" onClick = {LogIn}>Войти</button>
    </div>
  </>
  
  if(log === false) {
    return isNotLoged;
  }
  else {
    return isLoged
  }
}

render(<App />, document.querySelector("#root"));
