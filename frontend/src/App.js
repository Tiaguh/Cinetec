import Cadastro from "./components/Pages/Cadastro/Cadastro";
import Login from "./components/Pages/Login/Login";
import HomePage from "./components/Pages/HomePage/HomePage";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={< HomePage />} />
        </Routes>
      </Router>

      <ToastContainer />

    </div>
  );
}

