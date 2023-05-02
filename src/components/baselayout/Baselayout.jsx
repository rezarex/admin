import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
 import { Button, Layout, Menu, theme } from 'antd';
 import { useNavigate } from 'react-router-dom';
 import { useState } from 'react';
 import {AiOutlineDashboard} from 'react-icons/ai'
 import {GiEvilBook, GiCampfire} from 'react-icons/gi'
 import {BsPeople, BsChatLeftDots} from 'react-icons/bs'
 import './baselayout.css'
 const { Header, Sider, Content } = Layout;

const Baselayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {token: {colorBgContainer},} = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
              if(key == 'signout'){

              } else {
                navigate(key)
              }
          }}  
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard />,
              label: 'Dashboard',
            },
            {
              key: 'blogs',
              icon: <GiEvilBook />,
              label: 'Blogs',
            },
            {
              key: 'subscribers',
              icon: <BsPeople />,
              label: 'Subscribers',
            },
            {
              key: 'skills',
              icon: <GiCampfire />,
              label: 'Skills',
            },
            {
              key: 'messages',
              icon: <BsChatLeftDots />,
              label: 'Messages',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: 'white'
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
           
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
    );
}

export default Baselayout