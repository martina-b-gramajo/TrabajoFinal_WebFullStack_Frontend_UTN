import React from 'react'
import ENVIROMENT from './utils/constants/enviroment'
import { Route, Routes } from 'react-router-dom'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import ErrorScreen from './screens/ErrorScreen/ErrorScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen/ForgotPasswordScreen'
import ResetPasswordScreen from './screens/ResetPasswordScreen/ResetPasswordScreen'
import './app.css'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import CreateWorkspaceScreen from './screens/CreateWorkspaceScreen/CreateWorkspaceScreen'
import WorkspaceScreen from './screens/WorkspaceScreen/WorkspaceScreen'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/error' element={<ErrorScreen />} />
        <Route path='/forgot-password' element={<ForgotPasswordScreen />} />
        <Route path='/reset-password' element={<ResetPasswordScreen />} />
        <Route element={<ProtectedRoute />} >
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/workspace/new' element={<CreateWorkspaceScreen />} />
          <Route path='/workspace/:workspace_id' element={<WorkspaceScreen />} />
          <Route path='/workspace/:workspace_id/:channel_id' element={<WorkspaceScreen />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App