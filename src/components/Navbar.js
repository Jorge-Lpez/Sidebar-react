import React, { useState } from 'react';
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai"
import { Link } from "react-router-dom"; 
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

const Navbar = () => {

    const [ sidebar, setSidebar ] = useState(false);


    const showSidebar = () => setSidebar( !sidebar );

    return ( 
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <Link onClick={ showSidebar } to="#" className="menu-bars">
                        <FaBars/>
                    </Link>
                </div>
                <nav className={ sidebar ? "nav-menu active" : "nav-menu"}>

                    <ul onClick={showSidebar} className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiFillCloseCircle/>
                            </Link>
                        </li>
                        {   SidebarData.map( ( item, index )  => (
                                <li key={index} className={item.cName}>
                                    <Link to={`${item.path}`}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ) )
                        }
                    </ul>

                </nav>
            </IconContext.Provider>
        </>
     );
}
 
export default Navbar;