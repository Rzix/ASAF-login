import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main.jsx";  
import NumericInput from "./components/validator";
import CodeSender from "./components/codeSender";  
import "./App.css";

function App() {
  return (
    <div className="App">
      <Main/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/numericInput" element={<NumericInput />} />
          <Route path="/codeSender" element={<CodeSender />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
