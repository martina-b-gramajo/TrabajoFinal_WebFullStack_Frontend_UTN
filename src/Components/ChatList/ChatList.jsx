import React, { useState, useEffect } from 'react'
import './ChatList.css'
import ChatItem from '../ChatItem/ChatItem'
import { useFetch } from '../../hooks/useFetch'
import ENVIROMENT from '../../utils/constants/enviroment'
import { getAuthenticatedHeaders } from '../../fetching/customHeaders'
import Form from '../Form/Form'

const ChatList = ({ channel_name, id_workspace, id_channel }) => {
    const [input, setInput] = useState('')
    const {
        data: channel_data,
        loading: channel_loading,
        error: channel_error,
    } = useFetch(ENVIROMENT.API_URL + `/api/channel/${id_workspace}/${id_channel}`, {
        method: 'GET',
        headers: getAuthenticatedHeaders(),
    },
        [id_channel]
    )

    useEffect(() => {
        setInput('')
    }, [id_channel])

    const handleSubmitMessage = async (e) => {
        e.preventDefault()
        if (input.trim()) {
            const response = await fetch(ENVIROMENT.API_URL + `/api/channel/${id_workspace}/${id_channel}/send-message`, {
                method: 'POST',
                headers: getAuthenticatedHeaders(),
                body: JSON.stringify({ content: input }),
            })
            const responseData = await response.json()
            setInput('')
        }
    }

    if (channel_loading) return <h2>Cargando mensajes...</h2>
    if (channel_error) return <h2>Error: {channel_error.message}</h2>

    const formFields = [
        {
            name: 'message',
            type: 'text',
            placeholder: 'Escriba algo...',
            value: input,
            onChange: (e) => setInput(e.target.value),
            errors: []
        }
    ]

    const formButtons = [
        {
            label: 'Enviar',
            variant: 'send',
            onClick: handleSubmitMessage,
            disabled: !input.trim(),
        }
    ]

    return (
        <div className='chat-list-container'>
            <div className='chat-list-header'>
                <h2>{channel_name} / Mensajes</h2>
                <hr />
            </div>
            <div className='chat-list-content'>
                {channel_data.data.messages.map(message => (
                    <ChatItem
                        key={message._id}
                        author={message.sender.username}
                        text={message.content}
                        hour={new Date(message.createdAt).toLocaleTimeString()}
                    />
                ))}
            </div>
            <div className='chat-list-footer'>
                <hr />
                <Form
                    fields={formFields}
                    onSubmit={handleSubmitMessage}
                    buttons={formButtons}
                    variant='compact'
                />
            </div>
        </div>
    )
}

export default ChatList