/*import React from 'react'
import useForm from '../../hooks/useForm'
import ENVIROMENT from '../../utils/constants/enviroment'
import Button from '../Button/Button'
import Input from '../Input/Input'
import '../LoginForm/LoginForm.css'

const RegisterForm = () => {
    const { form_state, handleChangeInput } = useForm({ username: "", email: "", password: "" })
    const handleSubmitForm = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch(ENVIROMENT.API_URL + "/api/auth/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form_state)
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.error("Error al crear usuario", error)
        }
    }

    const errores = {
        username: [
        ],
        email: [
        ],
        password: []
    }

    form_state.email && form_state.email.length > 30 && errores.email.push("El límite de caracteres es 30")
    form_state.email && form_state.email.length < 5 && errores.email.push("El mínimo de caracteres es 5")

    form_state.password && form_state.password.length > 30 && errores.password.push("El máximo de caracteres es 30")
    form_state.password && form_state.password.length < 5 && errores.password.push("El mínimo de caracteres es 5")

    form_state.username && form_state.username.length > 30 && errores.username.push("El límite de caracteres es 30")
    form_state.username && form_state.username.length < 5 && errores.username.push("El mínimo de caracteres es 5")

    return (
        <form onSubmit={handleSubmitForm} className='auth-form'>
            <h1 className='title'>Registro</h1>
            <div className='input-container'>
                <Input
                    label="Nombre de usuario:"
                    name="username"
                    type="text"
                    value={form_state.username}
                    onChange={handleChangeInput}
                />
                {errores.username.map((error, index) => <p key={index} style={{ color: 'red' }}>{error}</p>)}
            </div>
            <div className='input-container'>
                <Input
                    label="Correo electrónico:"
                    name="email"
                    type="email"
                    placeholder="joedoe@email.com"
                    value={form_state.email}
                    onChange={handleChangeInput}
                />
                {errores.email.map((error, index) => <p key={index} style={{ color: 'red' }}>{error}</p>)}
            </div>
            <div className='input-container'>
                <Input
                    label="Contraseña:"
                    name="password"
                    type="password"
                    value={form_state.password}
                    onChange={handleChangeInput}
                />
                {errores.password.map((error, index) => <p key={index} style={{ color: 'red' }}>{error}</p>)}
            </div>
            <Button
                label="Crear usuario"
                variant="main-auth"
                disabled={errores.username.length || errores.email.length || errores.password.length || !form_state.username || !form_state.email || !form_state.password}
            />
        </form>
    )
}

export default RegisterForm */

import React from 'react'
import useForm from '../../hooks/useForm'
import ENVIROMENT from '../../utils/constants/enviroment'
import Form from '../Form/Form'

const RegisterForm = () => {
    const { form_state, handleChangeInput } = useForm({ username: "", email: "", password: "" })

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(ENVIROMENT.API_URL + "/api/auth/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form_state)
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error("Error al crear usuario", error)
        }
    }

    const errores = {
        username: [],
        email: [],
        password: []
    }

    form_state.email && form_state.email.length > 30 && errores.email.push("El límite de caracteres es 30")
    form_state.email && form_state.email.length < 5 && errores.email.push("El mínimo de caracteres es 5")

    form_state.password && form_state.password.length > 30 && errores.password.push("El máximo de caracteres es 30")
    form_state.password && form_state.password.length < 5 && errores.password.push("El mínimo de caracteres es 5")

    form_state.username && form_state.username.length > 30 && errores.username.push("El límite de caracteres es 30")
    form_state.username && form_state.username.length < 5 && errores.username.push("El mínimo de caracteres es 5")

    const fields = [
        {
            label: "Nombre de usuario:",
            name: "username",
            type: "text",
            value: form_state.username,
            onChange: handleChangeInput,
            errors: errores.username
        },
        {
            label: "Correo electrónico:",
            name: "email",
            type: "email",
            placeholder: "joedoe@email.com",
            value: form_state.email,
            onChange: handleChangeInput,
            errors: errores.email
        },
        {
            label: "Contraseña:",
            name: "password",
            type: "password",
            value: form_state.password,
            onChange: handleChangeInput,
            errors: errores.password
        }
    ]

    return (
        <Form
            title="Registro"
            fields={fields}
            onSubmit={handleSubmitForm}
            buttonLabel="Crear usuario"
            links={[
                { text: "¿Ya tienes una cuenta?", to: "/login", label: "Inicia sesión" }
            ]}
        />
    )
}

export default RegisterForm
