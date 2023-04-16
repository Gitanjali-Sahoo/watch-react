import { useState } from 'react'
import styled from 'styled-components'

function LoginPopup({ onClose }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(`Username: ${username}, Password: ${password}`)
        onClose()
    }

    return (
        <Wrap>
            <div className="login-popup-overlay">
                <div className="login-popup">
                    <div className="login-popup-content">
                        <span
                            className="close"
                            onClick={onClose}
                            style={{ color: 'rgb(25, 156, 135)' }}
                        >
                            &times;
                        </span>

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />

                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </Wrap>
    )
}
export default LoginPopup
const Wrap = styled.div`
    .login-popup-overlay {
        margin-top: 10px;
        border-radius: 5px;
        /* background-color: #f2f2f2; */
        padding: 10px;
        background-color: white;
    }
    input,
    select {
        width: 100%;
        padding: 5px 10px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        background-color: rgb(211, 229, 236);
    }
    button[type='submit'] {
        width: 100%;
        background-color: rgb(25, 156, 135);
        color: white;
        padding: 8px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
    }
    button[type='submit']:hover {
        box-shadow: 0px 0px 20px rgb(25, 156, 135);
        background-color: rgb(25, 156, 135);
        transition: box-shadow 0.5s ease-in-out;
        outline: none;
    }
    .login-popup-content {
        position: relative;
    }
    .close {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
    }
    & label {
        color: #06392f;
    }
`
