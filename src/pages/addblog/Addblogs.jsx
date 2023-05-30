import React, { useState, useEffect } from 'react'
import CustomInput from '../../components/custominput/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from "highlight.js";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { getCategory } from '../../features/blogcat/blogcatSlice';
import { getBlogs, createBlog, resetState, getABlog } from '../../features/blog/blogSlice';
// import { Stepper } from 'react-form-stepper';
// import ReactQuill from "react-quill";
// import ReactMarkdown from "react-markdown";
// import rehypeRaw from "rehype-raw";
import './addblog.css'
// import Dropzone from 'react-dropzone'
// import { uploadImg } from '../../features/upload/uploadSlice';


hljs.configure({
    // optionally configure hljs
    languages: ["javascript", "python", "c", "c++", "java", "HTML", "css", "matlab"],
  });

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ['link', 'image'],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ align: [] }],
  ];
  const modules = {
    syntax: {
      highlight: function (text) {
        return hljs.highlightAuto(text).value;
      },
    },
    toolbar: toolbarOptions,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "link",
    "align",
  ];
  const placeholder = "Description";

  let schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    desc: yup.string().required("Description is required"),
    //photo: yup.string().required("Photo is required"),
    body: yup.string().required("Body is required"),
    category: yup.string().required("Category is required"),
  });


const Addblogs = () => {

    const [value, setValue] = useState('');
    const location = useLocation()
    const getBlogId = location.pathname.split("/")[3]
    //console.log(getBlogId);

    const newBlog = useSelector((state) => state.blogs);
    const blogCat = useSelector((state)=>state.category.category);
    const { isSuccess, isError, isLoading, createdBlog, blogTitle } = newBlog;
    
    useEffect(() => {
      if(getBlogId !== undefined){
        dispatch(getABlog(getBlogId));
        formik.values.title=blogTitle;
      }else{
        dispatch(resetState())
      }
    }, [getBlogId]);
    
    // const [markdownText, setMarkdownText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const [images, setImages] = useState([]);
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  //const imgState = useSelector((state) => state.upload.images);
 
  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("Blog Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  // const img = [];
  // imgState.forEach((i) => {
  //   img.push({
  //     public_id: i.public_id,
  //     url: i.url,
  //   });
  // });

  // useEffect(() => {
  //   formik.values.images = img;
  // }, [color, img]);
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      body: "",
      category: "",
     // images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values))
      dispatch(createBlog(values));
      formik.resetForm();
      setTimeout(() => {
       dispatch(resetState());
       navigate("/admin/blog-list")
      }, 3000);
    },
  });

  return (
    <div>
        <h3 className="mb-4">{getBlogId !== undefined ? "Edit" : "Add"} Blog</h3>
     
     <form action="" onSubmit={formik.handleSubmit} className='d-flex gap-3 flex-column'>
        <CustomInput type="text" label="Enter Blog Title" onCh={formik.handleChange('title')} onBlr={formik.handleBlur('title')} />
        <div className="error">
                    {
                      formik.touched.title && formik.errors.title
                    }
                </div>
        <CustomInput type="text" label="Enter Blog Description" onCh={formik.handleChange('desc')} onBlr={formik.handleBlur('desc')}/>
        <div className="error">
                    {
                      formik.touched.desc && formik.errors.desc
                    }
                </div>
        <select name="" onChange={formik.handleChange("category")} onBlur={formik.handleBlur("category")} id=""className='form-control py-3' >
            <option value="">Select Blog Category</option>
            {blogCat.map((i,j)=>{
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              )
            })}

        </select>
        <div className="error">
                    {
                      formik.touched.category && formik.errors.category
                    }
                </div>

        <ReactQuill
            value={formik.values.body}
            onChange={formik.handleChange("body")}
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder={placeholder}
            name="body"
          />
          
           <div className="error">
                    {
                      formik.touched.body && formik.errors.body
                    }
                </div>

<button type='submit' className='btn btn-success border-0 rounded-3 my-5'>Add Blog</button>
     </form>
     

      <div className="mt-3 mb-3">
          
      </div>

      <div className="mt-3 mb-3">
              
      </div>
        
        

      
          {/* <div className="ql-snow">
            <div className="ql-editor">
              <ReactMarkdown children={value} rehypePlugins={[rehypeRaw]} />
            </div>
          </div> */}
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
          
          <section className=""></section>
    </div>
  )
}

export default Addblogs