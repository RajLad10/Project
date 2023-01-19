import './App.css';
import "./sidenav.css";

import { Link } from "react-router-dom";
import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import { BiTimeFive } from 'react-icons/bi';
import { BiErrorAlt } from 'react-icons/bi';
import { IoMdHourglass } from 'react-icons/io';
import { ImPower} from 'react-icons/im';

import {
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";

// import logo
import logo1 from './logo1.png';
import logo2 from './logo2.png';

const Sidenav = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (

      <div className='nav'>
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>

            <div className="logo">
              <p style={{'text-align': 'center'}}> {menuCollapse ? <a href='./'> <img src={logo1} height={'50px'} alt={"logo1"}/> </a> : <a href='./'> <img src={logo2} height={'50px'} alt={"logo2"}/> </a>} </p>
            </div>

            <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <Menu>
            {
              menuCollapse ? 
              (
                <>

                <MenuItem> 
                  <Link to='/' className="link" style={{'text-decoration':'none'}}> <BiTimeFive style={{height:"30px", width:"30px"}}/> </Link>
                </MenuItem>

                <MenuItem> 
                  <Link to='/Unique' className="link" style={{'text-decoration':'none'}}> <ImPower style={{height:"30px", width:"30px"}}/> </Link>
                </MenuItem>

                <MenuItem>
                  <Link to='/Error' className="link" style={{'text-decoration':'none'}}> <BiErrorAlt style={{height:"30px", width:"30px"}}/> </Link>
                </MenuItem> 

                <MenuItem>
                  <Link to='/Republish' className="link" style={{'text-decoration':'none'}}> <IoMdHourglass style={{height:"30px", width:"30px"}}/> </Link>
                </MenuItem> 

                </>
              ): (
                <>
              <MenuItem active={true} > 
              {/*icon={<FiHome />}*/}
                <Link to='/' className="link" style={{'text-decoration':'none'}}>  
                    <font size={5}> Delayed </font>
                </Link>
              </MenuItem>

              <MenuItem > 
              {/* icon={<FaList />} */}
                <Link to='/Unique' className="link" style={{'text-decoration':'none'}}>  
                    <font size={5}> Unique </font>
                </Link>
              </MenuItem>

              <MenuItem>
              {/*  icon={<FaRegHeart />} */}
                <Link to= "/Error" className="link" style={{'text-decoration':'none'}}>  
                    <font size={5}> Error </font>
                </Link>
              </MenuItem>

              <MenuItem>
              {/*  icon={<RiPencilLine />} */}
                <Link to='/Republish' className="link" style={{'text-decoration':'none'}}>  
                    <font size={5}> Republish </font>
                </Link>
              </MenuItem>

              {/* <MenuItem icon={<BiCog />}>Settings</MenuItem> */}
              </>
              )
            }
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    
  );
};

export default Sidenav;


