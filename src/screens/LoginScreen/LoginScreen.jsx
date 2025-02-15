/*import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import LoginForm from '../../Components/LoginForm/LoginForm.jsx'
import './AuthScreen.css'
import AuthForm from '../../Components/AuthForm/AuthForm.jsx'

const LoginScreen = () => {
    /*return (
        <>
            <Navbar />
            <main className='auth-screen'>
                <LoginForm />
            </main>
        </>
    )*/
/*return (
    <>
        <Navbar />
        <main className='auth-screen'>
            <AuthForm type="login" />
        </main>
    </>
);
}

export default LoginScreen */

import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import LoginForm from '../../Components/LoginForm/LoginForm'
import './LoginScreen.css'

const LoginScreen = () => {
    return (
        <>
            <Navbar />
            <main className='auth-screen'>
                <LoginForm />
            </main>
        </>
    )
}

export default LoginScreen




