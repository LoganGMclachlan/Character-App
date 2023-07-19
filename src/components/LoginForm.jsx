import { useState } from 'react'
import './styles.css'

export default function LoginForm({login}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function hanldeLogin(e){
        e.preventDefault()
        if (username !== '' && password !== ''){
            login(username,password)
        }
        else{alert("username or password is empty")}
    }

    return(
        <form onSubmit={hanldeLogin}>
            <h2>Login to Account</h2>
            <div>
                <label>Username:</label>
                <input type='text' value={username} className='input-field'
                onChange={e => setUsername(e.target.value)}/>
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value={password} className='input-field'
                onChange={e => setPassword(e.target.value)}/>
            </div>
            <button className='red-button'>Login</button>
        </form>
    )
}