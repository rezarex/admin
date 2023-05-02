import React from 'react'
import './forgotpassword.css'
import CustomInput from '../../components/custominput/CustomInput'


const Forgotpassword = () => {
  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
       <h3 className='text-center'>Forgotpassword</h3>
       <p className='text-center'>Please enter your registered email to receive link</p>
       <form action="">
       <CustomInput type="text" label="example@email.com" id="email" />
       <button className='border-0 px-3 py-2 text-white fw-bold w-100' style={{ background: "#ffd333" }} type='submit' >Send Link</button>
       </form>
      </div>

    </div>
  )
}

export default Forgotpassword