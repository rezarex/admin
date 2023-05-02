import React from 'react'
import './resetpassword.css'
import CustomInput from '../../components/custominput/CustomInput'


const Resetpassword = () => {
  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
       <h3 className='text-center'>Resetpassword</h3>
       <p className='text-center'>Enter new password</p>
       <form action="">
       <CustomInput type="password"  label="Password" id="password" />
       <CustomInput type="password"  label="Confirm Password" id="confirmpassword" />
       <button className='border-0 px-3 py-2 text-white fw-bold w-100' style={{ background: "#ffd333" }} type='submit' >Reset password</button>
       </form>
      </div>

    </div>
  )
}

export default Resetpassword