import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';
import quemsomos from '../../assets/quem-somos.png';

const Cooperita = () => {
  return (
    <div id="page-home">
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
          <div className="parent">
            <div><h2>- Quem Somos -</h2>
                <p>A Cooperita atua como Cooperativa de Reciclagem em Itapetininga por aproximadamente 20 anos, onde muitas familias já se beneficiaram levando 
                  renda para suas casas. Atualmente há no quadro 18 cooperados que realizam todos nossos processos.</p>
                  <p>Atuamos com a coleta seletiva com caminhão em 13 bairros do município e também contamos com o apoio de parceiros no comércio local
                    para descarte de itens específicos como pilhas e eletrônicos.</p>
            </div>
              <div>
                  <p></p>
                  <img alt="Quem Somos" src={quemsomos} />
              </div>
          </div>

        </main>

      <footer>
            <p> Cooperita - 2021. Todos os direitos reservados. // Rua Orlando Scotto, 68 - VL Arlindo Luz - Itapetininga/SP</p>
      </footer>

      </div>

    </div>
  )
}

export default Cooperita;