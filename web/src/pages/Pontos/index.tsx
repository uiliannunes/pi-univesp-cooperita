import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles-pontos.css';

import logo from '../../assets/logo.svg';
import logo1 from '../../assets/745b13fc1e35-logo-sj.jpeg';
import logo2 from '../../assets/a9269faf67ca-prefeitura.jpeg';
import logo3 from '../../assets/aa5b4963593e-cervejaria.jpeg';
import logo4 from '../../assets/d5259dbcdb76-cofesa.jpeg';
import logo5 from '../../assets/9548529f0a18-fatec.jpeg';


const Pontos = () => {
  return (
    <div id="page-home-pontos">
      <div className="content2">
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
        <div className="topo-pontos">
         <h2>- Conheça alguns dos nossos pontos de coleta:</h2> 
         </div><br/>  
        <div className="parent2">
          <div className="mini">
            <img src={logo1} alt="logo1"/><br/>
            <b>Padaria São João</b>
            <hr/>
              <br/>
              <ul>
                <li>Lâmpadas</li>
                <li>Pilhas e Baterias</li>
                <li>Resíduos Eletrônicos</li>
              </ul>
            <a target="_blank" href="https://www.google.com.br/maps/place/Padaria+S%C3%A3o+Jo%C3%A3o+1/@-23.589173,-48.0470133,19.12z/data=!4m5!3m4!1s0x94c5cded5f095353:0x7fdab83ecb2411ed!8m2!3d-23.5889638!4d-48.0468218">COMO CHEGAR?</a>
          </div>
          <div className="mini">
            <img src={logo2} alt="logo2"/><br/>
            <b>Prefeitura Itapetininga</b>
            <hr/>
              <br/>
              <ul>
                <li>Lâmpadas</li>
                <li>Pilhas e Baterias</li>
                <li>Resíduos Eletrônicos</li>
              </ul>
            <a target="_blank" href="https://www.google.com.br/maps/search/pa%C3%A7o+municipal+itapetininga/@-23.5713837,-48.0210407,17.47z">COMO CHEGAR?</a>
          </div>

          <div className="mini">
            <img src={logo3} alt="logo3"/><br/>
            <b>RT166 Cervejaria</b>
            <hr/>
              <br/>
              <ul>
                <li>Lâmpadas</li>
                <li>Pilhas e Baterias</li>
                <li>Resíduos Eletrônicos</li>
              </ul>
            <a target="_blank" href="https://www.google.com.br/maps/place/RT166+CERVEJARIA/@-23.6094389,-48.0629742,17.86z/data=!4m5!3m4!1s0x94c5cb8ee81c209f:0x94562725c0d16aa1!8m2!3d-23.6094237!4d-48.0619315">COMO CHEGAR?</a>
          </div>

          <div className="mini">
            <img src={logo4} alt="logo4"/><br/>
            <b>Cofesa Supermercado</b>
            <hr/>
              <br/>
              <ul>
                <li>Lâmpadas</li>
                <li>Pilhas e Baterias</li>
                <li>Resíduos Eletrônicos</li>
              </ul>
            <a target="_blank" href="https://www.google.com.br/maps/place/Cofesa/@-23.585535,-48.0488721,19.87z/data=!4m5!3m4!1s0x94c5cc8d03ef0aaf:0x28a2030e916ebfdc!8m2!3d-23.5858069!4d-48.0490749">COMO CHEGAR?</a>
          </div>

          <div className="mini">
            <img src={logo5} alt="logo5"/><br/>
            <b>FATEC Itapetininga</b>
            <hr/>
              <br/>
              <ul>
                <li>Lâmpadas</li>
                <li>Pilhas e Baterias</li>
                <li>Resíduos Eletrônicos</li>
              </ul>
            <a target="_blank" href="https://www.google.com.br/maps/place/Fatec+Itapetininga/@-23.6006419,-48.0519016,17.95z/data=!4m5!3m4!1s0x94c5cc9cc5b2b48d:0x22c89f087b9f542e!8m2!3d-23.6001033!4d-48.0514259">COMO CHEGAR?</a>
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

export default Pontos;