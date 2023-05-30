import React, {useEffect} from 'react'
import CustomInput from '../../components/custominput/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createCategory, resetState } from '../../features/blogcat/blogcatSlice';

let schema = yup.object().shape({
  title: yup.string().required("Blog Category is required"),
});

const AddCategory = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const newCategory = useSelector((state)=> state.category)
  const {isSuccess, isError, isLoading, createdCategory} = newCategory;

  useEffect(()=>{
    if(isSuccess && createdCategory){
      toast.success('🦄 Blog Category Created Successfully!', {});
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
      dispatch(createCategory(values))
      formik.resetForm();
      setTimeout(()=>{
        resetState();
        navigate('/admin/blog-categories')
      }, 3000)
    },
  });


  return (
    <div><h3 className="mb-4">Add a Category</h3>
    <div className="">
        <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput type='text' label="Type Category name" onCh={formik.handleChange('title')} onBlr={formik.handleBlur('title')} />
            <div className="error">
                    {
                      formik.touched.title && formik.errors.title
                    }
                </div>
            <button className="btn btn-success border-0 rounded-3 my-5" type='submit'>
                Add Category
            </button>
        </form>
    </div></div>
  )
}

export default AddCategory