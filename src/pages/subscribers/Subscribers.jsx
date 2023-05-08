import React, {useState, useEffect} from 'react'
import { Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {getSubscribers} from '../../features/subscribers/subscriberSlice'

const columns = [
  {
    title: 'No.',
    dataIndex: 'num',
  },
  {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'URL',
      dataIndex: 'url',
    },
    {
      title: 'Likes',
      dataIndex: 'likes',
    },
    {
      title: 'Dislikes',
      dataIndex: 'dislikes',
    },
  ];

const Projects = () => {


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
    dispatch(getSubscribers())
  },[]);

const subscriberState = useSelector((state)=>state.subscribers.subscribers)

/**
 * title, desc, projecturl,body,photo,likes,dislikes
 */

const data = [];
for (let i = 0; i < subscriberState.length; i++) {
  data.push({
    num: i + 1,
    email: subscriberState[i].email,
    // description: projectState[i].desc,
    // url: projectState[i].projecturl,
    // likes: projectState[i].likes,
    // dislikes: projectState[i].dislikes,
  });
}

  return (
    <div>
        <h3 className="mb-4">Subscribers</h3>
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

export default Projects