import React from 'react'
import Form from '../Form/Form'

const LoginForm = ({ onSubmit, onChange, formState, errors, links }) => {
    const fields = [
        {
            label: "Ingresa tu email:",
            name: "email",
            type: "email",
            placeholder: "joedoe@email.com",
            value: formState.email,
            onChange: onChange,
            errors: errors.email
        },
        {
            label: "Ingresa tu contraseña:",
            name: "password",
            type: "password",
            value: formState.password,
            onChange: onChange,
            errors: errors.password
        }
    ]

    const buttons = [
        {
            label: "Iniciar sesión",
            variant: "main-auth",
            onClick: onSubmit
        }
    ]

    return (
        <Form
            title="Iniciar sesión"
            fields={fields}
            onSubmit={onSubmit}
            buttons={buttons}
            links={links}
        />
    )
}

export default LoginForm
