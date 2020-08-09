import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://xesque.rocketseat.dev/users/avatar/profile-aecb4b6f-96a8-497e-af09-d1212b676c82.jpg" alt="Vinicius Cornieri"/>
      <div>
        <strong>Vinicius Cornieri</strong>
        <span>Física</span>
      </div>
    </header>
    <p>
      Loren ipsum
      <br/> <br/>
      Lorem ipsum
    </p>
    <footer>
      <p>
        Preço/hora
        <strong>R$ 20,00</strong>
      </p>
      <button>
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contanto
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;