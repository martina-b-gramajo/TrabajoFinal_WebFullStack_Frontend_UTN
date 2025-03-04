import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import ENVIROMENT from '../../utils/constants/enviroment'
import { getAuthenticatedHeaders } from '../../fetching/customHeaders'
import Button from '../../Components/Button/Button'
import ChannelList from '../../Components/ChannelList/ChannelList'
import ChatList from '../../Components/ChatList/ChatList'
import './WorkspaceScreen.css'

const WorkspaceScreen = () => {
    const { workspace_id, channel_id } = useParams()
    const [isOpen, setIsOpen] = useState(false)

    const {
        data: channels_data,
        error: channels_error,
        loading: channels_loading,
    } = useFetch(ENVIROMENT.API_URL + `/api/channel/${workspace_id}`, {
        method: "GET",
        headers: getAuthenticatedHeaders(),
    })

    const { data: workspace_response, loading: workspace_loading } = useFetch(
        ENVIROMENT.API_URL + '/api/workspace',
        {
            method: "GET",
            headers: getAuthenticatedHeaders()
        },
    )

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    if (channels_loading) return <h2>Cargando...</h2>;
    if (channels_error) return <h2>Error: {channels_error.message}</h2>;

    return (
        <div className='workspace-container'>
            <div className='upper-container'>
                <h1>{workspace_response.data.workspaces.find(workspace => workspace._id == workspace_id)?.name || 'Workspace'}</h1>
                <Link to='/home'>
                    <Button label='SALIR' variant='exit' />
                </Link>
                <div className={`workspace-burger-menu ${isOpen && 'open'}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className='middle-container'>
                <ChannelList
                    channels={channels_data.data.channels}
                    title={'Canales'}
                    id_workspace={workspace_id}
                    isOpen={isOpen}
                />
                <div className={`chat-list-container ${isOpen ? 'hidden' : ''}`}>
                    <ChatList
                        channel_name={channels_data.data.name}
                        id_workspace={workspace_id}
                        id_channel={channel_id}
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkspaceScreen