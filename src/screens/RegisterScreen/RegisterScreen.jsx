import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import ENVIROMENT from '../../utils/constants/enviroment'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'
import Navbar from '../../Components/Navbar/Navbar'
import './RegisterScreen.css'
import { getAuthenticatedHeaders } from '../../fetching/customHeaders'

const RegisterScreen = () => {
    //const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const { form_state, handleChangeInput } = useForm({ username: "", email: "", password: "" })

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch(ENVIROMENT.API_URL + "/api/auth/register", {
                method: "POST",
                headers: getAuthenticatedHeaders(),
                body: JSON.stringify(form_state)
            })
            const data = await res.json()
            console.log(data)
            if (data.ok) {
                navigate('/login')
            }
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

    const links = [
        { text: "¿Ya tienes una cuenta?", to: "/login", label: "Inicia sesión" }
    ]

    return (
        <>
            <Navbar />
            <main className='auth-screen'>
                <RegisterForm
                    onSubmit={handleSubmitForm}
                    onChange={handleChangeInput}
                    formState={form_state}
                    errors={errores}
                    links={links}
                />
            </main>
        </>
    )
}

export default RegisterScreen
