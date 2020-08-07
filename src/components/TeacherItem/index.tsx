import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEq7cu_3QnBnw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=qfMf2ShUSJJFlNWy3j8brkV3l2N0exRFfBLIVXEYjH8"
          alt="Thiago de Melo"
        />
        <div>
          <strong>Thiago de Melo</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>A equipe de suporte precisa saber que a normalização da data superou o desempenho de compilação multi-plataforma de forma asincrona.</p>
      <br/>
      <p>Desde ontem a noite o módulo de recursão paralela complexificou o merge de uma compilação com tempo acima da media.</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;