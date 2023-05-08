import React, {useState, useEffect} from 'react'
import { Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../features/messages/messagesSlice';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Message',
    dataIndex: 'message',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
];
  // const data = [];
  // for (let i = 0; i < 46; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edward King ${i}`,
  //     age: 32,
  //     address: `London, Park Lane no. ${i}`,
  //   });
  // }

const Messages = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMessages())
  },[]);

const messageState = useSelector((state)=>state.messages.messages)

/**
* title, totalratings, createdAt, images
* 
*/
  const data = [];
  for (let i = 0; i < messageState.length; i++) {
    data.push({
      key: i + 1,
      name: messageState[i].name,
      email: messageState[i].email,
      message: messageState[i].message,
      date: messageState[i].createdAt,
    });
  }

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

  return (
    <div>
        <h3 className="mb-4">Messages</h3>
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

export default Messages