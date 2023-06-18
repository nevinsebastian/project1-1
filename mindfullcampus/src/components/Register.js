import React from 'react'
import './register.css'

const Register = () => {
  return (
      <div className="formContainer">
          <div className="formWrapper">
              <span className='logo'>Mindful campus</span>
              <span className='title'>Register</span>
              

              <form>
                  <input type='text' placeholder='username'/>
                  <input type='email'placeholder='email'/>
                  <input type='password'placeholder='password'/>

                 
                  <button>Sign up</button>
              </form>
              <p>Have an account already? Login</p>


          </div>

          
          
      </div>
  )
}
export default Register;