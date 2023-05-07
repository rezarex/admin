import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {getSkills} from '../../features/skills/skillsSlice'

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Date added',
    dataIndex: 'created',
  },
  {
    title: 'Ratings',
    dataIndex: 'ratings',
  },
];


const Skillslist = () => {
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
        dispatch(getSkills())
      },[]);

  const skillsState = useSelector((state)=>state.skills.skills)

/**
 * title, totalratings, createdAt, images
 * 
 */
      const data = [];
      for (let i = 0; i < skillsState.length; i++) {
        data.push({
          key: i + 1,
          title: skillsState[i].title,
          ratings: skillsState[i].totalratings,
          created: skillsState[i].createdAt,
        });
      }

  return (
    <div>
           <h3 className="mb-4">Skills</h3>
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

export default Skillslist