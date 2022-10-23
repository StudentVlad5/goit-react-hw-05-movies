import { Outlet } from 'react-router-dom';
import { FaCat, FaBook } from "react-icons/fa";
import {HeaderItem, StyledLi, NavItem} from '../../styled/AppBar.styled';


const navItems = [
    {href: "home", text: "Home", icon : FaBook},
    {href: "moves", text: "Movies", icon : FaCat},

]

function AppBar () {
    return ( 
        <div className='container-wrep' style={{width:'100%'}}>
            <HeaderItem>
                <ul style={{listStyleType: 'none', display:'flex'}}>  
                        {navItems.map(({href, text, icon:Icon})=>(<StyledLi key={href}><NavItem to={href} ><Icon/>{text}</NavItem></StyledLi>))}         
                </ul>
            </HeaderItem>
              <Outlet />
        </div>
    )
}

export default AppBar

