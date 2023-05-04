import React, { useState, useEffect } from 'react'
import CustomInput from '../../components/custominput/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from "highlight.js";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
// import { Stepper } from 'react-form-stepper';
// import ReactQuill from "react-quill";
// import ReactMarkdown from "react-markdown";
// import rehypeRaw from "rehype-raw";
import './addblog.css'


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

  const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Addblogs = () => {

    const [value, setValue] = useState('');
    
    // const [markdownText, setMarkdownText] = useState("");
    // useEffect(() => {
    //   console.log({ markdownText });
    // }, [markdownText]);

  return (
    <div>
        <h3 className="mb4">Add Blog</h3>
     
     
        <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>

    <div className="mt-3">
        <CustomInput type="text" label="Enter Blog Title" />
</div>
        <select name="" id=""className='form-control py-3 mb-3' >
            <option value="">Select Blog Category</option>

        </select>
        

        <ReactQuill
            value={value}
            onChange={setValue}
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder={placeholder}
          />
          {/* <div className="ql-snow">
            <div className="ql-editor">
              <ReactMarkdown children={value} rehypePlugins={[rehypeRaw]} />
            </div>
          </div> */}
          <button type='submit' className='btn btn-success border-0 rounded-3 my-5'>Add Blog</button>
          <section className=""></section>
    </div>
  )
}

export default Addblogs