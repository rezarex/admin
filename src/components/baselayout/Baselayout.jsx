import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    // UploadOutlined,
    // UserOutlined,
    // VideoCameraOutlined,
  } from '@ant-design/icons';
 import { Button, Layout, Menu, theme } from 'antd';
 import { useNavigate, Outlet, Link } from 'react-router-dom';
 import { useState } from 'react';
 import {AiOutlineDashboard} from 'react-icons/ai'
 import {IoIosNotificationsOutline} from 'react-icons/io'
 import {RiUserSettingsFill, RiCommunityLine} from 'react-icons/ri'
 import {GiEvilBook,GiBookmark,GiSpellBook,GiBookPile,GiBookshelf,GiFireDash,GiWildfires, GiCampfire} from 'react-icons/gi'
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
        <div className="logo">
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>VD</span>
            <span className='lg-logo'>Vado dev</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
              if(key === 'signout'){

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
              children: [
                {
                  key: 'add-blogs',
                  icon: <GiBookmark  />,
                  label: 'Add Blogs',
                },
                {
                  key: 'blog-list',
                  icon: <GiBookPile />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-categories',
                  icon: <GiBookshelf />,
                  label: 'Blog Categories',
                },
                {
                  key: 'add-categories',
                  icon: <GiSpellBook />,
                  label: 'Add Blog Categories',
                },
              ]
            },
            {
              key: 'community',
              icon: < RiCommunityLine />,
              label: 'Community',
              children: [
                {
                  key: 'subscribers',
                  icon: <BsPeople />,
                  label: 'Subscribers',
                },
                {
                  key: 'members',
                  icon: <RiUserSettingsFill/>,
                  label: 'Members',
                },
              ]
            },
            {
              key: 'skills',
              icon: <GiCampfire />,
              label: 'Skills',
              children: [
                {
                  key: 'skills-list',
                  icon: <GiWildfires />,
                  label: 'Skills List',
                },
                {
                  key: 'projects',
                  icon: <GiFireDash />,
                  label: 'Projects',
                },
                {
                  key: 'add-skills',
                  icon: <GiWildfires />,
                  label: 'Add Skills',
                },
                {
                  key: 'add-projects',
                  icon: <GiWildfires />,
                  label: 'Add Projects',
                },
            ]
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
        className="d-flex justify-content-between ps-3 pe-5"
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

          <div className='d-flex gap-3 align-items-center'>
            <div className='position-relative'> 
              <IoIosNotificationsOutline className='text-white'/>
              <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
            </div>
            <div className='d-flex gap-3 align-items-center dropdown'>
              <div>
                <img className='img' src="https://wallpapers.com/images/hd/cool-profile-picture-n8lf8k6jzs6ex36l.jpg" alt="" />
              </div>
              <div role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <h5 className='text-white mb-0'>Marvin</h5>
                <p className='text-white mb-0'>marvin.wekesa@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><Link className="dropdown-item py-2 mb-0" style={{"height": "auto", "lineHeight" : "20px"}} to="/">Profile</Link></li>
                  <li><Link className="dropdown-item py-2 mb-0" style={{"height": "auto", "lineHeight" : "20px"}} to="/">Logout</Link></li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
           
          }}
        >
          
          <Outlet/>
          
        </Content>
      </Layout>
    </Layout>
    );
}

export default Baselayout