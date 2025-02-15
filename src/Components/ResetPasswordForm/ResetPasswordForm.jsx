import React from 'react'
import AuthForm from '../Form/Form'

const ResetPasswordForm = ({ form_state, handleChangeInput, handleSubmitResetPassword }) => {
    const fields = [
        {
            label: "Nueva contraseña:",
            name: "password",
            type: "password",
            placeholder: "********",
            value: form_state.password,
            onChange: handleChangeInput,
            errors: [] // Puedes agregar validaciones si es necesario
        }
    ]

    return (
        <AuthForm
            title="Elige una nueva contraseña"
            fields={fields}
            onSubmit={handleSubmitResetPassword}
            buttonLabel="Enviar"
        />
    )
}

export default ResetPasswordForm