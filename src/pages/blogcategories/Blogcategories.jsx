import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {getCategory} from '../../features/blogcat/blogcatSlice'
const columns = [
  {
    title: 'No.',
    dataIndex: 'num',
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Date added',
    dataIndex: 'created',
  },
];


const Blogcategories = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  
  const hasSelected = selectedRowKeys.length > 0; 

      const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(getCategory())
      },[]);

  const categoryState = useSelector((state)=>state.category.category)

/**
 * title, totalratings, createdAt, images
 * 
 */
      const data = [];
      for (let i = 0; i < categoryState.length; i++) {
        data.push({
          num: i + 1,
          title: categoryState[i].title,
         // ratings: categoryState[i].totalratings,
          created: categoryState[i].createdAt,
        });
      }

  return (
    <div>
           <h3 className="mb-4">Categories</h3>
        <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}

export default Blogcategories