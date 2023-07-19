import './styles.css';

export function Header([user,showLogin,showUser]){
    return (
    <div className='header'>
        <div className="header-left">
            <h1 className='Title'>Character App</h1>
        </div>

        <div className="header-right">
            {user
                ? <h2 onClick={showUser}>Logged in as {user.username}</h2>
                : <h2 onClick={showLogin}>Login or Register</h2>
            }
        </div>
    </div>
    )
}
