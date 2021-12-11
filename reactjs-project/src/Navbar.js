import {Link} from "react-router-dom"
import {MdGrass} from "react-icons/md"
import React from "react";
import './Navbar.css';
import {IconContext} from 'react-icons/lib'


function Navbar() {

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" >
                        <MdGrass className='navbar-icon' />
                        Vietnam Vaccination
                    </Link>

                    <ul className={ 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' >Home </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Extension" className='nav-links'> Extension </Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </IconContext.Provider>   
        </>
    )
}

export default Navbar