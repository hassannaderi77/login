import './Login.css';
import MyNavbar from '../../components/navbar/Navbar'
import { useState } from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const navigate = useNavigate();

    const submitHandler = () => {
        if (username == 'admin' & password == '12345') {
            document.cookie = "username=admin; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/"
            navigate('/panel')
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'نام کاربری یا رمز اشتباه است!',
                icon: 'error',
                confirmButtonText: 'بستن'
              })
        }
    }

    return(
        <>
            <MyNavbar />
            <div className='login-page'>
                <div className='form'>
                    <form className='login-form'>
                        <input onChange={ (e)=> setUsername(e.target.value)} type="text" placeholder="username"/>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
                        <button type='button' onClick={submitHandler}>login</button>
                    </form>
                    <p>userName : admin, password : 12345</p>
                </div>
            </div>
        </>
    )
}

export default Login;