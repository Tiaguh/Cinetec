import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

import { toast } from 'react-toastify';

export default function Login() {

  const handleLogin = (e) => {
    e.preventDefault()
    toast.success('Successful Login!', { // texto que será exibido no toasty
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

  return (
    <div className="login-container">
      <form>
        <h1>Login</h1>

        <input className='input-1' type="email" placeholder="Digite seu Email" />
        <input className='input-2' type="password" placeholder="Digite seu Senha" />

        <button onClick={handleLogin}>Fazer Login</button>
      </form>

      <Link className='link' to="/cadastro">
        <h3>Não possuí uma conta?</h3>
      </Link>
    </div>
  )
}