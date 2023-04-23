import Cadastro from "./components/Pages/Cadastro/Cadastro";
import Login from "./components/Pages/Login/Login";
import HomePage from "./components/Pages/HomePage/HomePage";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filmes from "./components/Pages/Filmes/Filmes";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filmes" element={<Filmes />} />
        </Routes>
      </Router>

      <ToastContainer />

    </div>
  );
}

