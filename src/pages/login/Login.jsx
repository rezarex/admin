import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import './login.css'
import CustomInput from '../../components/custominput/CustomInput'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login, resetState } from '../../features/auth/authSlice';
import {  toast } from 'react-toastify';


let schema = yup.object().shape({
  email: yup.string().email("Email should be valid").required("Email is required"),
  password: yup.string().required("Password is required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values))
      setTimeout(()=>{
        dispatch(resetState())
        //navigate('/admin')
      }, 300)
      //alert(JSON.stringify(values, null, 2));
    },
  });

  const authState = useSelector((state)=>state)

  const {user, isLoading, isError, isSuccess, message} = authState.auth;
  useEffect(()=>{
    if(isLoading){
      toast.success('🦄 Loging in..', {});
    }else if(isSuccess){
      //alert("successfully logged in!");
      toast.success('🦄 Login Successful!', {});
      navigate("admin")
    } else {
      toast.error('🚑 Something went wrong!', {});
      navigate("")
    }
  }, [user, isLoading, isError, isSuccess])

  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
       <h3 className='text-center'>Login</h3>
       <p className='text-center'>Admin Login Page</p>

      <div className="error text-center">
        {message.message === "Rejected" ? "You are not an admin" : ""}
      </div>

       <form action="" onSubmit={formik.handleSubmit}>
       <CustomInput
        type="text" name='email' 
        label="example@email.com" 
        id="email" 
        val={formik.values.email} 
        onCh={formik.handleChange('email')}
        />

        <div className="error">
          {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
           ) : null}
       </div>


       <CustomInput
        type="password" 
        name='password' 
        label="password" 
        id="password" 
        val={formik.values.password} 
        onCh={formik.handleChange('password')}
        // onbl={formik.handleChange('password')}
        />

        <div className="error">
        {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
        </div>

       <div className='mb-3 text-end' >
        <Link to="/forgot-password"  >Forgot Password?</Link>
       </div>
       <button 
       className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
       style={{ background: "#ffd333" }}
       type='submit' >Login</button>
       </form>
      </div>

    </div>
  )
}

export default Login