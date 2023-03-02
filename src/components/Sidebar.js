import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Navigate, NavLink , Link} from 'react-router-dom';
import {AiOutlineLogout} from 'react-icons/ai'
import Header from './Header';


const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "columns"
  },
  {
    name: "Patients",
    path: "/patients",
    icon: "user"
  },
  {
    name: "Messages",
    path: "/chats",
    icon: "sticky-note"
  }
]

const Sidebar = (props) => {
  return (
    <div className='main-cnt'>
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#000000" backgroundColor="#d9d9d9">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Welcome Doctor!
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              {
                routes.map((route) => (
                  <div className='navLink'>
                    <NavLink exact to={route.path} activeclassName="activeClicked">
                      <CDBSidebarMenuItem icon={route.icon} textColor="#000000">{route.name}</CDBSidebarMenuItem>
                    </NavLink>
                  </div>
                ))
              }
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              <Link to={`/`}>
                <button className='btn btn-secondary'
                  onClick={()=>{
                    window.localStorage.removeItem('access-token');
                  }}
                >Logout <icon><AiOutlineLogout/></icon></button>
              </Link>
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
        <div className='page-components w-100'>
          <Header />
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;