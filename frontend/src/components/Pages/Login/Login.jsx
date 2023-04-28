import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../../service/api";
import "./login.css"
import banner from './img/banner.png'

import { toast } from "react-toastify";

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()

  async function handleLogin(e) {

    e.preventDefault()

    try {
      const data = {
        email, password
      }

      const response = await api.post("/login", data)

      console.log('>>>>>>',response);

      if (response.status === 200) {
        toast.success("Successful Login!", { // texto que será exibido no toasty
          position: "top-right", // posição que irá aparecer
          autoClose: 5000, // tempo de exibição
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

      sessionStorage.setItem("login", true)

      navigate("/filmes")

    }
    catch (error) {
      alert(`Erro no login. Tente novamente. \n Erro: ${error}`);
    }
  }
  
  return (
    <div className="login-container">

      <img className="img" src={banner} alt="" srcset="" />

      <form>
        <h1>Login</h1>

        <input
          className="input-1"
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="input-2"
          type="password"
          placeholder="Digite seu Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Fazer Login</button>
      </form>

      <Link className="link" to="/cadastro">
        <h3>Não possuí uma conta?</h3>
      </Link>
    </div>
  )
}