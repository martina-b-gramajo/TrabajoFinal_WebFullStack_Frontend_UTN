import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                
                <p>Why Not Talk?</p>
            </div>
            <div className="navbar-buttons">
                <Button label="Iniciar sesión" variant="navbar-auth" onClick={() => navigate('/login')} />
                <Button label="Registrarse" variant="navbar-auth" onClick={() => navigate('/register')} />
            </div>
        </nav>
    );
};

export default Navbar;
