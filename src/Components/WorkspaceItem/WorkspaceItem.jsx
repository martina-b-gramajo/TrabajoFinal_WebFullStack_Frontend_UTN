import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './WorkspaceItem.css'

const WorkspaceItem = ({ name, id_workspace, id_channel }) => {
    return (
        <div key={id_workspace} className='workspace-item'>
            <div className='workspace-name'>
                <h3>{name}</h3>
            </div>
            <Link to={'/workspace/' + id_workspace + '/' + (id_channel ? id_channel : 1)}>
                <Button label='ENTRAR' variant='enter' />
            </Link>
        </div>
    )
}

export default WorkspaceItem