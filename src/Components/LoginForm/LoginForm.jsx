/*import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import ENVIROMENT from '../../utils/constants/enviroment'
import { AuthContext } from '../../Context/AuthContext'
import './LoginForm.css'
import Button from '../Button/Button'
import Input from '../Input/Input'

const LoginForm = () => {
    const { login, isAuthenticatedState } = useContext(AuthContext)
    const navigate = useNavigate()
    const { form_state, handleChangeInput } = useForm({ email: '', password: '' })
    const url = new URLSearchParams(window.location.search)
    if (url.get('verified')) {
        alert('Cuenta verificada')
    }
    const handleSubmitForm = async (event) => {
        try {
            event.preventDefault()
            const response = await fetch(ENVIROMENT.API_URL + '/api/auth/login', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'x-api-key': ENVIROMENT.API_KEY
                },
                body: JSON.stringify(form_state)
            })
            const data = await response.json()

            login(data.data.access_token)
            navigate('/home')
        }
        catch (error) {
            console.error("Error al loguear", error)
        }

    }
    const errores = {
        email: [
        ],
        password: [
        ]
    }

    form_state.email && form_state.email.length > 30 && errores.email.push("El limite de caracteres es 30")
    form_state.email && form_state.email.length < 5 && errores.email.push("El minimo de caracteres es 5")
    form_state.password && form_state.password.length < 5 && errores.password.push("El minimo de caracteres es 5")

    return (
        <form onSubmit={handleSubmitForm} className='auth-form'>
            <h1 className='title'>Iniciar sesión</h1>
            <div className='input-container'>
                <Input
                    label="Ingresa tu email:"
                    name="email"
                    type="email"
                    placeholder="joedoe@email.com"
                    value={form_state.email}
                    onChange={handleChangeInput}
                />
                {
                    errores.email.map((error, index) => <p key={index} style={{ color: 'red' }}>{error}</p>)
                }
            </div>
            <div className='input-container'>
                <Input
                    label="Ingresa tu contraseña:"
                    name="password"
                    type="password"
                    value={form_state.password}
                    onChange={handleChangeInput}
                />
                {
                    errores.password.map((error, index) => <p style={{ color: 'red' }} key={index}>{error}</p>)
                }
            </div>
            <Button
                label="Iniciar sesión"
                variant="main-auth"
                onClick={handleSubmitForm}
                disabled={errores.email.length || errores.password.length || !form_state.email || !form_state.password}
            />
            <span>Aun no tienes cuenta? <Link to={'/register'}>Registrate</Link></span>
            <Link to={'/forgot-password'}>Olvide mi contraseña</Link>
        </form>
    )
}

export default LoginForm */

import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import ENVIROMENT from '../../utils/constants/enviroment'
import { AuthContext } from '../../Context/AuthContext'
import Form from '../Form/Form'

const LoginForm = () => {
    const {login, isAuthenticatedState} = useContext(AuthContext)
    console.log('Authenticated:', isAuthenticatedState)
    const navigate = useNavigate()
    const {form_state, handleChangeInput} = useForm({email:'', password: ''})
    const url = new URLSearchParams(window.location.search)
    if(url.get('verified')){
        alert('Cuenta verificada')
    }
    const handleSubmitForm = async (event) =>{
       
        try{
            event.preventDefault()
            const response = await fetch(ENVIROMENT.API_URL + '/api/auth/login', {
                method: "POST",
                headers:{
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(form_state)
            })
            const data = await response.json()

            login(data.data.access_token)
            navigate('/home')
        }
        catch(error){
            console.error("Error al loguear", error)
        }
        
    }
    const errores = {
        email: [
        ],
        password: [
        ]
    }

    form_state.email && form_state.email.length > 30 && errores.email.push("El límite de caracteres es 30")
    form_state.email && form_state.email.length < 5 && errores.email.push("El mínimo de caracteres es 5")
    form_state.password && form_state.password.length > 30 && errores.password.push("El máximo de caracteres es 30")
    form_state.password && form_state.password.length < 5 && errores.password.push("El mínimo de caracteres es 5")

    const fields = [
        {
            label: "Ingresa tu email:",
            name: "email",
            type: "email",
            placeholder: "joedoe@email.com",
            value: form_state.email,
            onChange: handleChangeInput,
            errors: errores.email
        },
        {
            label: "Ingresa tu contraseña:",
            name: "password",
            type: "password",
            value: form_state.password,
            onChange: handleChangeInput,
            errors: errores.password
        }
    ]

    const links = [
        { text: "Aun no tienes cuenta?", to: "/register", label: "Regístrate" },
        { to: "/forgot-password", label: "Olvidé mi contraseña" }
    ]

    return (
        <Form
            title="Iniciar sesión"
            fields={fields}
            onSubmit={handleSubmitForm}
            buttonLabel="Iniciar sesión"
            links={links}
        />
    )
}

export default LoginForm
