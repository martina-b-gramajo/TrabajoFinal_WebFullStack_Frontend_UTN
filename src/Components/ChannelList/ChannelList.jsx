import React, { useState } from 'react'
import Button from '../Button/Button'
import { useParams } from 'react-router-dom'
import ChannelItem from '../ChannelItem/ChannelItem'
import './ChannelList.css'
import CreateChannelForm from '../CreateChannelForm/CreateChannelForm'
import Modal from '../Modal/Modal'

const ChannelList = ({ title, channels, id_workspace }) => {
    const { id_channel } = useParams()

    console.log(id_channel)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleChannelCreated = () => {
        handleCloseModal()
    }

    return (
        <div className='channels-list'>
            <h1>{title}</h1>
            {channels.map(channel => (
                <ChannelItem
                    key={channel._id}
                    name={channel.name}
                    id_channel={channel._id}
                    id_workspace={id_workspace}
                    isActive={channel._id === id_channel}
                />
            ))}
            <hr />
            <Button label='CREAR CANAL' variant='create' onClick={handleOpenModal} />

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <CreateChannelForm
                    id_workspace={id_workspace}
                    onClose={handleCloseModal}
                    onChannelCreated={handleChannelCreated}
                />
            </Modal>
        </div>
    )
}

export default ChannelList