import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
   <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>Sing Up</h1>
      <div className="loginsignup-fields">
       <input type="text" placeholder='your name' />
       <input type="password" placeholder='password' />
    
      </div>
      <button>Continue</button>
      <p className='loginsignup-login'>Already have an account? <span>Login</span> </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>I agree to the <span>terms and conditions</span></p>
      </div>
    </div>
   </div>
  )
}
export default LoginSignup