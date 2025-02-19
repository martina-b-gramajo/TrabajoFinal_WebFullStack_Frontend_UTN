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

    const currentChannel = channels_data?.data?.channels?.find(channel => channel._id === channel_id);
    const channelName = currentChannel ? currentChannel.name : '';

    if (channels_loading) return <h2>Cargando...</h2>;
    if (channels_error) return <h2>Error: {channels_error.message}</h2>;

    return (
        <div className='workspace-container'>
            <div className='upper-container'>
                <h1>{workspace_response.data.workspaces.find(workspace => workspace._id == workspace_id)?.name || 'Workspace'}</h1>
                <Link to='/home'>
                    <Button label='SALIR' variant='exit' />
                </Link>
            </div>
            <div className='middle-container'>
                <ChannelList
                    channels={channels_data.data.channels}
                    title={'Canales'}
                    id_workspace={workspace_id}
                />
                <ChatList
                    channel_name={channelName}
                    id_workspace={workspace_id}
                    id_channel={channel_id}
                />
            </div>
        </div>
    )
}

export default WorkspaceScreen