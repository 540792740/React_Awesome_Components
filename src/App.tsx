import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import OperationChain from "./Components/OperationChain";
import Panton from "./pages/pantonColor";
import TableList from "./pages/tableList";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">TableList</Link>
            </li>
            <li>
              <Link to="/Panton">Panton</Link>
            </li>
            <li>
              <Link to="/opeartion-chain">opeartion-chain</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TableList />} />
          <Route path="/Panton" element={<Panton />} />
          <Route path="/opeartion-chain" element={<OperationChain />} />
        </Routes>
      </div>
    </Router>
  );
}