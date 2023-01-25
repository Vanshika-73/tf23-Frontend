import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
  return (
        <navbar>
        <header className="header">
            <div className="logo">
                <Link to='/'>
                    <img src ='/navbar/logo.png' alt = "No Internet"/>
                </Link>
            </div>

            <div className="navigation">

                <input type="checkbox" className='toggle-menu'/>
                <div className="hamburger"></div>

                <ul className="navbar-items">
                    <li><Link to={'aboutUs'}>About Us</Link></li>
                    <li><Link to={'/workshop'}>Workshops</Link></li>
                    <li >
                    <Link to='/domain'>Domains</Link>
                        {/* <Link to='/domain'>Domains &#32;<i className="arrow down"></i></Link> */}
                        {/*-- DROPDOWN MENU */}
                        {/* <ul className="dropdown">
                            <li><Link to='/domain/Karyarachna'>Karyarachna</Link></li>
                            <li><Link to='/domain/Plexus'>Plexus</Link></li>
                            <li><Link to='/domain/Chemfor'>Chemfor</Link></li>
                            <li><Link to='/domain/Electrica'>Electrica</Link></li>
                            <li><Link to='/domain/Karyarachna'>Domain 5</Link></li>
                        </ul> */}
                    </li>
                    {/* <li><Link>CA Program</Link></li> */}
                    {/* <Link className='signInButton'>Sign In</Link> */}
                </ul>
            </div>
        </header>

        </navbar>
        
  )
}

