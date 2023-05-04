import React from 'react'
import {BsGraphUpArrow, BsGraphDownArrow} from 'react-icons/bs'
import "./dashboard.css"
import { Column } from '@ant-design/plots';
import { Space, Table, Tag } from 'antd';


const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags && tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit </a>
        |
        <a>Delete</a>
      </Space>
    ),
  },
];
const data1 = [
  {
    key: '1',
    date: 'John Brown',
    title: 32,
    description: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    date: 'Jim Green',
    title: 42,
    description: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    date: 'Joe Black',
    title: 32,
    description: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      posts: 38,
    },
    {
      type: 'Feb',
      posts: 52,
    },
    {
      type: 'Mar',
      posts: 61,
    },
    {
      type: 'Apr',
      posts: 145,
    },
    {
      type: 'May',
      posts: 48,
    },
    {
      type: 'Jun',
      posts: 38,
    },
    {
      type: 'Jul',
      posts: 38,
    },
    {
      type: 'Aug',
      posts: 38,
    },
    {
      type: 'Sep',
      posts: 48,
    },
    {
      type: 'Oct',
      posts: 68,
    },
    {
      type: 'Nov',
      posts: 28,
    },
    {
      type: 'Dec',
      posts: 38,
    },
  ];
  const paletteSemanticRed = '#F4664A';
  const brandColor = '#5B8FF9';
  const config = {
    data,
    xField: 'type',
    yField: 'posts',
    color: ({ type }) => {
      if (type === '10-30分' || type === '30+分') {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Months',
      },
      posts: {
        alias: 'Posts',
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4'>DashBoard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div> <p className=''>members</p> <h4 className='mb-0'>20</h4></div>
          <div className='d-flex flex-column align-items-end'> 
            <h6 className='red'> <BsGraphDownArrow/> 15%</h6>
            <p className='mb-0'>Compared to last month</p>
             </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div> <p className=''>members</p> <h4 className='mb-0'>20</h4></div>
          <div className='d-flex flex-column align-items-end'> 
            <h6 className='red'> <BsGraphDownArrow/>15%</h6>
            <p className='mb-0'>Compared to last month</p>
             </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div> <p className=''>members</p> <h4 className='mb-0'>20</h4></div>
          <div className='d-flex flex-column align-items-end'> 
            <h6 className='green'> <BsGraphUpArrow/>15%</h6>
            <p className='mb-0'>Compared to last month</p>
             </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Blog Stats</h3>
        <div><Column {...config} />;</div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">
          Recent Blogs
        </h3>
        <div><Table columns={columns} dataSource={data1} /></div>
      </div>
    </div>
  )
}

export default Dashboard