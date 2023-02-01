import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Registration/Register";
import Reset from "./Components/Reset/Reset";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login></Login>} />
          <Route exact path="/register" element={<Register></Register>} />
          <Route exact path="/reset" element={<Reset></Reset>} />
          <Route exact path="/dashboard" element={<Dashboard></Dashboard>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
