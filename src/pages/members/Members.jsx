import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/members/membersSlice';

const columns = [
    {
      title: 'Full Name',
      width: 80,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      defaultSortOrder: "descend",
      sorter: (a,b) => a.name.length - b.name.length,
    },
    {
      title: 'Email',
      width: 80,
      dataIndex: 'email',
      key: 'email',
      fixed: 'left',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: '1',
      width: 150,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: '2',
      width: 150,
    },
    {
      title: 'Member Since',
      dataIndex: 'membersince',
      key: '2',
      width: 150,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];
 

const Members = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers())
  },[]);
  const memberstate = useSelector((state)=>state.members.members)

  const data = [];
  for (let i = 0; i < memberstate.length; i++) {
    data.push({
      key: i + 1,
      name: memberstate[i].username,
      email: memberstate[i].email,
      mobile: memberstate[i].mobile,
      role: memberstate[i].role,
      membersince: memberstate[i].createdAt,
    });
  } 

  return (
    <div>
      <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />
    </div>
  )
}

export default Members
