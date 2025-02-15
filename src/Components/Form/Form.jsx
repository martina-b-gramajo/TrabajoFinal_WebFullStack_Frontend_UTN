/*import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Input from '../Input/Input'
import useForm from '../../hooks/useForm'
import ENVIROMENT from '../../utils/constants/enviroment'
import { AuthContext } from '../../Context/AuthContext'
import './AuthForm.css'

const AuthForm = ({ type }) => {
    const isLogin = type === 'login'

    if (type === isLogin) {
        const { login, isAuthenticatedState } = useContext(AuthContext)
        const navigate = useNavigate()
        const url = new URLSearchParams(window.location.search)
        if (url.get('verified')) {
            alert('Cuenta verificada')
        }
    }

    const initialState = isLogin
        ? { email: '', password: '' }
        : { username: '', email: '', password: '' };

    const { form_state, handleChangeInput } = useForm(initialState);

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        try {
            const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
            const res = await fetch(ENVIROMENT.API_URL + endpoint, {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(form_state)
            });
            const data = await res.json();
            if(isLogin){
                login(data.data.access_token)
                navigate('/home')
            }
            //console.log(data);
        } catch (error) {
            console.error(`Error al ${isLogin ? 'iniciar sesión' : 'registrar usuario'}`, error);
        }
    };

    const errores = { username: [], email: [], password: [] };

    /*if (form_state.email) {
        if (form_state.email.length > 30) errores.email.push("El límite de caracteres es 30")
        if (form_state.email.length < 5) errores.email.push("El mínimo de caracteres es 5")
    }

    if (form_state.password) {
        if (form_state.password.length > 30) errores.password.push("El máximo de caracteres es 30")
        if (form_state.password.length < 5) errores.password.push("El mínimo de caracteres es 5")
    }*/

/*form_state.email && form_state.email.length > 30 && errores.email.push("El limite de caracteres es 30")
form_state.email && form_state.email.length < 5 && errores.email.push("El minimo de caracteres es 5")

if (!isLogin) {
    /*if (form_state.username.length > 30) errores.username.push("El límite de caracteres es 30")
    if (form_state.username.length < 5) errores.username.push("El mínimo de caracteres es 5")*/
/*form_state.username && form_state.username.length > 30 && errores.username.push("El límite de caracteres es 30")
form_state.username && form_state.username.length < 5 && errores.username.push("El mínimo de caracteres es 5")
}

return (
<form onSubmit={handleSubmitForm} className='auth-form'>
    <h1 className='title'>{isLogin ? 'Iniciar sesión' : 'Registro'}</h1>

    {!isLogin && (
        <div className='input-container'>
            <Input
                label="Nombre de usuario:"
                name="username"
                type="text"
                value={form_state.username}
                onChange={handleChangeInput}
            />
            {errores.username.map((error, index) => <p key={index}>{error}</p>)}
        </div>
    )}

    <div className='input-container'>
        <Input
            label="Correo electrónico:"
            name="email"
            type="email"
            placeholder="joedoe@email.com"
            value={form_state.email}
            onChange={handleChangeInput}
        />
        {errores.email.map((error, index) => <p key={index}>{error}</p>)}
    </div>

    <div className='input-container'>
        <Input
            label="Contraseña:"
            name="password"
            type="password"
            value={form_state.password}
            onChange={handleChangeInput}
        />
        {errores.password.map((error, index) => <p key={index}>{error}</p>)}
    </div>

    <Button
        label={isLogin ? 'Iniciar sesión' : 'Crear usuario'}
        variant="main-auth"
        disabled={errores.email.length || errores.password.length || !form_state.email || !form_state.password || (!isLogin && errores.username.length || !form_state.username)}
    />

    {isLogin ? (
        <>
            <span>Aún no tienes cuenta? <Link to="/register">Regístrate</Link></span>
            <Link to="/forgot-password">Olvidé mi contraseña</Link>
        </>
    ) : (
        <span>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></span>
    )}
</form>
);
};

export default AuthForm; */

import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Form.css'
import { Link } from 'react-router-dom'

const Form = ({ title, fields, onSubmit, buttonLabel, links }) => {
    return (
        <form onSubmit={onSubmit} className='auth-form'>
            <h1 className='title'>{title}</h1>
            {fields.map((field, index) => (
                <div className='input-container' key={index}>
                    <Input
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={field.onChange}
                    />
                    {field.errors.map((error, i) => (
                        <p key={i} style={{ color: 'red' }}>{error}</p>
                    ))}
                </div>
            ))}
            <Button
                label={buttonLabel}
                variant="main-auth"
                disabled={fields.some(field => field.errors.length > 0 || !field.value)}
            />
            {links && (
                <div className="auth-links">
                    {links.map((link, i) => (
                        <span key={i}>
                            {link.text} <Link to={link.to}>{link.label}</Link>
                        </span>
                    ))}
                </div>
            )}
        </form>
    )
}

export default Form