import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Form, Space, Popconfirm, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../features/blog/blogSlice';
import { Link } from 'react-router-dom';
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'


const columns = [
  {
    title: 'No.',
    dataIndex: 'num',
    key: 'num',
  },  
  {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Descritpion',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
    {
      title: 'Date Created',
      dataIndex: 'created',
      key: 'created',
    },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action'
    },
  ];


  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //    // tags: ['nice', 'developer'],  -->add category function here
  //   },
  // ];

const Bloglist = () => {
  //const hasSelected = selectedRowKeys.length > 0; 

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBlogs())
  },[]);

const blogsState = useSelector((state)=>state.blogs.blogs)

/**
* title, totalratings, createdAt, images
* 
*/
  const data = [];
  for (let i = 0; i < blogsState.length; i++) {
    data.push({
      num: i + 1,
      title: blogsState[i].title,
      desc: blogsState[i].desc,
      body: blogsState[i].body,
      created: blogsState[i].createdAt,
      action: (
       <>
       
        <Space size="middle">
          <Link to={`/admin/add-blogs/${blogsState[i]._id}`} className='fs-3 text-danger'>
            <BiEdit/>
          </Link>
          <Link to="" className='fs-3 text-danger'>
            <AiFillDelete/>
          </Link>
        </Space>
      
       </> 
      ),
    });
  }
  return (
    <div>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Bloglist