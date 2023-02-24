import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../api';
import './cadastro.css'

import { toast } from 'react-toastify';

function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
}

export default function Cadastro() {
  
  const handleRegister = (e) => {
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

  async function handleResgister(event) {
    event.preventDefault();
    try {
      const data = {
        email, password, userName
      };
      const response = await api.post('/user', data);

      alert(`Usuário cadastrado com sucesso. Bem-vindo(a) ao sistema ${userName}`);

      setEmail('');
      setPassword('');
      setUserName('');
    } catch(error){
      alert(`Erro no cadastro. Tente novamente. \n Erro: ${error}`);
    }
  }

  return (
    <div className="cadastro-container">
      <form onSubmit={handleResgister}>

        <h1>Cadastro</h1>

        <input className='input-1' type="name" placeholder="Digite seu Nome" />

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
          laceholder="Digite seu Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <input
          className='input-2'
          type="name"
          placeholder="Digite seu Tipo de Usuário"
          value={userName}
          onChange={e => setUserName(e.target.value)} />

        <button onClick={handleRegister}>Cadastrar</button>
      </form>

      <Link className='link' to="/login">
        <h3>Não possuí uma conta?</h3>
      </Link>

    </div>
  )
}