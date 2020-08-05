import React from 'react';
//import ButtonLink from './components/ButtonLink'
import Button from '../Button';
import Logo from '../../assets/img/logo.png';
import './menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Devflix Logo" />
            </a>
            <Button as="a" href="/" className="ButtonLink">Novo Vídeo</Button>
        </nav>
    );
}

export default Menu;