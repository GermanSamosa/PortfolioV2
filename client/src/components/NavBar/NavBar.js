import React from 'react'
import NavItem from './NavItem/NavItem'

function NavBar() {
    return (
        <>
            <div className='navbar sticky-top bg-body-tertiary'>
                <div className='navbar-container'>
                    <ul>
                        <NavItem to='/' label='Rao Dev'/>
                        <NavItem to='/about' label='About'/>
                        <NavItem to='/projects' label='Projects'/>
                        <NavItem to='/contact' label='Contact'/>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar