import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    const handleLogout = () => {
        // Aquí puedes agregar la lógica para cerrar sesión
        console.log('Cerrando sesión...');
        navigate('/login');
    }

    const handleProfile = () => {
        // Aquí puedes agregar la lógica para redirigir al perfil
        console.log('Redirigiendo al perfil...');
        navigate('/profile');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <p>Why Not Talk?</p>
            </div>
            <div className="navbar-buttons">
                {isAuthPage ? (
                    <>
                        <Button label="Iniciar sesión" variant="navbar-auth" onClick={() => navigate('/login')} />
                        <Button label="Registrarse" variant="navbar-auth" onClick={() => navigate('/register')} />
                    </>
                ) : (
                    <div className="navbar-dropdown">
                        <button className="navbar-dropbtn">Menú</button>
                        <div className="navbar-dropdown-content">
                            <button onClick={handleProfile}>Ver perfil</button>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
