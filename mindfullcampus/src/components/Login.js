import React from 'react'

export const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
    
                <span className='logo'>Mindful campus</span>
                <span className='title'>Login</span>
                

                <form>
                    
                    <input type='email'placeholder='email'/>
                    <input type='password'placeholder='password'/>

                
                    <button>Login</button>
                </form>
                <p>Don't have an account? Register</p>


            </div>
            
        </div>
    )
}

export default Login