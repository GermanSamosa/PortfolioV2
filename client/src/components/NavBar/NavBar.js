import React from 'react'
import NavItem from './NavItem/NavItem'
import './NavBar.css'

function NavBar() {
    return (
        <><div className='container-fluid'>
<div className='navbar'>
                <div className='navbar-brand'>
                    <NavItem to='/' label='Portfoli-Home'/>
                </div>
                <div className='navbar-container'>
                    <ul>
                        <NavItem to='/about' label='About'/>
                        <NavItem to='/projects' label='Experience'/>
                        <NavItem to='/contact' label='Contact'/>
                    </ul>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default NavBar