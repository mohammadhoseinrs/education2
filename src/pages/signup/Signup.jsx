import React from 'react'
import Signin from '../../components/Signup/Signin/Signin'
import Signupform from '../../components/Signup/SignupForm/Signupform'
import SignupTop from '../../components/Signup/Signuptop/SignupTop'
import './Signup.css'
export default function Signup() {
  return (
    <div>
      <SignupTop />
      <div style={{display:'flex',justifyContent:'space-between' , width:'80%', margin:'0 auto'}}>
          <Signin />
         <Signupform />
      </div>
    </div>
  )
}
