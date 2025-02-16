import React from 'react'
import ENVIROMENT from '../../utils/constants/enviroment'
import { getAuthenticatedHeaders } from '../../fetching/customHeaders'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
import WorkspaceList from '../../Components/WorkspaceList/WorkspaceList'
import './HomeScreen.css'
import Navbar from '../../Components/Navbar/Navbar'
import Button from '../../Components/Button/Button'

const HomeScreen = () => {
    const {
        data: workspace_response,
        error: workspace_response_error,
        loading: workspace_loading
    } = useFetch(ENVIROMENT.API_URL + '/api/workspace', {
        method: "GET",
        headers: getAuthenticatedHeaders()
    })

    const hasWorkspaces = workspace_response?.data?.workspaces.length > 0;

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
                        ) : hasWorkspaces ? (
                            <WorkspaceList workspaces={workspace_response.data.workspaces} />
                        ) : (
                            <span>¡Aún no tienes ningún espacio de trabajo!</span>
                        )}
                    </div>
                </div>
                <Link to='/workspace/new'>
                    <Button label='CREAR ENTORNO' variant='create' />
                </Link>
            </main>
        </>
    )
}

export default HomeScreen