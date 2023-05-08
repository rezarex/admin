import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Form, Space, Popconfirm, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../features/blog/blogSlice';


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
      render: (_, record) => (
        <Space size="middle">
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
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
    });
  }
  return (
    <div>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Bloglist