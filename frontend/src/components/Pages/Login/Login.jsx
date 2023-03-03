import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../api';
import './login.css'

import { toast } from 'react-toastify';

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {

    e.preventDefault()

    try {
      const data = {
        email, password
      }

      const response = await api.get('/user/login', data)

      if (response.status === 200) {
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
    } catch (error) {
      alert(`Erro no login. Tente novamente. \n Erro: ${error}`);
    }
  }

  return (
    <div className="login-container">
      <form>
        <h1>Login</h1>

        <input
          className='input-1'
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className='input-2'
          type="password"
          placeholder="Digite seu Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Fazer Login</button>
      </form>

      <Link className='link' to="/cadastro">
        <h3>Não possuí uma conta?</h3>
      </Link>
    </div>
  )
}