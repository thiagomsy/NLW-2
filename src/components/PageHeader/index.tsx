import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'
import logoIcon from '../../assets/images/logo.svg'

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>

        <img src={logoIcon} alt="Proffy"/>
      </div>

      <div className="header-content">
      <strong>{props.title}</strong>

      {props.children}
      </div>
    </header>
  );
}

export default PageHeader;