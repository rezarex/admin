import React, {useEffect} from 'react';
import CustomInput from '../../components/custominput/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {createSkill, resetState} from '../../features/skills/skillsSlice'
let schema = yup.object().shape({
  title: yup.string().required("Skill is required"),
});


const Addskills = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newSkill = useSelector((state)=> state.skills)
  const {isSuccess, isError, isLoading, createdSkill} = newSkill;

  useEffect(()=>{
    if(isSuccess && createdSkill){
      toast.success('🦄 Skill Added Successfully!', {});
    }
    if(isError){
      toast.error('🚑 Something went wrong!', {});
    }
  }, [isSuccess, isError, isLoading])


  const formik = useFormik({
    initialValues: {
     title: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createSkill(values))
      formik.resetForm();
      setTimeout(()=>{
        dispatch(resetState())
        navigate('/admin/skills-list')
      }, 3000)
    },
  });


  return (
    <div>
        <h3 className="mb-4">Add a skill</h3>
        <div className="">
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput type='text' label="Type skill name" onCh={formik.handleChange('title')} onBlr={formik.handleBlur('title')}/>
                <div className="error">
                    {
                      formik.touched.title && formik.errors.title
                    }
                </div>
                <button className="btn btn-success border-0 rounded-3 my-5" type='submit'>
                    Add Skill
                </button>
            </form>
        </div>
    </div>
  )
}

export default Addskills