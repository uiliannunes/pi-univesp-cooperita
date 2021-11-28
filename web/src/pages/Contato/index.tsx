import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';
import google from '../../assets/google.png';

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
            <div><h2>- Entre em contato conosco: -</h2>
                
                <p>Realizamos coletas agendadas (grandes quantidades), se necessário entre em contato  conosco para realizar seu agendamento!</p>

                  <p>Presidente da Cooperativa:<br/> <b>Keytilin Karina Feliciano Domingues</b></p>

                  <p>Email: keitilinkarina@gmail.com</p>

                  <p>Fone: (15) 3373-5309</p>

                  <Link to="whatsapp://send?phone=+5515945632107&text=Tenho interesse sobre coleta de resíduos">
                  <span>
                    <FiLogIn />
                  </span>
                  <strong>Entre em contato no whatsapp!</strong>
                </Link>

            </div>
              <div>
              <img src={google} alt="#" />
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