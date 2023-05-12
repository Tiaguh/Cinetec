import Cadastro from "./components/Pages/Cadastro/Cadastro";
import Login from "./components/Pages/Login/Login";
import HomePage from "./components/Pages/HomePage/HomePage";
import Home from "./components/Pages/Home/Home";
import Error from "./components/Pages/Error/Error";
import ProtectedRouter from "./protected";

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

          <Route element={<ProtectedRouter />}>
            <Route path="/filmes" element={<Filmes />} />
            <Route path="/home" element={<Home />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

      <ToastContainer />

    </div>
  );
}

