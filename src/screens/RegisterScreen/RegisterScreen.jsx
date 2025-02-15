/* import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'
import './AuthScreen.css'
import AuthForm from '../../Components/AuthForm/AuthForm'

const RegisterScreen = () => {
    return (
        /*<>
            <Navbar />
            <main className='auth-screen'>
                <RegisterForm />
            </main>
        </>*/
/* <>
     <Navbar />
     <main className='auth-screen'>
         <AuthForm type="register" />
     </main>
 </>
)
}

export default RegisterScreen */

import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'
import './RegisterScreen.css'

const RegisterScreen = () => {
    return (
        <>
            <Navbar />
            <main className='auth-screen'>
                <RegisterForm />
            </main>
        </>
    );
};

export default RegisterScreen;
