import React from 'react'
import Form from '../Form/Form'

const ResetPasswordForm = ({ onSubmit, onChange, formState, errors, links }) => {
    const fields = [
        {
            label: "Nueva contraseña:",
            name: "password",
            type: "password",
            placeholder: "********",
            value: formState.password,
            onChange: onChange,
            errors: errors.password || []
        }
    ]

    const buttons = [
        {
            label: "Enviar",
            variant: "main-auth",
            onClick: onSubmit
        }
    ]

    return (
        <Form
            title="Elige una nueva contraseña"
            fields={fields}
            onSubmit={onSubmit}
            buttons={buttons}
            links={links}
        />
    )
}

export default ResetPasswordForm