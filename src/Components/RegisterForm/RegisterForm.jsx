import React from 'react'
import Form from '../Form/Form'

const RegisterForm = ({ onSubmit, onChange, formState, errors, links }) => {
    const fields = [
        {
            label: "Nombre de usuario:",
            name: "username",
            type: "text",
            value: formState.username,
            onChange: onChange,
            errors: errors.username
        },
        {
            label: "Correo electrónico:",
            name: "email",
            type: "email",
            placeholder: "joedoe@email.com",
            value: formState.email,
            onChange: onChange,
            errors: errors.email
        },
        {
            label: "Contraseña:",
            name: "password",
            type: "password",
            value: formState.password,
            onChange: onChange,
            errors: errors.password
        }
    ]

    const buttons = [
        {
            label: "Crear usuario",
            variant: "main-auth",
            onClick: onSubmit
        },
    ]

    return (
        <Form
            title="Registrarse"
            fields={fields}
            onSubmit={onSubmit}
            buttons={buttons}
            links={links}
            variant='auth'
        />
    )
}

export default RegisterForm