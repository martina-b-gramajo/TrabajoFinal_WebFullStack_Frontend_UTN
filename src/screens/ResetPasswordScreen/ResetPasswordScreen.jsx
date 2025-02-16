import React from 'react'
import useForm from '../../hooks/useForm'
import ENVIROMENT from '../../utils/constants/enviroment'
import ResetPasswordForm from '../../Components/ResetPasswordForm/ResetPasswordForm'
import { getAuthenticatedHeaders } from '../../fetching/customHeaders'

const ResetPasswordScreen = () => {
    const url = new URLSearchParams(window.location.search)
    const reset_token = url.get('reset_token')
    const { form_state, handleChangeInput } = useForm({ password: '' })

    const handleSubmitResetPassword = async (e) => {
        try {
            e.preventDefault()
            const response = await fetch(`${ENVIROMENT.API_URL}/api/auth/reset-password?reset_token=${reset_token}`, {
                method: 'POST',
                headers: getAuthenticatedHeaders(),
                body: JSON.stringify(form_state)
            })
            const data = await response.json()
            console.log(data)
            if (data.ok) {
                alert('Contraseña restablecida con éxito')
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
        <div className="reset-password-screen">
            <ResetPasswordForm
                onSubmit={handleSubmitResetPassword}
                onChange={handleChangeInput}
                formState={form_state}
                errors={{}} 
                links={links}
            />
        </div>
    )
}

export default ResetPasswordScreen