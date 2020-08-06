import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/img/logo.png';
import './menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Devflix Logo" />
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">Novo Vídeo</Button>
        </nav>
    );
}

export default Menu;