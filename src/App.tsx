import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import OperationChain from "./Components/OperationChain";
import Panton from "./pages/basicJS";
import BasicTs from "./pages/basicTs";
import CssBasic from "./pages/css";

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
            <li>
              <Link to="/basic-ts-ways">basic Ts  Stratrgy</Link>
            </li>
            <li>
              <Link to="/css-basic">basic Css</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* <Route path="/" element={<TableList />} /> */}
          <Route path="/Panton" element={<Panton />} />
          <Route path="/opeartion-chain" element={<OperationChain />} />
          <Route path="/basic-ts-ways" element={<BasicTs />} />
          <Route path="/css-basic" element={<CssBasic />} />

        </Routes>
      </div>
    </Router>
  );
}