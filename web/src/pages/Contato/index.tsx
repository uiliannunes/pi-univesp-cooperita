import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';
import quemsomos from '../../assets/quem-somos.png';

const Contato = () => {
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
            <div><h2>- Materiais Coletados -</h2>
                
                <p>A Cooperita atua como Cooperativa de Reciclagem em Itapetininga por aproximadamente 20 anos, onde muitas familias já se beneficiaram levando 
                  renda para suas casas. Atualmente há no quadro 18 cooperados que realizam todos nossos processos.</p>

                  <p>* Computadores
                    * Monitores
                    * Teclados
                    * Impressoras
                    * Celulares
                    * Aparelhos de TV
                    * Aparelhos de DVD
                    * Vídeo cassetes
                    * Outros eletroeletrônicos</p>
            </div>
              <div>
                  <p>- Papelão                                         6 meses

- Papel branco                                6 meses

- Embalagens Longa Vida            100 anos

- Plástico                                          500 anos

- Metais                                            500 anos

- Pilhas                                              500 anos

- Vidro                                              tempo indeterminado

- Tonners                                         1000 anos

- Eletroeletrônicos                        tempo indeterminado (metais pesados)</p>
                  
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

export default Contato;