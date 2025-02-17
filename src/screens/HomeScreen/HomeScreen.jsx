import React, { useState } from 'react'
import ENVIROMENT from '../../utils/constants/enviroment'
import { getAuthenticatedHeaders } from '../../fetching/customHeaders'
import { useFetch } from '../../hooks/useFetch'
import WorkspaceList from '../../Components/WorkspaceList/WorkspaceList'
import './HomeScreen.css'
import Navbar from '../../Components/Navbar/Navbar'
import Button from '../../Components/Button/Button'
import Modal from '../../Components/Modal/Modal'
import CreateWorkspaceModal from '../../Components/CreateWorkspaceForm/CreateWorkspaceForm'

const HomeScreen = () => {
    const [showModal, setShowModal] = useState(false)
    const [refreshCount, setRefreshCount] = useState(0)

    const { data: workspace_response, loading: workspace_loading } = useFetch(
        ENVIROMENT.API_URL + '/api/workspace',
        {
            method: "GET",
            headers: getAuthenticatedHeaders()
        },
        [refreshCount]
    )

    const handleWorkspaceCreated = () => {
        setRefreshCount(c => c + 1)
    }

    return (
        <>
            <Navbar />
            <main className='home-container'>
                <h1>Bienvenido</h1>
                <div>
                    <h2>Tus espacios de trabajo</h2>
                    <div>
                        {workspace_loading ? (
                            <h2>Cargando...</h2>
                        ) : workspace_response?.data?.workspaces?.length > 0 ? (
                            <WorkspaceList workspaces={workspace_response.data.workspaces} />
                        ) : (
                            <span>¡Aún no tienes ningún espacio de trabajo!</span>
                        )}
                    </div>
                </div>

                <Button
                    label='CREAR ENTORNO'
                    variant='create'
                    onClick={() => setShowModal(true)}
                />

                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <CreateWorkspaceModal
                        onClose={() => setShowModal(false)}
                        onSuccess={handleWorkspaceCreated}
                    />
                </Modal>
            </main>
        </>
    )
}

export default HomeScreen