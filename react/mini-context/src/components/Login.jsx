import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () =>
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div className='container'>

            <div className='col-6'>

                <h2>login</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">username</label>
                    <input
                        type="text" className="form-control" id="username" placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div><div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="text" className="form-control" id="password" placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={handleSubmit}
                >submit</button>

            </div>
        </div>
    )
}

export default Login