import React, {useRef, useState} from 'react'
import sideLogo from './../loginSide.jpg'

import {signup, logout, userAuth, login} from "./../firebase"
const Login = () => {
    // export default function login() {
    const [loading, setLoading ] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()

    async function loginUser()
    {
        setLoading(true)
        try{
            await login(emailRef.current.value, passwordRef.current.value)
            console.log(emailRef.current.value, passwordRef.current.value)
            alert("Login Successfull")
        }
        catch
        {
            console.log(emailRef.current.value, passwordRef.current.value)
            alert("Login Unsuccessfull")
        }
        setLoading(false)
    }

    return (
        <div className='d-flex justify-content-between container' style={{ marginTop: '10%' }}>
            {/* <div className='container' style={{ marginTop: '10%' }}> */}
                <div div className="card" style={{ width: '30rem' }
                }>
                    <div className="card-body">
                        <form action=''>

                            <div className="mb-3">
                                <label htmlFor="userEmail" className="form-label">Email address</label>
                                <input ref={emailRef} type="email" className="form-control" name="userEmail" id="userEmail" aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="userPassword" className="form-label">Password</label>
                                <input ref={passwordRef} type="password" className="form-control" name="userPassword" id="userPassword"
                                />
                            </div>

                            <button type="submit" onClick={loginUser} className="btn btn-primary mt-4">Login</button>
                        </form>
                    </div>
                </div>
            {/* </div > */}


            {/* <div className='container' style={{ marginTop: '10%' }}> */}
                <div>
                    <img src={sideLogo} alt="Logo" height="300px"></img>
                </div>
            {/* </div > */}
        </div >
    )
}

export default Login
