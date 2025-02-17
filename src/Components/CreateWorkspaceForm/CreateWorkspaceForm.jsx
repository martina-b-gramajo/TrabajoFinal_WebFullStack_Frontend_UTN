import React, { useState } from 'react'
import Form from '../Form/Form'
import ENVIROMENT from '../../utils/constants/enviroment'
import { getAuthenticatedHeaders } from '../../fetching/customHeaders'
import { validateWorkspace } from '../../utils/validations/validations'
import useForm from '../../hooks/useForm'

const CreateWorkspaceForm = ({ onClose, onSuccess }) => {
    const { form_state, handleChangeInput } = useForm({ name: '' })
    const [errors, setErrors] = useState({ name: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const validationError = validateWorkspace(form_state.name)

        if (validationError) {
            setErrors({ name: validationError })
            return
        }

        try {
            const response = await fetch(ENVIROMENT.API_URL + '/api/workspace', {
                method: "POST",
                headers: getAuthenticatedHeaders(),
                body: JSON.stringify({ name: form_state.name })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Error al crear el workspace')
            }

            onSuccess()
            onClose()
        } catch (error) {
            setErrors({ name: error.message })
        }
    }

    const fields = [{
        label: 'Nombre del entorno de trabajo',
        name: 'name',
        type: 'text',
        placeholder: 'Nombre del workspace',
        value: form_state.name,
        onChange: (e) => {
            handleChangeInput(e)
            // Clear error cuando el usuario escribe
            if (errors.name) setErrors({ name: '' })
        },
        errors: errors.name ? [errors.name] : []
    }]

    const buttons = [{
        label: 'Crear entorno',
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
            title="Crear nuevo espacio de trabajo"
            fields={fields}
            onSubmit={handleSubmit}
            buttons={buttons}
            variant="modal"
        />
    )
}

export default CreateWorkspaceForm