import React, { useEffect } from 'react'
import CustomInput from '../../components/custominput/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
// import Dropzone from 'react-dropzone'
// import { uploadImg } from '../../features/upload/uploadSlice';
import { createProjects } from '../../features/projects/projectsSlice';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';


let schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  desc: yup.string().required("Description is required"),
  projecturl: yup.string().required("URL is required"),
  body: yup.string().required("Body is required"),
});

const Addprojects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(()=>{

  // })

  const newProject = useSelector((state)=> state.projects)
  const {isSuccess, isError, isLoading, createdProjects} = newProject;
  useEffect(()=>{
    if(isSuccess && createdProjects){
      toast.success('🦄 Project Created Successfully!', {});
    }
    if(isError){
      toast.error('🚑 Something went wrong!', {});
    }
  }, [isSuccess, isError, isLoading])

  const formik = useFormik({
    initialValues: {
     title: '',
     desc: '',
     projecturl: '',
     body: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProjects(values))
      formik.resetForm();
      setTimeout(()=>{
        navigate('/admin/projects')
      }, 3000)
    },
  });
  return (
    <div>
       <h3 className="mb-4">Add a Project</h3>
        <div className="">
            <form action="" onSubmit={formik.handleSubmit} className='d-flex gap-3 flex-column' >
                <CustomInput type='text' onCh={formik.handleChange('title')} onBlr={formik.handleBlur('title')} label="Type Project name" />
                <div className="error">
                    {
                      formik.touched.title && formik.errors.title
                    }
                </div>
                <CustomInput type='text' onCh={formik.handleChange('desc')} onBlr={formik.handleBlur('desc')} label="Type Description" />
                <div className="error">
                    {
                      formik.touched.desc && formik.errors.desc
                    }
                </div>
                <CustomInput type='text' onCh={formik.handleChange('body')} onBlr={formik.handleBlur('body')} label="Enter Project projecturl" />
                <div className="error">
                    {
                      formik.touched.body && formik.errors.body
                    }
                </div>
                <CustomInput type='text' onCh={formik.handleChange('projecturl')} onBlr={formik.handleBlur('projecturl')} label="Type Project Body"/>
                <div className="error">
                    {
                      formik.touched.projecturl && formik.errors.projecturl
                    }
                </div>
                
              {/* 
              add upload later
              *********************
              *********************
              <div className="mt-3 bg-white border-1 p-5 text-center">
                      <Dropzone onDrop={acceptedFiles => dispatch(uploadImg(acceptedFiles))}>
                      {({getRootProps, getInputProps}) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
            
              </div> */}
              {/* <div className="showimages d-flex flex-wrap gap-3">
                {
                  imgState.map((i, j)=>{
                    return (
                      <div className="position-relative" key={j}>
                      <button
                      className="btn-close position-absolute"
                      style={{top: "10px", right: "10px"}}
                      ></button>
                      <img src="" alt=""  width={200} height={200}/>
                    </div>
                    )
                  })
                }
              </div> */}
                <button className="btn btn-success border-0 rounded-3 my-5" type='submit'>
                    Add Project
                </button>
            </form>
        </div>
    </div>
  )
}

export default Addprojects
