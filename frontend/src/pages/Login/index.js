import React, { useState } from 'react';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

const Login = () => {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      console.log(err);
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Acessar</h1>
          <input
            type="text"
            placeholder="Sua identificação"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">
            Acessar
          </button>

          <Link className="back-link" to="/register">
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default Login;
