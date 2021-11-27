import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="COOPERITA - Cooperativa de Reciclagem de Itapetininga/SP" />
          <div id="menu">
          <ul>
            <li><Link to="#">A Cooperita</Link></li>
            <li><Link to="#">Materiais Coletados</Link></li>
            <li><Link to="#">Pontos de Coletas</Link></li>
            <li><Link to="#">Contato</Link></li>
          </ul>
          </div>
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;