import { useState } from 'react'
import './styles.css'

export default function UserDetails({updateUsername,updateEmail,logout,deleteUser,user}){
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)

    function hanldeUsernameEdit(e){
        e.preventDefault()
        if (username !== ''){
            updateUsername(user.id,username)
        }
        else{alert("username is empty")}
    }

    function hanldeEmailEdit(e){
        e.preventDefault()
        if (email !== ''){
            updateEmail(user.id,email)
        }
        else{alert("email is empty")}
    }
    
    return(
        <>   
            <h2>Account Details</h2>
            <form onSubmit={hanldeUsernameEdit}>
                <input type='text' value={username} className='input-field'
                onChange={e => setUsername(e.target.value)}/>
                <button>Update</button>
            </form>
            <form onSubmit={hanldeEmailEdit}>
                <input type='text' value={email} className='input-field'
                onChange={e => setEmail(e.target.value)}/>
                <button>Update</button>
            </form>
            <button onClick={logout}>Logout</button>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
        </>
    )
}