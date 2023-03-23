import React, { useState } from "react";
import './App.css';
import { Login } from "../Login/Login";
import { Home } from "../Home/Home";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    console.log(formName, currentForm)
    setCurrentForm(formName);
  }
  console.log(currentForm);

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Home onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;