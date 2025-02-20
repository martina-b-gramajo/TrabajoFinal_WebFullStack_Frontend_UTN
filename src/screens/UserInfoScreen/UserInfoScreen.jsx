import React from 'react'
import useForm from '../hooks/useForm'
import { getAuthenticatedHeaders } from '../fetching/customHeaders'
import ENVIROMENT from '../utils/constants/enviroment'

const UserInfoScreen = () => {
    const { form_state, handleChangeInput } = useForm({ username: "", img_profile: "" })
    
    const handleSubmitForm = async (event) => {
        event.preventDefault()
        fetch(ENVIROMENT.API_URL + '/api/profile', {
            method: "PUT",
            headers: getAuthenticatedHeaders(),
            body: JSON.stringify(form_state)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="username">Ingresa el nuevo username</label>
                <input id='username' type='text' name='username' value={form_state.username}
                    onChange={handleChangeInput} />
                <label htmlFor="password">Ingresa la nueva contraseña</label>
                <input id='password' type='text' name='password' value={form_state.password}
                    onChange={handleChangeInput} />
                <button>Actualizar</button>
            </form>
        </div>
    )
}

export default UserInfoScreen