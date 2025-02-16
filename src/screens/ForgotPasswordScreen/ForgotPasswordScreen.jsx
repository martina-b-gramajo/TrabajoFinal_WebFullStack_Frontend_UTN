import React from 'react'
import useForm from '../../hooks/useForm'
import ENVIROMENT from '../../utils/constants/enviroment'
import ForgotPasswordForm from '../../Components/ForgotPasswordForm/ForgotPasswordForm'
import { getAuthenticatedHeaders } from '../../fetching/customHeaders'

const ForgotPasswordScreen = () => {
    const { form_state, handleChangeInput } = useForm({ email: '' })

    const handleSubmitForgotPassword = async (e) => {
        try {
            e.preventDefault()
            const response = await fetch(ENVIROMENT.API_URL + '/api/auth/forgot-password', {
                method: "POST",
                headers: getAuthenticatedHeaders(),
                body: JSON.stringify(form_state)
            })
            const data = await response.json()
            if (data.ok) {
                alert('Se envió el mail para reestablecer contraseña')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const links = [
        { text: "¿Ya tienes una cuenta?", to: "/login", label: "Inicia sesión" },
        { text: "¿No tienes una cuenta?", to: "/register", label: "Regístrate" }
    ]

    return (
        <div className="forgot-password-screen">
            <ForgotPasswordForm
                onSubmit={handleSubmitForgotPassword}
                onChange={handleChangeInput}
                formState={form_state}
                errors={{}} // Puedes manejar errores aquí si es necesario
                links={links}
            />
        </div>
    )
}

export default ForgotPasswordScreen