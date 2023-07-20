import { useState } from 'react'
import './styles.css'

export default function RegisterForm({register}){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function hanldeRegister(e){
        e.preventDefault()
        if (username !== '' && email !== '' && password !== ''){
            if (confirmPassword === password){
                register(username,email,password)
            }
            else{alert("passwords do not match")}
        }
        else{alert("username, email, or password is empty")}
    }

    return(
        <form onSubmit={hanldeRegister}>
            <h2>Register new Account</h2>
            <div className='form-row'>
                <label>Username:</label>
                <input type='text' value={username} className='input-field'
                onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className='form-row'>
                <label>Email:</label>
                <input type='text' value={email} className='input-field'
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='form-row'>
                <label>Password:</label>
                <input type='password' value={password} className='input-field'
                onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className='form-row'>
                <label>Confirm Password:</label>
                <input type='password' value={confirmPassword} className='input-field'
                onChange={e => setConfirmPassword(e.target.value)}/>
            </div>
            <button className='red-btn'>Register</button>
        </form>
    )
}