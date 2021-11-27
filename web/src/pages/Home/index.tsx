import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home-principal">
      <div className="content">
        <header>
        <Link to="/"><img src={logo} alt="COOPERITA - Cooperativa de Reciclagem de Itapetininga/SP" /></Link>
          <div id="menu">
          <ul>
            <li className="mouse"><Link to="/Cooperita">A Cooperita</Link></li>
            <li><Link to="/Materiais">Materiais Coletados</Link></li>
            <li><Link to="/Pontos">Pontos de Coletas</Link></li>
            <li><Link to="/Contato">Contato</Link></li>
          </ul>
          </div>
        </header>

        <main>
          <h1>Somos a Cooperativa de Reciclagem em Itapetininga-SP.</h1>
          <p>Ajudamos nossa comunidade a propagar a sustentabilidade e preservar o meio ambiente.</p>

          <Link to="/Pontos">
            <span>
              <FiLogIn />
            </span>
            <strong>Conheça Nossos Pontos de Coleta!</strong>
          </Link>
        </main>

      <footer>
            <p> Cooperita - 2021. Todos os direitos reservados. // Rua Orlando Scotto, 68 - VL Arlindo Luz - Itapetininga/SP</p>
      </footer>

      </div>

    </div>
  )
}

export default Home;