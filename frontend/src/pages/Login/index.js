import React from 'react';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1>Acessar</h1>
          <input type="text" placeholder="Sua identificação" />
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
