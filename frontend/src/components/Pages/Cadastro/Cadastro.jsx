import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../api';
import './cadastro.css'
import banner from './img/banner.png'

import { toast } from 'react-toastify';

export default function Cadastro() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [typeUser, setTypeUser] = useState('')

  async function handleResgister(e) {

    e.preventDefault()

    try {
      const data = {
        name, email, password, typeUser
      };
      const response = await api.post('/user/create-user', data);

      alert(`Usuário cadastrado com sucesso. Bem-vindo(a) ao sistema ${name}`);

      if (response.status === 200) {
        toast.success('Successful Register!', { // texto que será exibido no toasty
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
      alert(`Erro no cadastro. Tente novamente. \n Erro: ${error}`);
    }
  }

  return (
    <div className="cadastro-container">

      <img className='img' src={banner} alt="" srcset="" />

      <form>

        <h1>Cadastro</h1>

        <input
          className='input-1' type="name"
          placeholder="Digite seu Nome"
          value={name}
          onChange={e => setName(e.target.value)} />

        <input
          className='input-2'
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className='input-1'
          type="password"
          placeholder="Digite seu Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <input
          className='input-2'
          type="name"
          placeholder="Digite seu Tipo de Usuário"
          value={typeUser}
          onChange={e => setTypeUser(e.target.value)}
        />

        <button onClick={handleResgister}>Cadastrar</button>
      </form>

      <Link className='link' to="/login">
        <h3>Já possuí uma conta?</h3>
      </Link>

    </div>
  )
}