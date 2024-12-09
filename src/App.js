import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main.jsx";  
import NumericInput from "./components/validator";
import CodeSender from "./components/codeSender";  
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="login" element={<NumericInput />} />
            <Route path="login/:phoneNumber" element={<CodeSender />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;