import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import './Navbar.css'
import Button from '../Button/Button'

const Navbar = () => {
    const navigate = useNavigate()
    const { isAuthenticatedState, logout } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleLogout = () => {
        logout()
        navigate('/login')
    };

    const handleProfile = () => {
        navigate('/profile')
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <p>Why Not Talk?</p>
            </div>
            <div className="navbar-buttons">
                {isAuthenticatedState ? (
                    <div className="navbar-dropdown">
                        <div className={`navbar-burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={`navbar-dropdown-content ${isMenuOpen ? 'open' : ''}`}>
                            <button onClick={handleProfile}>Ver perfil</button>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <Button
                            label="Iniciar sesión"
                            variant="navbar-auth"
                            onClick={() => navigate('/login')}
                        />
                        <Button
                            label="Registrarse"
                            variant="navbar-auth"
                            onClick={() => navigate('/register')}
                        />
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar