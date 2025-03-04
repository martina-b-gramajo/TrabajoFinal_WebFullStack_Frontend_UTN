import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import ENVIROMENT from '../../utils/constants/enviroment'
import { AuthContext } from '../../Context/AuthContext'
import LoginForm from '../../Components/LoginForm/LoginForm'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import './LoginScreen.css'
import { getAuthenticatedHeaders } from '../../fetching/customHeaders.js'

const LoginScreen = () => {
    const { login, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const { form_state, handleChangeInput } = useForm({ email: '', password: '' })

    const url = new URLSearchParams(window.location.search)
    if (url.get('verified')) {
        alert('Cuenta verificada')
    }

    // Log out when the user reaches the login screen
    useEffect(() => {
        const handlePopState = () => {
            if (location.pathname === '/login') {
                logout()
            }
        }

        window.addEventListener('popstate', handlePopState)

        return () => {
            window.removeEventListener('popstate', handlePopState)
        }
    }, [logout, location.pathname])

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(ENVIROMENT.API_URL + '/api/auth/login', {
                method: "POST",
                headers: getAuthenticatedHeaders(),
                body: JSON.stringify(form_state)
            })
            const data = await response.json()
            login(data.data.access_token)
            navigate('/home')
        } catch (error) {
            console.error("Error al loguear", error)
        }
    }

    const errores = {
        email: [],
        password: []
    }

    form_state.email && form_state.email.length > 30 && errores.email.push("El límite de caracteres es 30")
    form_state.email && form_state.email.length < 5 && errores.email.push("El mínimo de caracteres es 5")
    form_state.password && form_state.password.length > 30 && errores.password.push("El máximo de caracteres es 30")
    form_state.password && form_state.password.length < 5 && errores.password.push("El mínimo de caracteres es 5")

    const links = [
        { text: "Aun no tienes cuenta?", to: "/register", label: "Regístrate" },
        { to: "/forgot-password", label: "Olvidé mi contraseña" }
    ]

    return (
        <>
            <Navbar />
            <main className='auth-screen'>
                <LoginForm
                    onSubmit={handleSubmitForm}
                    onChange={handleChangeInput}
                    formState={form_state}
                    errors={errores}
                    links={links}
                />
            </main>
        </>
    )
}

export default LoginScreen