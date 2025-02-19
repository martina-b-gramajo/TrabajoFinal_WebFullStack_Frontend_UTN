import React, { useState } from 'react'
import Form from '../Form/Form'
import ENVIROMENT from '../../utils/constants/enviroment'
import { getAuthenticatedHeaders } from '../../fetching/customHeaders'
import { validateChannel } from '../../utils/validations/validations'
import useForm from '../../hooks/useForm'

const CreateChannelForm = ({ onClose, onSuccess, id_workspace }) => {
    const { form_state, handleChangeInput } = useForm({ name: '' })
    const [errors, setErrors] = useState({ name: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const validationError = validateChannel(form_state.name)
        if (validationError) {
            setErrors({ name: validationError })
            return
        }

        try {
            const response = await fetch(`${ENVIROMENT.API_URL}/api/channel/${id_workspace}`, {
                method: "POST",
                headers: getAuthenticatedHeaders(),
                body: JSON.stringify({ name: form_state.name })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Error al crear el canal')
            }

            onSuccess()
            onClose()
        } catch (error) {
            setErrors({ name: error.message })
        }
    }

    const fields = [{
        label: 'Nombre del canal #',
        name: 'name',
        type: 'text',
        placeholder: 'Nombre del canal',
        value: form_state.name,
        onChange: (e) => {
            handleChangeInput(e)
            if (errors.name) setErrors({ name: '' })
        },
        errors: errors.name ? [errors.name] : []
    }]

    const buttons = [{
        label: 'Crear canal',
        variant: 'submit',
        type: 'submit'
    }, {
        label: 'Cancelar',
        variant: 'danger',
        type: 'button',
        onClick: onClose
    }]

    return (
        <Form
            title='Crear nuevo canal'
            fields={fields}
            onSubmit={handleSubmit}
            buttons={buttons}
            variant='modal'
        />
    )
}

export default CreateChannelForm
