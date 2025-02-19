import React from 'react'
import WorkspaceItem from '../WorkspaceItem/WorkspaceItem'
import './WorkspaceList.css'

const WorkspaceList = ({ workspaces }) => {
    if (!workspaces || workspaces.length === 0) {
        return <p>No hay espacios de trabajo disponibles.</p>
    }

    return (
        <div className='workspace-list'>
            {workspaces.map((workspace) => {
                const firstChannelId = workspace.channels?.[0]?._id || null

                return (
                    <WorkspaceItem
                        key={workspace._id}
                        name={workspace.name}
                        id_workspace={workspace._id}
                        id_channel={firstChannelId}
                    />
                )
            })}
        </div>
    )
}

export default WorkspaceList