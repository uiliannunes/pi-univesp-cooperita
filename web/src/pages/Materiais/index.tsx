import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';
import reciclagem from '../../assets/reciclagem.png';

const Materiais = () => {
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
                
                <p>Além da coleta seletiva já estabelecida no município frente aos itens de reciclagem, estamos realizamos a coleta de itens eletroeletrônicos:</p>

                  <p>
                    <ul>
                      <li>Pilhas</li>
                      <li>Computadores</li>
                      <li>Monitores</li>
                      <li>Teclados</li>
                      <li>Impressoras</li>
                      <li>Celulares</li>
                      <li>Aparelhos de TV</li>
                      <li>Aparelhos de DVD</li>
                      <li>Vídeo cassetes</li>
                      <li>Outros eletroeletrônicos</li>
                    </ul>
                  </p>
            </div>
              <div>
                  <h3>Tempo de decomposição na Natureza:</h3>
                  <p>
                    <ul>
                      <li> Papelão 6 meses</li>
                      <li> Papel branco                                6 meses</li>
                      <li> Embalagens Longa Vida            100 anos</li>
                      <li> Plástico                                          500 anos</li>
                      <li> Metais                                            500 anos</li>
                      <li> Pilhas                                              500 anos</li>
                      <li> Vidro                                              tempo indeterminado</li>
                      <li> Tonners                                         1000 anos</li>
                      <li> Eletroeletrônicos                        tempo indeterminado (metais pesados)</li>    
                    </ul>
                    
                </p>
                <img src={reciclagem} alt="Reciclagem" width="90%" />
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

export default Materiais;