import React from 'react'
import Form from '../Form/Form'

const ForgotPasswordForm = ({ onSubmit, onChange, formState, errors, links }) => {
    const fields = [
        {
            label: "Ingresa el mail con el que te registraste:",
            name: "email",
            type: "email",
            placeholder: "joedoe@email.com",
            value: formState.email,
            onChange: onChange,
            errors: errors.email || []
        }
    ]

    const buttons = [
        {
            label: "Enviar correo",
            variant: "main-auth",
            onClick: onSubmit
        }
    ]

    return (
        <Form
            title="Restablecer contraseña"
            fields={fields}
            onSubmit={onSubmit}
            buttons={buttons}
            links={links}
            variant='auth'
        />
    )
}

export default ForgotPasswordForm