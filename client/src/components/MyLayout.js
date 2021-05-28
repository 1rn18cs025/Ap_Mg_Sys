import React, { useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import { BASE_URL } from '../config';
// import '../css/home.css'
// import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export const MyLayout = ({children,children1,children2})=> {
    const history = useHistory();


    const logout = async () => {
        await fetch(`${BASE_URL}logout`)
        sessionStorage.clear();
        history.goBack();
        // console.log(history);
    }



    return(
        <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">HOME</Menu.Item>
                        <Button type="primary" icon={<PoweroffOutlined />} onClick={logout}/>
                        {/* <button id='logout_button' onClick={logout}>Logout</button> */}

                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={children1}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="VIEW">
                                <Menu.Item key="1">
                                    <Link to='/Residents'> Residents</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to='/Flats'> Flats</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to='/Staff'> Staff</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to='/Bill'> Bill</Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to='/Complain'> Complain</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined />} title="INSERT">
                                <Menu.Item key="6">
                                    <Link to='/Insert_Resident'>Add_Resident</Link>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Link to='/Insert_Flat'>Add_Flat</Link>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Link to='/Insert_Staff'>Add_Staff</Link>
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <Link to='/Insert_Bill'>Add_Bill</Link>
                                </Menu.Item>
                                <Menu.Item key="10">
                                    <Link to='/Insert_Complain'>Add_Complain</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined />} title="DELETE">
                                <Menu.Item key="11">
                                    <Link to='/Delete_Resident'>Delete_Resident</Link>
                                </Menu.Item>
                                <Menu.Item key="12">
                                    <Link to='/Delete_Staff'>Delete_Staff</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}> 
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home/{children2}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                           {children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
    )

}